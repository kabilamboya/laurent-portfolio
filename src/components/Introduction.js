import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section style={{
      background: '#222',
      padding: '2rem',
      marginBottom: '2rem',
    }}>
      <div className="container text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 style={{ color: '#fff' }}>
            <span style={{ color: 'gold', fontWeight: 'bold', marginRight: '0.5rem' }}>
              Current Project:
            </span>
            <Typewriter
              words={[
                'Multi-Tenant E-commerce System',
                'AI Chatbot for Dholuo',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
