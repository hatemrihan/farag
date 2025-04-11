'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';
import fayaFiveImage from '@/assets/images/fayaFive-image.jpg';
import fayaSixImage from '@/assets/images/fayaSix-image.jpg';
import fayaTwoImage from '@/assets/images/fayaTwo-image.jpg';
import fayaThreeImage from '@/assets/images/fayaThree-image.jpg';
import FayaFourImage from '@/assets/images/fayaFour-image.jpg';
import Nav from '@/sections/Nav';
import ImagesMarquee from '@/sections/ImagesMarquee';
import Footer from '@/sections/Footer';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point3DWithP extends Point3D {
  p: number;
}

const PastSpread: React.FC = () => {
  useEffect(() => {
    // Convert degrees to radians
    const dtr = (v: number) => v * Math.PI/180;

    // Camera setup
    const camera = {
      focus: 400,
      self: { x: 0, y: 0, z: 0 },
      rotate: { x: 0, y: 0, z: 0 },
      up: { x: 0, y: 1, z: 0 },
      zoom: 1,
      display: {
        x: window.innerWidth/2,
        y: window.innerHeight/2,
        z: 0
      }
    };

    // Affine transformations
    const affine = {
      world: {
        size: (p: any, size: any) => ({
          x: p.x * size.x,
          y: p.y * size.y,
          z: p.z * size.z
        }),
        rotate: {
          x: (p: any, rotate: any) => ({
            x: p.x,
            y: p.y*Math.cos(dtr(rotate.x)) - p.z*Math.sin(dtr(rotate.x)),
            z: p.y*Math.sin(dtr(rotate.x)) + p.z*Math.cos(dtr(rotate.x))
          }),
          y: (p: any, rotate: any) => ({
            x: p.x*Math.cos(dtr(rotate.y)) + p.z*Math.sin(dtr(rotate.y)),
            y: p.y,
            z: -p.x*Math.sin(dtr(rotate.y)) + p.z*Math.cos(dtr(rotate.y))
          }),
          z: (p: any, rotate: any) => ({
            x: p.x*Math.cos(dtr(rotate.z)) - p.y*Math.sin(dtr(rotate.z)),
            y: p.x*Math.sin(dtr(rotate.z)) + p.y*Math.cos(dtr(rotate.z)),
            z: p.z
          })
        },
        position: (p: any, position: any) => ({
          x: p.x + position.x,
          y: p.y + position.y,
          z: p.z + position.z
        })
      },
      view: {
        point: (p: any) => ({
          x: p.x - camera.self.x,
          y: p.y - camera.self.y,
          z: p.z - camera.self.z
        }),
        x: (p: any) => ({
          x: p.x,
          y: p.y*Math.cos(dtr(camera.rotate.x)) - p.z*Math.sin(dtr(camera.rotate.x)),
          z: p.y*Math.sin(dtr(camera.rotate.x)) + p.z*Math.cos(dtr(camera.rotate.x))
        }),
        y: (p: any) => ({
          x: p.x*Math.cos(dtr(camera.rotate.y)) + p.z*Math.sin(dtr(camera.rotate.y)),
          y: p.y,
          z: p.x*-Math.sin(dtr(camera.rotate.y)) + p.z*Math.cos(dtr(camera.rotate.y))
        }),
        viewReset: (p: any) => ({
          x: p.x - camera.self.x,
          y: p.y - camera.self.y,
          z: p.z - camera.self.z
        }),
        righthandedReversal: (p: any) => ({
          x: p.x,
          y: -p.y,
          z: p.z
        })
      },
      perspective: (p: Point3D): Point3DWithP => {
        const scale = camera.focus * camera.zoom / ((camera.focus-camera.self.z) - p.z);
        return {
          x: p.x * scale,
          y: p.y * scale,
          z: p.z * scale,
          p: scale
        };
      },
      process: (model: Point3D, size: Point3D, rotate: Point3D, position: Point3D, display: Point3D): Point3DWithP => {
        let ret = affine.world.size(model, size);
        ret = affine.world.rotate.x(ret, rotate);
        ret = affine.world.rotate.y(ret, rotate);
        ret = affine.world.rotate.z(ret, rotate);
        ret = affine.world.position(ret, position);
        ret = affine.view.point(ret);
        ret = affine.view.x(ret);
        ret = affine.view.y(ret);
        ret = affine.view.viewReset(ret);
        ret = affine.view.righthandedReversal(ret);
        const perspectiveRet = affine.perspective(ret);
        return {
          x: perspectiveRet.x + display.x,
          y: perspectiveRet.y + display.y,
          z: perspectiveRet.z + display.z,
          p: perspectiveRet.p
        };
      }
    };

    // Initialize canvas
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let strokeColor = "rgba(0,0,0,0.1)";
    let backgroundColor = "rgb(245, 245, 244)";
    let vibrateFlag = false;

    // Sphere class
    class Vertex3D {
      affineIn: any;
      affineOut: any;

      constructor(param: any) {
        this.affineIn = {
          vertex: param.vertex || {x:0, y:0, z:0},
          size: param.size || {x:1, y:1, z:1},
          rotate: param.rotate || {x:0, y:0, z:0},
          position: param.position || {x:0, y:0, z:0}
        };
        this.affineOut = {};
      }

      vertexUpdate() {
        this.affineOut = affine.process(
          this.affineIn.vertex,
          this.affineIn.size,
          this.affineIn.rotate,
          this.affineIn.position,
          camera.display
        );
      }
    }

    // Sphere class
    class Sphere {
      vertices: Vertex3D[];
      radius: number;
      center: any;
      particleNum: number;

      constructor(radius: number, particleNum: number, center: any) {
        this.vertices = [];
        this.radius = radius;
        this.center = center;
        this.particleNum = particleNum;

        for(let i = 0; i < this.particleNum; i++) {
          this.vertices[i] = new Vertex3D({});
        }
      }

      update() {
        for(let i = 0; i < this.vertices.length; i++) {
          const theta = Math.random() * 360;
          const phi = Math.random() * 360;
          const vertex = this.polarToRectangle(theta, phi, this.radius);
          
          this.vertices[i].affineIn.vertex = vertex;
          this.vertices[i].affineIn.position = this.center;
          this.vertices[i].vertexUpdate();
        }
      }

      polarToRectangle(theta: number, phi: number, radius: number) {
        const x = Math.sin(dtr(theta)) * Math.cos(dtr(phi)) * radius;
        const y = Math.sin(dtr(theta)) * Math.sin(dtr(phi)) * radius;
        const z = Math.cos(dtr(theta)) * radius;
        return {x: y, y: z, z: x};
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        for(let i = 0; i < this.vertices.length; i++) {
          for(let j = i; j < this.vertices.length; j++) {
            const distance = 
              Math.pow(this.vertices[i].affineOut.x - this.vertices[j].affineOut.x, 2) +
              Math.pow(this.vertices[i].affineOut.y - this.vertices[j].affineOut.y, 2);
            
            if(distance <= this.radius * 3) {
              ctx.moveTo(this.vertices[i].affineOut.x, this.vertices[i].affineOut.y);
              ctx.lineTo(this.vertices[j].affineOut.x, this.vertices[j].affineOut.y);
            }
          }
        }
        ctx.closePath();
        ctx.stroke();
      }
    }

    // Create spheres
    const sphereNum = 20;
    const spheres: Sphere[] = [];
    for(let i = 0; i < sphereNum; i++) {
      spheres[i] = new Sphere(
        50,
        200,
        {
          x: 35*i - (sphereNum-1)*35/2,
          y: 0,
          z: 0
        }
      );
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = strokeColor;
      
      spheres.forEach(sphere => {
        sphere.update();
        sphere.draw(ctx);
      });
      
      requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      camera.display.x = window.innerWidth/2;
      camera.display.y = window.innerHeight/2;
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      camera.rotate.x = (e.pageY/window.innerHeight) * 180 - 90;
      camera.rotate.y = (e.pageX/window.innerWidth) * 180 - 90;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Nav />
      <div className="bg-stone-100 text-black min-h-screen flex flex-col" id="NewPart">
        <div className="container mx-auto px-4 py-8 flex-grow mt-30">
          <div className="grid grid-cols-12 gap-8">
            {/* Text Column */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
              <h1 className="text-[8rem] lg:text-[10rem] font-bold  leading-none tracking-tighter">
                FAYA
              </h1>
              <p className="mt-4 text-sm text-gray-500">
                MEET FAYA STUDIO - A clothing brand.
              </p>
            </div>

            {/* Image Grid Column */}
            <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-4">
              {/* Image 1 - Larger */}
              <div className="col-span-3 row-span-2">
                <div className="aspect-[4/3] bg-gray-100">
                  <Image
                    src={fayaFiveImage}
                    alt="Large Past Image"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>

              {/* Image 2 */}
              <div className="col-span-1">
                <div className="aspect-square bg-gray-100">
                  <Image
                    src={fayaTwoImage}
                    alt="Past Image 2"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>

              {/* Image 3 */}
              <div className="col-span-1">
                <div className="aspect-square bg-gray-100">
                  <Image
                    src={fayaThreeImage}
                    alt="Past Image 3"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>

              {/* Image 4 */}
              <div className="col-span-1">
                <div className="aspect-square bg-gray-100">
                  <Image
                    src={FayaFourImage}
                    alt="Past Image 4"
                    className="w-full h-full object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Year's Eve Dinner Section */}
      <div className="bg-stone-100 text-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4]">
              <Image
                src={fayaSixImage} // You'll need to add this image to your public folder
                alt="CLOTHNG BARND"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4">
                <span className="text-4xl">*</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-lg">3112</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 border border-white rounded-full"></div>
                <span className="ml-auto">01</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light space-y-2">
                <div>FAYA</div>
                <div> WITH B</div>
                <div>AND S.</div>
              </h2>
              <p className="text-lg leading-relaxed max-w-xl">
              FAYA isn’t just a brand—it’s a vision. It’s about redefining style with a bold, effortless edge. As a photographer working with FAYA, I don’t just capture images; I tell stories of movement, confidence, and raw authenticity. Every frame speaks of the brand’s DNA—where minimalism meets power, and fashion meets purpose.  

FAYA isn’t for everyone. It’s for those who own their space, who turn heads without trying. The color palette? Timeless, yet daring. The fabrics? A fusion of comfort and statement-making precision. When I shoot for FAYA, I focus on the small moments—the way the fabric catches the light, the way the fit commands attention, the way the wearer embodies the brand’s fearless attitude.  

This is FAYA. More than a brand. A statement. And my lens is here to translate its energy into visuals that don’t just sit on a feed but demand presence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Container */}
      {/* <p className='text-white text-3xl text-center bg-black p-10'>hi</p> */}
      <div className="relative w-full h-screen">
        <canvas id="canvas" className="absolute top-0 left-0 w-full h-full">
        </canvas>
        <div id="buffer" className="hidden"></div>
        <ImagesMarquee />
      </div>
      <Footer />
    </>
  );
};

export default PastSpread;