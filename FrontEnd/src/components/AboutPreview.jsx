import { motion } from 'framer-motion'
import {
  Feather,
  Brain,
  Heart,
  CheckSquare,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import profileImg from '../assets/images/profile.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const pillars = [
  {
    title: 'Graphotherapy Analysis',
    description: 'Analyze handwriting to find subconscious blocks.',
    Icon: Brain,
  },
  {
    title: 'Safe & Supportive Space',
    description: 'A judgment-free space for clarity and healing.',
    Icon: Heart,
  },
  {
    title: 'Practical Mindset Tools',
    description: 'Simple daily tools to build better habits and self-worth.',
    Icon: CheckSquare,
  },
]

export default function AboutPreview() {
  return (
    <section className="bg-cream px-4 py-20 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Hero Section */}
        <div className="mb-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div className="max-w-xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-3 text-sm font-bold uppercase tracking-widest text-gold"
            >
              About Abiya Benodson
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="mb-2 font-serif text-3xl font-bold leading-tight text-navy md:text-4xl"
            >
              Hi, I'm Abiya
              <br />
              <span className="text-gold">Benodson</span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="mb-5 flex items-center gap-2"
            >
              <span className="h-[2px] w-8 bg-gold" />
              <Feather size={18} className="text-gold" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              className="mb-4 font-serif text-lg italic text-gold"
            >
              Changing Your Mindset, One Stroke at a Time
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              className="mb-6 text-sm leading-relaxed text-navy/60"
            >
              As a Handwriting Transformation Coach, I help you decode your mind, break
              repeating life patterns, and build unshakable self-worth—without compromising
              your inner peace.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-6 py-3 text-sm font-semibold text-white shadow-gold transition-transform hover:-translate-y-0.5"
              >
                Learn More About Me
                <ArrowRight size={18} strokeWidth={2} />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="relative mx-auto max-w-xs lg:mx-0"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={profileImg}
                alt="Abiya Benodson"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 3 Core Pillars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid gap-6 md:grid-cols-3 md:gap-4 lg:gap-8">
            {pillars.map(({ title, description, Icon }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-gold/10 bg-white p-6 text-center shadow-soft"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <Icon size={26} className="text-gold" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
