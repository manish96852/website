'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'MPLS Solutions',
    description: 'Secure, reliable, and high-performance MPLS network solutions for enterprise connectivity.',
    icon: '/images/mpls-icon.svg',
    href: '/services#mpls'
  },
  {
    title: 'Enterprise Wi-Fi',
    description: 'High-density wireless networks with seamless coverage and advanced security features.',
    icon: '/images/wifi-icon.svg',
    href: '/services#wifi'
  },
  {
    title: 'Firewall Security',
    description: 'Next-generation firewall solutions to protect your network from cyber threats.',
    icon: '/images/firewall-icon.svg',
    href: '/services#firewall'
  },
  {
    title: 'CCTV Solutions',
    description: 'Advanced surveillance systems with HD cameras and intelligent monitoring features.',
    icon: '/images/cctv-icon.svg',
    href: '/services#cctv'
  },
  {
    title: 'Server Room Setup',
    description: 'End-to-end server room design, implementation, and maintenance services.',
    icon: '/images/server-icon.svg',
    href: '/services#server-room'
  },
  {
    title: 'Annual Maintenance',
    description: 'Comprehensive AMC plans to ensure optimal performance of your IT infrastructure.',
    icon: '/images/maintenance-icon.svg',
    href: '/services#amc'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 relative overflow-hidden border border-gray-100 hover:border-blue-200"
    >
      <div className="relative">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25 relative overflow-hidden"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={32}
              height={32}
              className="text-white filter brightness-0 invert"
              unoptimized
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-300" 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link
        href={service.href}
        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-all duration-300 group-hover:translate-x-2 hover:gap-3"
      >
        <motion.span
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Learn More
        </motion.span>
        <motion.svg 
          className="w-4 h-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive IT Infrastructure Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Enterprise-grade networking and infrastructure solutions tailored for your business growth
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                backgroundPosition: "100% 0"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
              style={{
                backgroundSize: "200% 100%",
                backgroundPosition: "0% 0"
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
              </svg>
              View All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
