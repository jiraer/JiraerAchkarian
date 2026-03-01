'use client';
  
  import { useForm } from 'react-hook-form';
  import { z } from 'zod';
  import { zodResolver } from '@hookform/resolvers/zod';
  import { useState } from 'react';
  import { BACKEND_URL } from '../../lib/config';
  import { motion, AnimatePresence } from 'framer-motion';
  
  const schema = z.object({
    name: z.string().min(2).max(80),
    email: z.string().email(),
    message: z.string().min(20).max(2000),
    company: z.string().max(120).optional(),
    budgetRange: z.string().max(60).optional(),
    source: z.string().max(80).optional(),
    honeypot: z.string().optional()
  });
  
  type FormValues = z.infer<typeof schema>;
  
  export const ContactForm = () => {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitting, setSubmitting] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: { honeypot: '' }
    });
  
    const onSubmit = async (values: FormValues) => {
      setSubmitting(true);
      setStatus('idle');
      try {
        const res = await fetch(`${BACKEND_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus('success');
        reset({ name: '', email: '', message: '', company: '', budgetRange: '', source: '', honeypot: '' });
      } catch {
        setStatus('error');
      } finally {
        setSubmitting(false);
      }
    };
  
    return (
      <div className="relative mx-auto max-w-3xl">
    
        {/* Subtle Highlight Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-highlight/20 via-accent/10 to-highlight/20 blur-2xl opacity-60 pointer-events-none" />
    
        <div className="relative rounded-3xl border border-white/10 bg-neutral-900/80 p-8 backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.6)]">
    
          <h2 className="text-xl font-display tracking-tight text-white">
            Open to select collaborations
          </h2>
    
          <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
            Share a bit about your product, timeline, and what you&apos;re trying to unlock.
          </p>
    
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
    
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-200">
                  Name
                </label>
                <input
                  {...register('name')}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/30"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
    
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-200">
                  Email
                </label>
                <input
                  {...register('email')}
                  type="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/30"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
    
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-200">
                  Company (optional)
                </label>
                <input
                  {...register('company')}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/30"
                />
              </div>
    
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-200">
                  Budget range (optional)
                </label>
                <input
                  {...register('budgetRange')}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/30"
                />
              </div>
            </div>
    
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-200">
                How can I help?
              </label>
              <textarea
                {...register('message')}
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/30"
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>
    
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-200">
                How did you find me? (optional)
              </label>
              <input
                {...register('source')}
                className="mt-2 w-full rounded-xl border border-white/10 bg-neutral-800/60 px-4 py-3 text-sm text-white outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/30"
              />
            </div>
    
            {/* Honeypot - leave empty */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="honeypot">Leave empty</label>
              <input id="honeypot" {...register('honeypot')} tabIndex={-1} />
            </div>
    
            <div className="flex items-center justify-between pt-4">
              <button
                type="submit"
                disabled={submitting}
                data-cursor="cta"
                aria-busy={submitting}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-highlight to-accent px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-black shadow-lg shadow-highlight/30 transition hover:scale-[1.03] disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Send message'}
              </button>
    
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-xs text-emerald-400"
                  >
                    Message received. I&apos;ll get back within 1–2 business days.
                  </motion.p>
                )}
    
                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="text-xs text-red-400"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
    
          </form>
        </div>
      </div>
    );


  };
  