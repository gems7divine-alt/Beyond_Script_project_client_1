import background from '../assets/images/home-background.png'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Feather,
  PenLine,
  UserRoundPlus,
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Graphotherapy & Courses',
    body: 'Science-backed tools to re-write your mind through targeted script work.',
    Icon: PenLine,
  },
  {
    title: 'Practical Workbooks',
    body: 'Daily exercises designed for deep self-connection and habit change.',
    Icon: BookOpen,
  },
  {
    title: '1:1 Mind Analysis',
    body: 'Personalized handwriting analysis paired with dedicated 1:1 coaching.',
    Icon: UserRoundPlus,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cream bg-contain bg-no-repeat bg-[58%_8%] px-5 pt-28 md:bg-cover md:bg-[58%_center] md:px-10 md:pt-32 lg:bg-center lg:px-12 lg:pt-36"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,249,242,0)_0%,rgba(255,249,242,0.15)_35%,rgba(255,249,242,0.45)_70%,rgba(255,249,242,0.75)_100%)] md:bg-[linear-gradient(90deg,rgba(255,249,242,0.96)_0%,rgba(255,249,242,0.9)_28%,rgba(255,249,242,0.42)_49%,rgba(255,249,242,0.02)_70%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1440px] flex-col justify-start gap-8 pb-8 md:justify-between md:gap-10">
        <div className="max-w-[620px] pt-2 md:pt-16 lg:pt-20">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mt-1 mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold sm:text-sm md:mb-6 md:-translate-y-[80px] md:text-[15px] md:tracking-[0.24em] max-md:-translate-y-2"
          >
            Decode your mind &bull; Rewrite your future
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-serif text-[2.1rem] font-bold leading-[1.12] text-navy sm:text-[2.5rem] md:-translate-y-[80px] md:leading-[0.96] md:text-[4.75rem] lg:text-[4.7rem]"
          >
            Rewrite Your <br /> Inner Story
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-5 flex items-center gap-3 text-gold md:-translate-y-[70px]"
          >
            <span className="h-[2px] w-10 bg-gold" />
            <Feather size={18} strokeWidth={1.8} />
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-3 max-w-[590px] text-[14px] leading-[1.7] text-navy sm:text-[15px] md:-translate-y-[70px] md:text-[19px]"
          >
            "Your handwriting holds the blueprint to your <br className="md:hidden" /> subconscious mind.
            Through personalized handwriting analysis, graphotherapy, and life
            coaching, discover how changing your script can break limiting
            patterns and reshape your future."
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="mt-6 flex flex-col gap-3 sm:flex-row md:-translate-y-[70px] md:mt-8 md:gap-4"
          >
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md bg-gold-gradient px-5 text-[14px] font-semibold text-white shadow-gold transition-colors sm:h-16 sm:w-auto sm:gap-6 sm:px-8 sm:text-[18px] sm:min-w-60"
            >
              Explore Courses
              <ArrowRight size={20} strokeWidth={1.8} />
            </motion.button>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md border border-gold bg-cream/80 px-5 text-[14px] font-semibold text-gold transition-colors hover:bg-white sm:h-16 sm:w-auto sm:gap-6 sm:px-8 sm:text-[18px] sm:min-w-64"
            >
              Book Appointment
              <CalendarDays size={18} strokeWidth={1.8} />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-4 lg:grid-cols-3 lg:gap-5 md:-translate-y-[30px]"
        >
          {features.map(({ title, body, Icon }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="group flex min-h-0 cursor-pointer items-center gap-4 rounded-md border border-gold/80 bg-cream/78 p-4 shadow-panel backdrop-blur-[2px] transition-colors hover:border-gold hover:bg-white md:min-h-44 md:gap-5 md:p-6"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-gold text-gold transition-colors group-hover:bg-gold group-hover:text-white md:h-24 md:w-24"
              >
                <Icon size={45} strokeWidth={1.45} className="max-md:h-8 max-md:w-8" />
              </motion.div>

              <div>
                <h2 className="font-serif text-base font-bold leading-tight text-navy transition-colors group-hover:text-gold md:text-2xl">
                  {title}
                </h2>
                <div className="mt-3 flex items-center gap-3 text-gold">
                  <span className="h-[1px] w-9 bg-gold" />
                  <Feather size={16} strokeWidth={1.8} />
                </div>
                <p className="mt-3 max-w-72 text-[12px] leading-relaxed text-navy md:text-[17px]">
                  {body}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
