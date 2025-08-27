'use client'

import AnimatedSection from './AnimatedSection'
import Counter from './Counter'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-primary overflow-hidden pt-30 pb-10 lg:pt-25">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float opacity-20">💻</div>
        <div className="absolute top-40 right-20 text-4xl animate-float opacity-20" style={{animationDelay: '1s'}}>⚙️</div>
        <div className="absolute bottom-40 left-20 text-4xl animate-float opacity-20" style={{animationDelay: '2s'}}>🌐</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-20" style={{animationDelay: '0.5s'}}>🔧</div>
        <div className="absolute top-1/2 left-1/4 text-3xl animate-pulse-slow opacity-10">🛡️</div>
        <div className="absolute top-1/3 right-1/3 text-3xl animate-pulse-slow opacity-10" style={{animationDelay: '1.5s'}}>⚡</div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <AnimatedSection animation="slide-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Empowering Your Business with 
                <span className="block lg:inline text-transparent bg-clip-text" style={{
                  background: 'linear-gradient(135deg, var(--color-accent-400), white)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text'
                }}> Cutting-Edge</span> Tech Solutions
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={200}>
              <p className="text-xl lg:text-2xl mb-4 text-primary-100 font-medium">
                We Speak Human and IT
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" delay={400}>
              <p className="text-lg mb-8 text-primary-200 max-w-2xl leading-relaxed">
                Professional IT services tailored for your business success. From managed IT support to networking solutions, we keep your technology running smoothly so you can focus on what matters most.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#contact" 
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg group"
                >
                  Get Started 
                  <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:text-primary-600 transition-all transform hover:scale-105"
                >
                  Our Services
                </a>
              </div>
            </AnimatedSection>

            {/* Animated Stats */}
            <AnimatedSection animation="fade-in" delay={800}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8" style={{borderTop: '1px solid var(--color-primary-400)'}}>
                {[
                  { end: 200, suffix: '+', label: 'Happy Clients' },
                  { end: 24, suffix: '/7', label: 'Support' },
                  { end: 99, suffix: '%', label: 'Uptime' },
                  { end: 5, suffix: '+', label: 'Years Exp.' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <Counter end={stat.end} suffix={stat.suffix} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" />
                    <div className="text-sm text-primary-200 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-right" delay={300}>
            <div className="relative">
              {/* Hero Illustration */}
              <div className="bg-gradient-accent rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-8 text-center transform -rotate-3">
                  <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-4xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Secure IT Solutions</h3>
                  <p className="text-gray-600">Reliable, Scalable, Future-Ready</p>
                  <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg animate-bounce-slow hover:scale-110 transition-transform cursor-pointer">
                <span className="text-2xl">🔒</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg animate-bounce-slow hover:scale-110 transition-transform cursor-pointer" style={{animationDelay: '1s'}}>
                <span className="text-2xl">⚡</span>
              </div>
              
              {/* Additional floating tech icons */}
              <div className="absolute top-1/4 -left-8 bg-primary-100 rounded-full p-3 shadow-lg animate-float opacity-80">
                <span className="text-xl">💻</span>
              </div>
              <div className="absolute bottom-1/4 -right-8 bg-accent-400 bg-opacity-20 rounded-full p-3 shadow-lg animate-float opacity-80" style={{animationDelay: '1.5s'}}>
                <span className="text-xl">📡</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
