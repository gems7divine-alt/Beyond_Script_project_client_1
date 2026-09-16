import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Trash2, Plus } from 'lucide-react'
import { sendChatMessage } from '../../services/aiAgentApi'

const WELCOME_MSG = {
  role: 'bot',
  text: "Hi there! 👋 I'm your Beyond Script assistant. Ask me about graphotherapy, handwriting analysis, courses, or booking an appointment.",
}

const quickPrompts = [
  'What is graphotherapy?',
  'How can handwriting analysis help me?',
  'Book an appointment',
]

export default function AiAgent() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MSG])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  function clearChat() {
    setMessages([])
  }

  function newChat() {
    setMessages([WELCOME_MSG])
    inputRef.current?.focus()
  }

  async function send(text) {
    const msg = text.trim()
    if (!msg || typing) return
    setMessages((prev) => [...prev, { role: 'user', text: msg }])
    setInput('')
    setTyping(true)

    try {
      const reply = await sendChatMessage(msg)
      setMessages((prev) => [...prev, { role: 'bot', text: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ])
    } finally {
      setTyping(false)
    }
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-3 text-white shadow-gold transition-shadow hover:shadow-lg focus-visible:outline-gold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={20} />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span className="text-sm font-semibold">AI Chat</span>
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 flex w-[340px] max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-gold/30 bg-cream shadow-panel sm:w-[380px]"
            style={{ height: 'min(520px, calc(100dvh - 8rem))' }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 rounded-t-2xl bg-gold-gradient px-4 py-3 text-white">
              <Bot size={22} />
              <div className="flex-1">
                <p className="text-sm font-semibold leading-tight">Beyond Script AI Agent</p>
                <p className="text-[11px] leading-tight opacity-80">Your graphotherapy assistant</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={newChat}
                  className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                  aria-label="New chat"
                  title="New Chat"
                >
                  <Plus size={16} />
                </button>
                <button
                  onClick={clearChat}
                  className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                  aria-label="Clear chat"
                  title="Clear Chat"
                >
                  <Trash2 size={16} />
                </button>
                <button onClick={() => setOpen(false)} className="rounded-full p-1.5 transition-colors hover:bg-white/20" aria-label="Close">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-white ${m.role === 'bot' ? 'bg-gold/90' : 'bg-navy/80'}`}>
                    {m.role === 'bot' ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div
                    className={`max-w-[78%] rounded-2xl px-3 py-2 text-[13px] leading-relaxed ${
                      m.role === 'bot'
                        ? 'rounded-tl-sm bg-white text-navy shadow-soft'
                        : 'rounded-tr-sm bg-gold-gradient text-white'
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex gap-2">
                  <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/90 text-white">
                    <Bot size={14} />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 shadow-soft">
                    <span className="flex gap-1">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold/70" style={{ animationDelay: '0ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold/70" style={{ animationDelay: '150ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold/70" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>

            {/* Quick prompts */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {quickPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => send(p)}
                    className="rounded-full border border-gold/40 bg-white/70 px-3 py-1 text-[11px] font-medium text-gold transition-colors hover:bg-gold hover:text-white"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-gold/20 px-3 py-2.5"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 rounded-lg bg-white/60 px-3 py-2 text-[13px] text-navy placeholder:text-navy/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold/50"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-gradient text-white transition-opacity disabled:opacity-40"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
