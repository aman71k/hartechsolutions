'use client'

import AnimatedSection from './AnimatedSection'

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Managed & On-Site IT Services",
      description: "Reliable IT support when and where you need it. We offer proactive monitoring, remote helpdesk, and on-site tech assistance to keep your business running smoothly—without the downtime.",
      color: "bg-gradient-primary",
      features: ["24/7 Monitoring", "Remote Support", "On-site Assistance"]
    },
    {
      icon: "📡",
      title: "Networking & Wireless Solutions",
      description: "Fast, secure, and scalable networks tailored to your space. From cabling to Wi-Fi, we design and maintain the infrastructure that keeps your team connected and productive.",
      color: "bg-gradient-teal",
      features: ["Network Design", "Wi-Fi Setup", "Security Config"]
    },
    {
      icon: "⚙️",
      title: "Systems Setup & Integration",
      description: "Seamless setup of hardware, software, and cloud services. We ensure everything works together optimized for performance, security, and your unique business needs.",
      color: "bg-gradient-primary",
      features: ["Hardware Setup", "Software Integration", "Cloud Services"]
    },
    {
      icon: "🛍️",
      title: "Retail & Small Business IT Solutions",
      description: "Practical, cost-effective IT solutions for retail and small businesses. From POS systems to Wi-Fi and device support, we help you serve customers better—every day.",
      color: "bg-gradient-accent",
      features: ["POS Systems", "Device Support", "Customer Wi-Fi"]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to empower your business and drive growth
            </p>
            <div className="w-24 h-1 bg-gradient-teal mx-auto mt-6 rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index}
              animation="slide-up"
              delay={index * 100}
            >
              <div className="group card p-8 hover:-translate-y-2 border border-primary-100 hover:border-primary-200 h-full flex flex-col">
                <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Feature List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-primary-600 font-semibold text-sm flex items-center">
                    Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        <AnimatedSection animation="fade-in" delay={500}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">Need a custom solution for your business?</p>
            <a 
              href="#contact" 
              className="btn btn-primary hover:scale-105 shadow-lg"
            >
              Get Custom Quote
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
