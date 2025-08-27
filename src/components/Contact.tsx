"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Send, Clock, Shield, Users } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 639.742.0081",
      href: "tel:+16397420081",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: contactEmail,
      href: `mailto:${contactEmail}`,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Regina, SK",
      href: "#",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Only" },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-primary">
      <div className="container">
        <AnimatedSection animation="slide-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
                Touch
              </span>
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Have questions or ready to start your next project? Our team is
              here to help! Reach out to us and let&apos;s discuss how we can
              work together to bring your ideas to life.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-white mx-auto mt-6 rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slide-left">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="form-input"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="form-input"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="form-input resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform shadow-lg ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary-500 btn btn-secondary text-white hover:scale-103"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    ✅ Message sent successfully! We&apos;ll get back to you
                    soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    ❌ Failed to send message. Please try again or contact us
                    directly.
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 text-white group"
                  >
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <info.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="text-sm text-primary-200">
                        {info.label}
                      </div>
                      {info.value && (
                        <a
                          href={info.href}
                          className="text-xl font-semibold hover:text-accent-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-primary-600/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-400/30">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-accent-400" />
                  <h3 className="text-xl font-bold text-white">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between text-primary-100"
                    >
                      <span>{schedule.day}</span>
                      <span className="font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-primary-600/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-400/30">
                <h3 className="text-xl font-bold text-white mb-4">
                  Why Choose HarTech?
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "Secure & Reliable Solutions" },
                    { icon: Users, text: "Dedicated Support Team" },
                    { icon: Clock, text: "Fast Response Times" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-primary-100 group"
                    >
                      <feature.icon className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-accent-500/20 backdrop-blur-sm rounded-2xl p-6 border border-accent-400/30">
                <h3 className="text-xl font-bold text-white mb-2">
                  Emergency Support
                </h3>
                <p className="text-primary-200 text-sm mb-4">
                  Critical IT issues? We&apos;re here 24/7 for emergency
                  support.
                </p>
                <a
                  href="tel:+16397420081"
                  className="inline-flex items-center space-x-2 bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Emergency Line</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
