'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'campus-wifi',
    title: 'Campus Wi-Fi Solutions',
    description: 'Enterprise-grade wireless networks for educational institutions and corporate campuses',
    features: [
      'High-density access point deployment',
      'Seamless roaming across campus',
      'Guest network management',
      'Real-time monitoring & analytics',
      'Bandwidth management & QoS',
      'Security & authentication'
    ],
    benefits: [
      'Seamless connectivity across campus',
      'Support for thousands of concurrent users',
      'Enhanced security with 802.1x authentication',
      'Detailed usage analytics and reports'
    ],
    image: '/images/services/wifi.jpg'
  },
  {
    id: 'mpls',
    title: 'MPLS Network Setup',
    description: 'Reliable and secure MPLS connectivity solutions for enterprises',
    features: [
      'End-to-end MPLS implementation',
      'Quality of Service (QoS)',
      'Traffic engineering',
      'Network redundancy',
      '24x7 monitoring',
      'SLA management'
    ],
    benefits: [
      'Guaranteed bandwidth',
      'Reduced network latency',
      'Enhanced network reliability',
      'Scalable connectivity solution'
    ],
    image: '/images/services/mpls.jpg'
  },
  {
    id: 'security',
    title: 'Network Security',
    description: 'Comprehensive network security solutions with firewalls and threat protection',
    features: [
      'Next-gen firewall deployment',
      'IPS/IDS implementation',
      'VPN setup',
      'Security policies & compliance',
      'Threat monitoring',
      'Regular security audits'
    ],
    benefits: [
      'Enhanced network protection',
      'Real-time threat detection',
      'Compliance with security standards',
      'Peace of mind for business'
    ],
    image: '/images/services/security.jpg'
  },
  {
    id: 'structured-cabling',
    title: 'Structured Cabling',
    description: 'Professional cabling solutions for modern network infrastructure',
    features: [
      'CAT6/6A/7 cabling',
      'Fiber optic installation',
      'Cable management',
      'Testing & certification',
      'Documentation',
      'Future-ready infrastructure'
    ],
    benefits: [
      'Organized network infrastructure',
      'Reduced maintenance overhead',
      'Easy scalability',
      'Enhanced network performance'
    ],
    image: '/images/services/cabling.jpg'
  },
  {
    id: 'sd-wan',
    title: 'SD-WAN Solutions',
    description: 'Modern software-defined WAN solutions for distributed enterprises',
    features: [
      'Multi-link WAN optimization',
      'Application-aware routing',
      'Zero-touch provisioning',
      'Centralized management',
      'Cloud integration',
      'Real-time analytics'
    ],
    benefits: [
      'Reduced WAN costs',
      'Improved application performance',
      'Enhanced network agility',
      'Simplified management'
    ],
    image: '/images/services/sdwan.jpg'
  },
  {
    id: 'audit',
    title: 'Network Audit & AMC',
    description: 'Comprehensive network assessment and maintenance services',
    features: [
      'Network health assessment',
      'Performance optimization',
      'Regular maintenance',
      'Preventive checks',
      'Issue resolution',
      '24x7 support'
    ],
    benefits: [
      'Proactive issue prevention',
      'Optimized network performance',
      'Reduced downtime',
      'Regular health reports'
    ],
    image: '/images/services/audit.jpg'
  }
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link
          href={`/services#${service.id}`}
          className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-2"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const ServiceDetails = ({ service }: { service: typeof services[0] }) => {
  return (
    <div id={service.id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
            <p className="text-lg text-gray-600">{service.description}</p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Key Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Benefits</h3>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001B44] via-[#002B69] to-[#001B44] text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive network infrastructure solutions for modern enterprises
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <div className="bg-white">
        {services.map((service) => (
          <ServiceDetails key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
