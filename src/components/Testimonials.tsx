'use client'

import AnimatedSection from './AnimatedSection'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah T.",
      title: "Operations Manager",
      company: "Retail Business",
      quote: "HarTech Solutions has been an essential partner for our company. Their managed IT services ensure our systems are always up and running, and their team is quick to respond when we need them. They truly make IT worry-free!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "John M.",
      title: "IT Director",
      company: "Marketing Agency",
      quote: "The networking solutions HarTech provided have been a game-changer. Our office now has fast and secure connections, and our team can collaborate more efficiently than ever before. Their service is second to none!",
      rating: 5,
      avatar: "👨‍💻"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it—hear how HarTech Solutions has helped businesses thrive through tailored, dependable IT services.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 200}
            >
              <div className="group card p-8 hover:-translate-y-2 border border-primary-100 hover:border-primary-200 h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                
                {/* Quote Icon */}
                <div className="text-6xl text-primary-200 mb-4 relative z-10">&quot;</div>
                
                {/* Rating */}
                <div className="flex space-x-1 mb-4 relative z-10">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
                
                {/* Verification Badge */}
                <div className="absolute bottom-4 right-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <span>✓</span>
                  <span>Verified</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Additional Social Proof */}
        {/* <AnimatedSection animation="fade-in" delay={400}>
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-8 text-primary-100 max-w-2xl mx-auto">
              Join the many businesses that trust HarTech Solutions to power their IT systems. Contact us today and experience the difference professional IT support can make!
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
              {[
                { number: "200+", label: "Happy Clients" },
                { number: "5★", label: "Average Rating" },
                { number: "99.9%", label: "Client Retention" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Your Free Consultation
              </a>
              <a 
                href="tel:+16397420081" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
              >
                Call Now: (639) 742-0081
              </a>
            </div>
          </div>
        </AnimatedSection> */}

        {/* Trust Badges */}
        <AnimatedSection animation="slide-up" delay={600}>
          <div className="flex justify-center items-center space-x-8 mt-12 opacity-60">
            <div className="text-center">
              <div className="text-2xl mb-1">🏆</div>
              <div className="text-xs text-gray-500">Excellence Award</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🔒</div>
              <div className="text-xs text-gray-500">Security Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">💼</div>
              <div className="text-xs text-gray-500">Business Partner</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">⚡</div>
              <div className="text-xs text-gray-500">Fast Response</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
