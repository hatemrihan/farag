'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { StaticImageData } from 'next/image';
import girlSixthImage from '@/assets/images/girlSixth-image.jpg';
// Import your other images properly
import fayaImage from '@/assets/images/faya-image.jpg';
import sobhImage from '@/assets/images/sobh-image.jpg';
import mazenImage from '@/assets/images/mazen-image.jpg';
import redGuyImage from '@/assets/images/redguy-image.jpg';
import girlFourthImage from '@/assets/images/girlFourth-image.jpg';
import groupThreeImage from '@/assets/images/groupThree-image.jpg';
import groupTwoImage from '@/assets/images/groupTwo-image.jpg';
import sobhThreeImage from '@/assets/images/sobhThree-image.jpg';
import fayaThreeImage from '@/assets/images/fayaThree-image.jpg';
import mazenThreeImage from '@/assets/images/mazenThree-image.jpg';
import girlThirdImage from '@/assets/images/girlThird-image.jpg';

const GridGallery = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a script element to import three.js and GSAP
    // In a real app, you'd import these via npm packages
    const isScriptsLoaded = () => {
      return typeof THREE !== 'undefined' && typeof gsap !== 'undefined';
    };

    const initializeCore = () => {
      if (!isScriptsLoaded() || !gridRef.current) return;

      let ww = window.innerWidth;
      let wh = window.innerHeight;

      const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
      const isWindows = navigator.appVersion.indexOf("Win") != -1;

      const mouseMultiplier = .6;
      const firefoxMultiplier = 20;

      const multipliers = {
        mouse: isWindows ? mouseMultiplier * 2 : mouseMultiplier,
        firefox: isWindows ? firefoxMultiplier * 2 : firefoxMultiplier
      };

      /** PLANE **/
      const loader = new THREE.TextureLoader();

      const vertexShader = `
      precision mediump float;

      uniform float u_diff;

      varying vec2 vUv;

      void main(){
        vec3 pos = position;
        
        pos.y *= 1. - u_diff;
        pos.x *= 1. - u_diff;

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);;
      }
      `;

      const fragmentShader = `
      precision mediump float;

      uniform vec2 u_res;
      uniform vec2 u_size;

      uniform sampler2D u_texture;

      vec2 cover(vec2 screenSize, vec2 imageSize, vec2 uv) {
        float screenRatio = screenSize.x / screenSize.y;
        float imageRatio = imageSize.x / imageSize.y;

        vec2 newSize = screenRatio < imageRatio 
            ? vec2(imageSize.x * (screenSize.y / imageSize.y), screenSize.y)
            : vec2(screenSize.x, imageSize.y * (screenSize.x / imageSize.x));
        vec2 newOffset = (screenRatio < imageRatio 
            ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
            : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;

        return uv * screenSize / newSize + newOffset;
      }

      varying vec2 vUv;

      void main() {
          vec2 uv = vUv;

          vec2 uvCover = cover(u_res, u_size, uv);
          vec4 texture = texture2D(u_texture, uvCover);
        
          gl_FragColor = texture;
      }
      `;

      const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
      const material = new THREE.ShaderMaterial({
        fragmentShader,
        vertexShader,
      });

      class Plane extends THREE.Object3D {
        el!: HTMLElement;
        x: number = 0;
        y: number = 0;
        my: number = 0;
        geometry!: THREE.BufferGeometry;
        material!: THREE.ShaderMaterial;
        texture!: THREE.Texture;
        mesh!: THREE.Mesh;
        rect!: DOMRect;
        xOffset: number = 0;
        yOffset: number = 0;

        constructor() {
          super();
        }

        init(el: HTMLElement, i: number) {
          this.el = el;
          
          this.x = 0;
          this.y = 0;
          
          this.my = 1 - ((i % 5) * 0.1);

          this.geometry = geometry;
          this.material = material.clone();

          this.material.uniforms = {
            u_texture: { value: 0 },
            u_res: { value: new THREE.Vector2(1, 1) },
            u_size: { value: new THREE.Vector2(1, 1) }, 
            u_diff: { value: 0 }
          };
          
          this.texture = loader.load(this.el.dataset.src || '', (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;

            const { naturalWidth, naturalHeight } = texture.image;
            const { u_size, u_texture } = this.material.uniforms;

            u_texture.value = texture;
            u_size.value.x = naturalWidth;
            u_size.value.y = naturalHeight;
          });

          this.mesh = new THREE.Mesh(this.geometry, this.material);                
          this.add(this.mesh);   
          
          this.resize();
        }
        
        update = (x: number, y: number, max: {x: number, y: number}, diff: number) => {
          const { right, bottom } = this.rect;
          const { u_diff } = this.material.uniforms;
          
          this.y = gsap.utils.wrap(
            -(max.y - bottom), 
            bottom, 
            y * this.my
          ) - this.yOffset;
          
          this.x = gsap.utils.wrap(
            -(max.x - right), 
            right, 
            x
          ) - this.xOffset;
          
          u_diff.value = diff;
          
          this.position.x = this.x;
          this.position.y = this.y;
        }
        
        resize() {
          this.rect = this.el.getBoundingClientRect();

          const { left, top, width, height } = this.rect;
          const { u_res } = this.material.uniforms;

          this.xOffset = (left + (width / 2)) - (ww / 2);
          this.yOffset = (top + (height / 2)) - (wh / 2);

          this.position.x = this.xOffset;
          this.position.y = this.yOffset;
          
          u_res.value.x = width;
          u_res.value.y = height;
          
          this.mesh.scale.set(width, height, 1);
        }
      }

      /** CORE **/
      class Core {
        tx: number = 0;
        ty: number = 0;
        cx: number = 0;
        cy: number = 0;
        
        diff: number = 0;
        
        wheel: { x: number, y: number } = { x: 0, y: 0 };
        on: { x: number, y: number } = { x: 0, y: 0 };
        max: { x: number, y: number } = { x: 0, y: 0 };
        
        isDragging: boolean = false;
        
        tl: gsap.core.Timeline;
        
        el: HTMLElement;
        
        scene: THREE.Scene;
        camera: THREE.OrthographicCamera;
        renderer: THREE.WebGLRenderer;
        planes: Plane[] = [];

        constructor() {
          this.tx = 0;
          this.ty = 0;
          this.cx = 0;
          this.cy = 0;
          
          this.diff = 0;
          
          this.wheel = { x: 0, y: 0 };
          this.on = { x: 0, y: 0 };
          this.max = { x: 0, y: 0 };
          
          this.isDragging = false;
          
          this.tl = gsap.timeline({ paused: true });
          
          this.el = gridRef.current as HTMLElement;
          
          /** GL specifics **/
          this.scene = new THREE.Scene();

          this.camera = new THREE.OrthographicCamera(
            ww / -2, ww / 2, wh / 2, wh / -2, 1, 1000
          );
          this.camera.lookAt(this.scene.position);
          this.camera.position.z = 1;

          this.renderer = new THREE.WebGLRenderer({ antialias: true });
          this.renderer.setSize(ww, wh);
          this.renderer.setPixelRatio(
            gsap.utils.clamp(1, 1.5, window.devicePixelRatio)
          );

          this.renderer.setClearColor(0xf5f5f4); // Stone-100 color

          document.body.appendChild(this.renderer.domElement);
          /** Gl specifics end **/
          
          this.addPlanes();
          this.addEvents();
          this.resize();
        }
        
        addEvents() {
          gsap.ticker.add(this.tick);

          window.addEventListener('mousemove', this.onMouseMove);
          window.addEventListener('mousedown', this.onMouseDown);
          window.addEventListener('mouseup', this.onMouseUp);
          window.addEventListener('wheel', this.onWheel);
        }
        
        addPlanes() {
          const planeElements = [...document.querySelectorAll('.js-plane')] as HTMLElement[];
          
          this.planes = planeElements.map((el, i) => {
            const plane = new Plane();
            plane.init(el, i);
            
            this.scene.add(plane);
            
            return plane;
          });
        }

        tick = () => {
          const xDiff = this.tx - this.cx;
          const yDiff = this.ty - this.cy;
          
          this.cx += xDiff * 0.085;
          this.cx = Math.round(this.cx * 100) / 100;
          
          this.cy += yDiff * 0.085;
          this.cy = Math.round(this.cy * 100) / 100;
          
          this.diff = Math.max(
            Math.abs(yDiff * 0.0001), 
            Math.abs(xDiff * 0.0001)
          );
          
          this.planes.length 
            && this.planes.forEach(plane => 
              plane.update(this.cx, this.cy, this.max, this.diff));

          this.renderer.render(this.scene, this.camera);
        }
        
        onMouseMove = ({ clientX, clientY }: MouseEvent) => {
          if (!this.isDragging) return;
          
          this.tx = this.on.x + clientX * 2.5;
          this.ty = this.on.y - clientY * 2.5;
        }
        
        onMouseDown = ({ clientX, clientY }: MouseEvent) => {
          if (this.isDragging) return;
          
          this.isDragging = true;
          
          this.on.x = this.tx - clientX * 2.5;
          this.on.y = this.ty + clientY * 2.5;
        }
        
        onMouseUp = () => {
          if (!this.isDragging) return;
          
          this.isDragging = false;
        }
        
        onWheel = (e: WheelEvent) => {
          const { mouse, firefox } = multipliers;
          
          // @ts-ignore - wheelDeltaX is a non-standard property
          this.wheel.x = e.wheelDeltaX || e.deltaX * -1;
          // @ts-ignore - wheelDeltaY is a non-standard property
          this.wheel.y = e.wheelDeltaY || e.deltaY * -1;

          if (isFirefox && e.deltaMode === 1) {
            this.wheel.x *= firefox;
            this.wheel.y *= firefox;
          }

          this.wheel.y *= mouse;
          this.wheel.x *= mouse;
          
          this.tx += this.wheel.x;
          this.ty -= this.wheel.y;
        }
        
        resize = () => {
          ww = window.innerWidth;
          wh = window.innerHeight;
          
          const { bottom, right } = this.el.getBoundingClientRect();
          
          this.max.x = right;
          this.max.y = bottom;
        }
      }

      // Initialize the Core
      new Core();
    };
    
    // Initialize after the component is mounted
    initializeCore();

    // Cleanup on unmount
    return () => {
      if (typeof gsap !== 'undefined') {
        gsap.ticker.remove(initializeCore);
      }
      
      // Remove the THREE.js canvas if it exists
      const canvas = document.querySelector('canvas');
      if (canvas) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  // Images data - use the imported static images
  const imagesList = [
    girlSixthImage,
    fayaImage,
    sobhImage,
    mazenImage,
    redGuyImage,
    girlFourthImage,
    groupThreeImage,
    groupTwoImage,
    sobhThreeImage,
    fayaThreeImage,
    mazenThreeImage,
    girlThirdImage,
    girlThirdImage,
    mazenImage,
    redGuyImage,
  ];

  return (
    <div 
      ref={containerRef}
      className="h-full overflow-x-hidden md:overflow-x-visible cursor-grab select-none relative bg-stone-100"
      style={{ fontSize: '1vw' }}
    >
      {/* Marquee Text */}
    

      {/* Grid */}
      <div 
        ref={gridRef} 
        className="fixed top-0 left-0 w-[150%] h-[150%] grid grid-cols-5 js-grid"
      >
        {imagesList.map((image, index) => {
          // Handle both StaticImageData and string types
          const src = typeof image === 'string' ? image : image.src;
          return (
            <div key={index} className="relative">
              <figure className="absolute inset-2 p-0 m-0 js-plane" data-src={src}></figure>
            </div>
          );
        })}
      </div>
      

    </div>
  );
};

export default GridGallery;