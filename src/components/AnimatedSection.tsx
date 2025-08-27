'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  animation?: 'slide-up' | 'slide-left' | 'slide-right' | 'fade-in' | 'scale-in'
  delay?: number
  className?: string
  threshold?: number
}

export default function AnimatedSection({ 
  children, 
  animation = 'slide-up', 
  delay = 0,
  className = '',
  threshold = 0.1
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold, rootMargin: '50px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getAnimationClass = () => {
    if (!isVisible) return getInitialClass()
    
    switch (animation) {
      case 'slide-left':
        return 'opacity-100 translate-x-0'
      case 'slide-right':
        return 'opacity-100 translate-x-0'
      case 'fade-in':
        return 'opacity-100'
      case 'scale-in':
        return 'opacity-100 scale-100'
      default:
        return 'opacity-100 translate-y-0'
    }
  }

  const getInitialClass = () => {
    switch (animation) {
      case 'slide-left':
        return 'opacity-0 -translate-x-10'
      case 'slide-right':
        return 'opacity-0 translate-x-10'
      case 'fade-in':
        return 'opacity-0'
      case 'scale-in':
        return 'opacity-0 scale-95'
      default:
        return 'opacity-0 translate-y-10'
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-800 ease-out ${
        isVisible ? getAnimationClass() : getInitialClass()
      } ${className}`}
    >
      {children}
    </div>
  )
}
