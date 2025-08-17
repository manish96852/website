'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const caseStudies = [
  {
    title: 'Wi-Fi Deployment for Delhi University',
    description: 'Campus-wide Wi-Fi Complex with 500+ access points',
    stats: {
      accessPoints: '500+',
      coverage: '100%',
      users: '50,000+'
    },
    image: '/images/case-studies/university.jpg',
    link: '/projects/delhi-university-wifi'
  },
  {
    title: 'Bank MPLS Rollout',
    description: 'Multi-site MPLS implementation for bank across 20 locations',
    stats: {
      locations: '20+',
      uptime: '99.99%',
      bandwidth: '10 Gbps'
    },
    image: '/images/case-studies/bank.jpg',
    link: '/projects/bank-mpls-rollout'
  },
  {
    title: 'EdTech SD-WAN Implementation',
    description: 'SD-WAN rollout across 15 branch offices for EdTech',
    stats: {
      branches: '15',
      savings: '40%',
      performance: '2x'
    },
    image: '/images/case-studies/edtech.jpg',
    link: '/projects/edtech-sdwan'
  }
];

const CaseStudy = ({ study, index }: { study: typeof caseStudies[0], index: number }) => {
  return (
    <Link href={study.link}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative group cursor-pointer"
      >
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-blue-600/20 backdrop-blur-[1px] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white/20 backdrop-blur-sm rounded-full p-4"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.div>
          </motion.div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-2xl font-bold text-white mb-2"
            >
              {study.title}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-gray-200 mb-4"
            >
              {study.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {Object.entries(study.stats).map(([key, value], statIndex) => (
                <motion.div 
                  key={key} 
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 + statIndex * 0.1, type: "spring" }}
                >
                  <div className="text-2xl font-bold text-blue-400">{value}</div>
                  <div className="text-sm text-gray-300 capitalize">{key}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const CaseStudies = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories That Speak For Themselves
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover how we&apos;ve helped businesses across India transform their network infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy key={study.title} study={study} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have revolutionized their network infrastructure with NetEdge Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4 4m4-4l-4-4" />
                  </svg>
                  View All Projects
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/70 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start Your Project
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
