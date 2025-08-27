'use client'

import AnimatedSection from './AnimatedSection'

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: "🔧",
      title: "Expert IT Support, On-Demand",
      description: "Whether remote or on-site, our managed IT services keep your systems running smoothly, giving you peace of mind so you can focus on what matters most—your business.",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: "🌐",
      title: "Scalable Networking Solutions",
      description: "From small office setups to large network deployments, we design and maintain fast, secure, and reliable network infrastructure that grows with your needs.",
      color: "from-accent-500 to-primary-500"
    },
    {
      icon: "🔗",
      title: "Seamless Systems Integration",
      description: "We take the complexity out of tech setup. Our end-to-end systems integration ensures that all your hardware and software work in harmony, optimizing your operations from day one.",
      color: "from-primary-600 to-primary-700"
    },
    {
      icon: "🏪",
      title: "Dedicated to Retail & SMBs",
      description: "We specialize in delivering IT solutions that cater to the unique challenges of small businesses and retail environments, helping you stay competitive and efficient without the big-budget costs.",
      color: "from-accent-400 to-accent-500"
    },
    {
      icon: "📈",
      title: "Proven Results",
      description: "Our hands-on approach and proactive service help businesses improve productivity, reduce downtime, and streamline their IT processes. With HarTech Solutions, you're always one step ahead.",
      color: "from-primary-500 to-accent-500"
    }
  ]

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-gradient">HarTech Solutions</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At HarTech Solutions, we provide tailored IT solutions that ensure your business stays connected, secure, and productive. Here&apos;s why our clients trust us:
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-6 rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <AnimatedSection 
              key={index}
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
            >
              <div className="group card p-8 hover:-translate-y-1 border border-primary-200 hover:border-primary-300 h-full flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{highlight.icon}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Indicators */}
        <AnimatedSection animation="fade-in" delay={600}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary-100">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
                { number: "< 15min", label: "Response Time", icon: "⏱️" },
                { number: "24/7", label: "Support Available", icon: "🔧" },
                { number: "200+", label: "Satisfied Clients", icon: "😊" }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="slide-up" delay={800}>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience the HarTech Difference?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their IT infrastructure with our expert solutions. Let&apos;s discuss how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="btn btn-primary hover:scale-105 shadow-lg"
              >
                Start Your Journey
              </a>
              <a 
                href="#services" 
                className="btn btn-secondary hover:scale-105"
              >
                Explore Services
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
