'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, FileText, Calendar, Mail, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  // Floating dust particles configuration
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, duration: number, delay: number}>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    })));
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy text-ivory">
      
      {/* Ambient Room Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      {/* Spotlight Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] bg-gradient-radial from-white/10 to-transparent pointer-events-none blur-3xl"
      />

      {/* Dust Motes Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full blur-[1px]"
            initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
            animate={{ 
              y: [`${p.y}vh`, `${p.y - 20}vh`],
              opacity: [0, 0.5, 0] 
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        
        {/* Animated Empty Chair & Flip Chart Illustration */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 relative h-64 w-full flex justify-center items-end"
        >
          {/* Combined Vector Scene */}
          <svg width="400" height="240" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
            {/* --- FLIP CHART (Left) --- */}
            <g transform="translate(60, 0)">
                {/* Back Leg */}
                <motion.path 
                  d="M50 80 L20 220" 
                  stroke="#F7F5F0" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                {/* Front Left Leg */}
                <motion.path 
                  d="M50 80 L40 220" 
                  stroke="#F7F5F0" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                {/* Front Right Leg */}
                <motion.path 
                  d="M90 80 L120 220" 
                  stroke="#F7F5F0" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                {/* Chart Board */}
                <motion.rect 
                  x="30" y="40" width="80" height="110" rx="2"
                  fill="#F7F5F0"
                  fillOpacity="0.05"
                  stroke="#F7F5F0" 
                  strokeWidth="3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                {/* Paper on Chart */}
                <motion.rect 
                  x="35" y="45" width="70" height="100" rx="1"
                  fill="#F7F5F0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                {/* Chart Top Bar */}
                <motion.path 
                  d="M30 40 L110 40" 
                  stroke="#7A6547" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                />
                {/* Scribble on Paper */}
                <motion.path 
                  d="M45 80 Q60 60 70 80 T95 80" 
                  stroke="#192A38" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.path 
                  d="M45 100 L85 100" 
                  stroke="#192A38" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
                {/* Flip Chart Shadow */}
                <motion.ellipse 
                  cx="70" 
                  cy="230" 
                  rx="50" 
                  ry="8" 
                  fill="black" 
                  fillOpacity="0.5" 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
            </g>

            {/* --- EMPTY CHAIR (Right) --- */}
            <g transform="translate(200, 136) scale(0.384)">
                {/* Chair Legs */}
                <motion.path 
                  d="M60 220 L70 140 M140 220 L130 140" 
                  stroke="#F7F5F0" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                {/* Chair Base */}
                <motion.path 
                  d="M70 140 L130 140" 
                  stroke="#F7F5F0" 
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                />
                {/* Chair Seat */}
                <motion.path 
                  d="M50 140 C50 140 50 130 150 130 C150 130 150 140 50 140 Z" 
                  fill="#C9B48C" 
                  fillOpacity="0.1"
                  stroke="#C9B48C" 
                  strokeWidth="2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                {/* Chair Back */}
                <motion.path 
                  d="M60 130 L60 60 C60 40 140 40 140 60 L140 130" 
                  stroke="#F7F5F0" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                {/* Chair Shadow */}
                <motion.ellipse 
                  cx="100" 
                  cy="230" 
                  rx="60" 
                  ry="10" 
                  fill="black" 
                  fillOpacity="0.5" 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
            </g>
          </svg>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h1 className="mb-6 font-heading text-5xl font-semibold tracking-tight text-white md:text-7xl">
            <span className="text-bronze-light">404.</span> Session Ended.
          </h1>
          
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-slate-light">
            Looks like you&apos;re a bit late—the room is empty and I&apos;ve already packed up. 
            But don&apos;t worry, the insights are still available elsewhere.
          </p>
        </motion.div>

        {/* Navigation Options */}
        <motion.div 
          className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Link href="/" className="group flex flex-col items-center rounded-md border border-white/10 bg-white/5 p-6 text-center transition-colors duration-300 hover:border-bronze-light/50 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-soft transition-colors group-hover:border-bronze-light">
              <Home className="h-6 w-6 text-bronze-light" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Back to the Homepage</h3>
            <p className="text-sm text-slate-light">Start again from the beginning</p>
          </Link>

          <Link href="/writing" className="group flex flex-col items-center rounded-md border border-white/10 bg-white/5 p-6 text-center transition-colors duration-300 hover:border-bronze-light/50 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-soft transition-colors group-hover:border-bronze-light">
              <FileText className="h-6 w-6 text-bronze-light" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Read the Writing</h3>
            <p className="text-sm text-slate-light">Essays and perspectives</p>
          </Link>

          <Link href="/speaking" className="group flex flex-col items-center rounded-md border border-white/10 bg-white/5 p-6 text-center transition-colors duration-300 hover:border-bronze-light/50 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-soft transition-colors group-hover:border-bronze-light">
              <Calendar className="h-6 w-6 text-bronze-light" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Sessions &amp; Events</h3>
            <p className="text-sm text-slate-light">Speaking and upcoming sessions</p>
          </Link>

          <Link href="/contact" className="group flex flex-col items-center rounded-md border border-white/10 bg-white/5 p-6 text-center transition-colors duration-300 hover:border-bronze-light/50 hover:bg-white/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy-soft transition-colors group-hover:border-bronze-light">
              <Mail className="h-6 w-6 text-bronze-light" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Leave a Message</h3>
            <p className="text-sm text-slate-light">Get in touch directly</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mt-16"
        >
          <Link href="/" className="inline-flex items-center text-slate-light transition-colors hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            <span>Or just take me home</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
