"use client";

import AnimatedSection from "./AnimatedSection";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Managed IT Services",
    "Network Solutions",
    "System Integration",
    "Small Business IT",
    "Emergency Support",
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/hartech-solutions",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/hartechsolutions",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/hartechsolutions",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <AnimatedSection animation="slide-up">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary-400 mb-4">
                  HarTech Solutions
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Empowering your business with cutting-edge technology
                  solutions. We speak human and IT, delivering reliable,
                  scalable, and secure services that grow with your business.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+16397420081" className="text-sm">
                    +1 639.742.0081
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                    className="text-sm"
                  >
                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Regina, SK</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection animation="slide-up" delay={100}>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection animation="slide-up" delay={200}>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-start space-x-2"
                  >
                    <span className="w-1 h-1 bg-accent-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Newsletter & Social */}
          <AnimatedSection animation="slide-up" delay={300}>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Stay Connected
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Follow us for IT tips, industry news, and company updates.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2 text-sm">
                  Business Hours
                </h5>
                <div className="space-y-1 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span>8AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9AM - 4PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Emergency</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 HarTech Solutions. All rights reserved. |
              <span className="ml-1">Built with ❤️ in Regina, SK</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-xs text-gray-400">
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </a>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-all transform hover:scale-110 shadow-lg group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
