'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Extracted data for better organization
const statsData = [
  { number: '20+', label: 'Years Experience' },
  { number: '500+', label: 'Projects Completed' },
  { number: '99.99%', label: 'Uptime SLA' },
  { number: '50+', label: 'Certified Engineers' }
];

const certifications = [
  { name: 'CCNA', count: '15+ Certified' },
  { name: 'CCNP', count: '8+ Certified' },
  { name: 'Fortinet NSE', count: '10+ Certified' },
  { name: 'Cisco CCIE', count: '2 Certified' }
];

const locations = [
  { city: 'Delhi NCR', role: 'Headquarters' },
  { city: 'Mumbai', role: 'Regional Office' },
  { city: 'Bengaluru', role: 'Tech Center' },
  { city: 'Chennai', role: 'Support Hub' }
];

const governmentRecognitions = [
  {
    id: 'msme',
    title: 'MSME Registered',
    description: 'Registered under Ministry of Micro, Small and Medium Enterprises',
    image: '/images/about/msme.png'
  },
  {
    id: 'startup',
    title: 'Startup India Recognized',
    description: 'Recognized under DPIIT Startup India Initiative',
    image: '/images/about/startup-india.png'
  }
];

// Reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

interface StatCardProps {
  stat: {
    number: string;
    label: string;
  };
  index: number;
}

// Reusable StatCard component
const StatCard = ({ stat, index }: StatCardProps) => (
  <motion.div
    key={stat.label}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="text-center group"
  >
    <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:text-blue-800 transition-colors">
      {stat.number}
    </div>
    <div className="text-gray-600">{stat.label}</div>
  </motion.div>
);

interface CertificationCardProps {
  cert: {
    name: string;
    count: string;
  };
  index: number;
}

// Reusable CertificationCard component
const CertificationCard = ({ cert, index }: CertificationCardProps) => (
  <motion.div
    key={cert.name}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    <div className="text-xl font-bold text-blue-600 mb-2">{cert.name}</div>
    <div className="text-gray-600">{cert.count}</div>
  </motion.div>
);

interface LocationCardProps {
  location: {
    city: string;
    role: string;
  };
  index: number;
}

// Reusable LocationCard component
const LocationCard = ({ location, index }: LocationCardProps) => (
  <motion.div
    key={location.city}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
  >
    <div className="text-xl font-bold text-blue-400 mb-2">{location.city}</div>
    <div className="text-gray-400">{location.role}</div>
  </motion.div>
);

interface GovernmentRecognitionCardProps {
  recognition: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

// Reusable GovernmentRecognitionCard component
const GovernmentRecognitionCard = ({ recognition, index }: GovernmentRecognitionCardProps) => (
  <motion.div
    key={recognition.id}
    initial={index === 0 ? fadeInLeft.initial : fadeInRight.initial}
    whileInView={index === 0 ? fadeInLeft.whileInView : fadeInRight.whileInView}
    viewport={index === 0 ? fadeInLeft.viewport : fadeInRight.viewport}
    transition={index === 0 ? fadeInLeft.transition : fadeInRight.transition}
    className="bg-blue-50 rounded-lg p-8 flex items-center hover:bg-blue-100 transition-colors duration-300"
  >
    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
      <Image
        src={recognition.image}
        alt={recognition.title}
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{recognition.title}</h3>
      <p className="text-gray-600">{recognition.description}</p>
    </div>
  </motion.div>
);

interface SectionHeaderProps {
  title: string;
  description?: string;
  light?: boolean;
}

// Reusable SectionHeader component
const SectionHeader = ({ title, description, light = false }: SectionHeaderProps) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}
    >
      {title}
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-lg ${light ? 'text-gray-400' : 'text-gray-600'}`}
      >
        {description}
      </motion.p>
    )}
  </div>
);

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

// Animated counter component for stats
const AnimatedCounter = ({ value, duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState<number>(0);
  
  useEffect(() => {
    let startTime: number | undefined;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      if (value.includes('+')) {
        const numericValue = parseInt(value);
        setCount(Math.floor(progress * numericValue));
      } else if (value.includes('%')) {
        const numericValue = parseFloat(value);
        setCount(parseFloat((progress * numericValue).toFixed(2)));
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [value, duration]);
  
  return (
    <span>
      {value.includes('+') ? `${count}+` : value.includes('%') ? `${count}%` : count}
    </span>
  );
};

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#001B44] via-[#002B69] to-[#001B44] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} 
          />
        </div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              India's Leading Network Infrastructure Company
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-blue-100"
            >
              Two decades of excellence in delivering enterprise-grade networking solutions across India
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Journey to Excellence</h2>
              <p className="text-lg text-gray-600">
                Founded in 2003, NetEdge Solutions has grown from a small IT networking company to one of India's most trusted network infrastructure providers. Our commitment to excellence and customer satisfaction has earned us the trust of over 500 enterprise clients across the nation.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be at the forefront of network technology, delivering cutting-edge solutions that power businesses across India. Our team of certified professionals ensures that every project meets the highest standards of quality and reliability.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Learn More About Our Story
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
                  src="/images/about/office.jpg"
                  alt="NetEdge Solutions Office"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              
              {/* Floating testimonial card */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400 flex">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  "NetEdge Solutions transformed our network infrastructure. Their expertise is unmatched."
                </p>
                <p className="text-xs text-gray-500 mt-2">- CTO, Fortune 500 Company</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Professional Certifications" 
            description="Our team holds the highest industry certifications"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.name} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Locations */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Pan-India Presence" 
            description="Strategic locations across India to serve you better"
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={location.city} location={location} index={index} />
            ))}
          </div>
          
          {/* Interactive Map Placeholder */}
          <motion.div 
            className="mt-16 rounded-lg overflow-hidden bg-gray-800 h-64 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-gray-400 mb-2">Interactive Map of Our Locations</div>
              <div className="text-gray-500 text-sm">Click on location cards to highlight on map</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Government Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Government Recognition" 
            description="Proud to be recognized by Government of India initiatives"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governmentRecognitions.map((recognition, index) => (
              <GovernmentRecognitionCard key={recognition.id} recognition={recognition} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Ready to Transform Your Network Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 text-blue-100"
          >
            Join hundreds of satisfied clients who have trusted us with their networking needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get a Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;