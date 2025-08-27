"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-left">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-gradient">HarTech Solutions</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At HarTech Solutions, we provide{" "}
                  <strong className="text-primary-600">
                    reliable and scalable IT solutions
                  </strong>{" "}
                  that empower businesses to thrive in a digital-first world.
                  Specializing in Managed IT Services, Networking Solutions,
                  Systems Integration, and Small Business IT Solutions, we
                  ensure that your technology works as efficiently as your team.
                </p>

                <p>
                  Our expert team takes a hands-on approach, offering tailored
                  solutions that are both practical and future-proof. Whether
                  it&apos;s streamlining your business processes, optimizing
                  your network, or providing responsive on-site support, we are
                  here to ensure your IT systems are a strong foundation for
                  success.
                </p>

                <p>
                  With HarTech Solutions, you get a partner who understands the
                  unique challenges of your business, delivering technology that
                  is{" "}
                  <strong className="text-primary-600">
                    secure, scalable, and built to grow with you
                  </strong>
                  .
                </p>
              </div>

              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: "🎯", text: "Tailored Solutions" },
                  { icon: "🔒", text: "Secure & Reliable" },
                  { icon: "📈", text: "Scalable Growth" },
                  { icon: "🤝", text: "Partnership Approach" },
                ].map((point, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-in"
                    delay={index * 100}
                  >
                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-primary-100 hover:border-primary-300 transition-colors">
                      <span className="text-2xl">{point.icon}</span>
                      <span className="font-semibold text-gray-800">
                        {point.text}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={200}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="bg-gradient-to-tr from-primary-100 to-accent-100 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-8 text-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {["💻", "🌐", "⚙️", "🔧"].map((icon, index) => (
                      <div
                        key={index}
                        className="bg-primary-50 rounded-lg p-4 text-center hover:bg-primary-100 transition-colors cursor-pointer"
                      >
                        <span className="text-3xl block">{icon}</span>
                        <span className="text-xs text-gray-600 mt-1 block">
                          {
                            [
                              "IT Support",
                              "Networking",
                              "Integration",
                              "Maintenance",
                            ][index]
                          }
                        </span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Complete IT Solutions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    From consultation to implementation and ongoing support
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-500 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent-500 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Stats Overlay */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary-600">5+</div>
                <div className="text-xs text-gray-600">Years</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary-600">200+</div>
                <div className="text-xs text-gray-600">Clients</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
