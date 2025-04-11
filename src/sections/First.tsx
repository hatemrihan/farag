'use client';
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'

import Nav from './Nav'

gsap.registerPlugin(ScrollTrigger)

const ROTATING_WORDS = ['photographers', 'artists', 'creatives', 'designers', 'everyone']

const First = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState<string | null>(null)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  

  useEffect(() => {
    // Rotating words animation
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Use the same video for both mobile and desktop for now
    // until we have a properly optimized mobile version
    video.preload = 'auto'
    video.src = '/videos/scene.mp4'
    video.load()

    const handleLoadStart = () => {
      console.log('Video load started')
      setVideoError(null)
    }

    const handleLoadedData = () => {
      console.log('Video data loaded successfully')
      setIsVideoLoaded(true)
      video.play().catch(err => {
        console.error('Play error:', err)
        setVideoError('Failed to play video')
      })
    }

    const handleError = () => {
      const error = video.error
      console.error('Video error:', error)
      setVideoError(error?.message || 'Failed to load video')
      setIsVideoLoaded(false)
    }

    try {
      video.addEventListener('loadstart', handleLoadStart)
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('error', handleError)

      return () => {
        if (video) {
          video.removeEventListener('loadstart', handleLoadStart)
          video.removeEventListener('loadeddata', handleLoadedData)
          video.removeEventListener('error', handleError)
          video.src = '' // Clear the source on cleanup
        }
      }
    } catch (err) {
      console.error('Error setting up video:', err)
      setVideoError('Failed to initialize video')
    }
  }, [])




  return (
    <>
    <Nav />
    <div className="relative min-h-screen bg-black dark:bg-black text-white overflow-hidden z-50 isolate">
      <div className="relative h-screen  text-black">
        <div className="absolute inset-0">
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-black dark:bg-black flex flex-col items-center justify-center">
              <div className="w-8 h-8 border-2   rounded-full animate-spin mb-4"></div>
              {videoError && (
                <p className="text-red-500 text-sm">{videoError}</p>
              )}
            </div>
          )}
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: isVideoLoaded ? 1 : 0 }}
            poster="/videos/poster.jpg"
          >
            <source src="/videos/scene.mp4" type="video/mp4" />
          </video>
          <div className="absolute"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 isolate">
          <div className="flex flex-col items-center justify-center transform -translate-y-4"> 
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-6 text-center text-black" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
              {/* FARAG */}
            </h1>
            <div className="flex flex-wrap justify-center items-center text-xl md:text-2xl text-gray-700">
              <span className="text-center mr-2">A discovery engine for</span>
              <span className="min-w-[150px] inline-block font-medium">
                {ROTATING_WORDS[currentWordIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default First