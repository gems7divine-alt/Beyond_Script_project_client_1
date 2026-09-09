import { motion } from 'framer-motion'
import {
  Users,
  Pen,
  Eye,
  CheckCircle2,
  Feather,
  BookOpen,
  Sparkles,
  ArrowRight,
  Brain,
  Heart,
  CheckSquare,
  Lightbulb,
  Star,
  Quote,
} from 'lucide-react'
import profileImg from '../../assets/images/profile.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const steps = [
  {
    num: 1,
    title: 'Discover Your Writing',
    description:
      'We analyze your natural handwriting to show you exactly what hidden thought habits are causing self-doubt or relationship stress.',
    Icon: Pen,
  },
  {
    num: 2,
    title: 'Practice Simple Exercises',
    description:
      'You get small, 10-minute daily writing exercises that help train your mind toward self-trust, calmness, and clear boundaries.',
    Icon: BookOpen,
  },
  {
    num: 3,
    title: 'Live with Clarity',
    description:
      'Feel more confident in who you are, break old emotional loops, and enjoy peaceful, healthy connections with the people around you.',
    Icon: Sparkles,
  },
]

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

const benefits = [
  {
    title: 'Subconscious Clarity & Self-Awareness',
    description: 'Understand yourself better through handwriting analysis.',
    Icon: Lightbulb,
  },
  {
    title: 'Unshakable Self-Worth & Confidence',
    description: 'Beat self-doubt and build confidence & strong self-worth.',
    Icon: Star,
  },
  {
    title: 'Relationship Clarity & Emotional Peace',
    description: 'Improve relationships and break negative conflict patterns.',
    Icon: Heart,
  },
  {
    title: 'Graphotherapy for Rewriting Beliefs',
    description: 'Practice strokes that reprogram beliefs and build positive habits.',
    Icon: Pen,
  },
]

export default function About() {
  return (
    <section className="min-h-screen bg-cream px-4 pt-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px]">
        {/* Hero Section */}
        <div className="mb-20 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div className="max-w-xl">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-3 text-sm font-bold uppercase tracking-widest text-gold"
            >
              About Abiya Benodson
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mb-2 font-serif text-4xl font-bold leading-tight text-navy md:text-5xl"
            >
              Hi, I'm Abiya
              <br />
              <span className="text-gold">Benodson</span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mb-6 flex items-center gap-2"
            >
              <span className="h-[2px] w-8 bg-gold" />
              <Feather size={18} className="text-gold" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mb-1 font-serif text-xl font-bold text-navy"
            >
              Meet Abiya Benodson
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="mb-6 font-serif text-lg italic text-gold"
            >
              Changing Your Mindset, One Stroke at a Time
            </motion.p>

            <div className="space-y-4">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
                className="flex gap-4"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-gold">
                  <Users size={18} strokeWidth={2} />
                </span>
                <p className="text-sm leading-relaxed text-navy/90">
                  Have you ever felt stuck in the same overthinking loops, struggling with
                  self-worth, or repeating the same problems in your relationships?
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={6}
                className="flex gap-4"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-gold">
                  <Pen size={18} strokeWidth={2} />
                </span>
                <p className="text-sm leading-relaxed text-navy/70">
                  Most of us don't realize that our pen carries our deepest emotions, fears, and
                  habits onto paper. Your handwriting is a clear mirror of how your mind works.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={7}
                className="flex gap-4"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/5 text-gold">
                  <Eye size={18} strokeWidth={2} />
                </span>
                <p className="text-sm leading-relaxed text-navy/70">
                  As a Handwriting Transformation Coach, I help you look closely at that mirror:
                </p>
              </motion.div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                {
                  bold: 'Uncover Hidden Habits:',
                  text: ' We look at your handwriting to understand what is secretly holding you back or causing stress.',
                },
                {
                  bold: 'Re-Train Your Mind:',
                  text: ' I give you simple, easy daily writing exercises designed to boost your confidence and calm your mind.',
                },
                {
                  bold: 'Build Better Relationships:',
                  text: ' As your inner self becomes clear and confident, your personal and romantic relationships naturally improve.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.bold}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={8 + i}
                  className="flex gap-3"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-navy/70">
                    <span className="font-bold text-navy">{item.bold}</span>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image + Quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="relative mx-auto max-w-md lg:mx-20"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={profileImg}
                alt="Abiya Benodson"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </div>

            <div className="relative -mt-12 mx-4 rounded-2xl border border-gold/10 bg-white p-5 shadow-panel md:mx-6">
              <Quote size={28} className="mb-2 text-gold/30" />
              <p className="font-serif text-base leading-relaxed text-navy/70">
                My mission is to help you decode your mind, break repeating life patterns, and
                build unshakable self-worth—without compromising your inner peace.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3 Simple Steps */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-3 text-center font-serif text-3xl font-bold text-navy md:text-3xl">
            3 Simple Steps to a Clear Mind and Better Relationships
          </h2>
          <div className="mx-auto mb-12 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 bg-gold" />
            <Feather size={16} className="text-gold" />
            <span className="h-[2px] w-8 bg-gold" />
          </div>

          <div className="grid items-start gap-8 md:grid-cols-3 md:gap-4 lg:gap-12">
            {steps.map(({ num, title, description, Icon }, i) => (
              <motion.div
                key={num}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                    <Icon size={28} className="text-gold" strokeWidth={1.8} />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-white">
                    {num}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{description}</p>

                {i < steps.length - 1 && (
                  <ArrowRight
                    size={24}
                    className="absolute top-8 -right-6 hidden text-gold/40 lg:block lg:-right-8"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3 Core Pillars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-3 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
            3 Core Pillars
          </h2>
          <div className="mx-auto mb-12 flex items-center justify-center gap-2">
            <span className="h-[2px] w-8 bg-gold" />
            <Feather size={16} className="text-gold" />
            <span className="h-[2px] w-8 bg-gold" />
          </div>

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

        {/* How It Can Help You */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="mb-3 text-center font-serif text-2xl font-bold text-navy md:text-3xl">
            How It Can Help You
          </h2>
          <p className="mb-12 text-center text-sm text-navy/60">
            Discover what changes when you decode your inner script
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {benefits.map(({ title, description, Icon }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-gold/10 bg-white p-5 text-center shadow-soft"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <Icon size={26} className="text-gold" strokeWidth={1.8} />
                </div>
                <h3 className="mb-2 font-serif text-[15px] font-bold leading-snug text-navy">
                  {title}
                </h3>
                <p className="text-xs leading-relaxed text-navy/60">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
