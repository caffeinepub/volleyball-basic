import { Link } from '@tanstack/react-router';
import { CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const inclusions = [
  'Personalized training plan tailored to your goals',
  'Custom drill library for your position',
  '1-on-1 coaching guidance from Yash Bhardwaj',
  'Weekly progress check-ins and plan adjustments',
  'Vertical jump & strength programming',
  'Video analysis and technique feedback',
  'Injury prevention protocols',
  'Direct WhatsApp access to your coach',
];

const faqs = [
  {
    q: 'How does online coaching work?',
    a: 'After signing up, you will receive a personalized training plan via WhatsApp or email. Yash will guide you through your program, review your progress weekly, and adjust your plan as needed. All communication happens online, so you can train from anywhere.',
  },
  {
    q: 'What equipment do I need?',
    a: 'Most programs can be done with minimal equipment. Depending on your program, you may need access to a volleyball court, resistance bands, and basic gym equipment. Yash will tailor the plan to what you have available.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most athletes notice improvements in their vertical jump and technique within 4–6 weeks of consistent training. Significant performance gains typically occur within 2–3 months of dedicated coaching.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. There are no long-term contracts. You can cancel your coaching plan at any time by contacting Yash directly.',
  },
  {
    q: 'Is this suitable for beginners?',
    a: 'Absolutely. Yash coaches athletes at all levels — from complete beginners to competitive players. Your program will be designed specifically for your current skill level and goals.',
  },
];

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 md:py-24"
        style={{
          background: 'linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(var(--navy)) 100%)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'oklch(var(--gold))' }}
          >
            Simple, Transparent Pricing
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase mb-4">
            Coaching Plans
          </h1>
          <p className="text-white/60 max-w-lg mx-auto text-base">
            One straightforward plan. Everything you need to transform your volleyball game.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div
              className="rounded-sm overflow-hidden border-2 shadow-xl"
              style={{ borderColor: 'oklch(var(--gold))' }}
            >
              {/* Card Header */}
              <div
                className="px-8 py-8 text-center"
                style={{
                  background: 'linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(var(--navy)) 100%)',
                }}
              >
                <div
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
                  style={{
                    backgroundColor: 'oklch(var(--gold))',
                    color: 'oklch(var(--navy-dark))',
                  }}
                >
                  Most Popular
                </div>
                <h2 className="font-display text-2xl font-bold text-white uppercase mb-2">
                  Online Coaching Plan
                </h2>
                <div className="flex items-end justify-center gap-1 mt-4">
                  <span
                    className="font-display text-6xl font-bold"
                    style={{ color: 'oklch(var(--gold))' }}
                  >
                    $200
                  </span>
                  <span className="text-white/60 text-lg mb-2">/month</span>
                </div>
                <p className="text-white/50 text-sm mt-2">No contracts. Cancel anytime.</p>
              </div>

              {/* Inclusions */}
              <div className="px-8 py-8 bg-card">
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-5"
                  style={{ color: 'oklch(var(--gold-dark))' }}
                >
                  Everything Included
                </p>
                <ul className="space-y-3 mb-8">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={17}
                        className="shrink-0 mt-0.5"
                        style={{ color: 'oklch(var(--gold-dark))' }}
                      />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn-primary w-full justify-center text-sm py-4">
                  Get Started Today
                  <ArrowRight size={16} />
                </Link>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Questions?{' '}
                  <a
                    href="https://wa.me/919412574143"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline"
                    style={{ color: 'oklch(var(--gold-dark))' }}
                  >
                    Chat with Yash on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(var(--navy-dark) / 0.04)' }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2
              className="font-display text-3xl font-bold uppercase"
              style={{ color: 'oklch(var(--navy-dark))' }}
            >
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Contact Yash', desc: 'Reach out via the contact form or WhatsApp to discuss your goals and current level.' },
              { step: '02', title: 'Get Your Plan', desc: 'Receive a fully personalized training plan designed specifically for your position and goals.' },
              { step: '03', title: 'Train & Improve', desc: 'Follow your program with ongoing guidance, weekly check-ins, and plan adjustments.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div
                  className="font-display text-5xl font-bold mb-3"
                  style={{ color: 'oklch(var(--gold) / 0.25)' }}
                >
                  {item.step}
                </div>
                <h3
                  className="font-display text-lg font-semibold uppercase mb-2"
                  style={{ color: 'oklch(var(--navy-dark))' }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2
              className="font-display text-3xl font-bold uppercase"
              style={{ color: 'oklch(var(--navy-dark))' }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-sm px-4"
              >
                <AccordionTrigger className="text-sm font-semibold text-left py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: 'oklch(var(--navy-dark))' }}
      >
        <div className="container mx-auto px-4">
          <MessageCircle
            size={40}
            className="mx-auto mb-4"
            style={{ color: 'oklch(var(--gold))' }}
          />
          <h2 className="font-display text-3xl font-bold text-white uppercase mb-4">
            Ready to Start at $200/month?
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto text-sm">
            Contact Yash today and take the first step toward becoming the volleyball player you've always wanted to be.
          </p>
          <Link to="/contact" className="btn-primary text-sm px-10 py-4">
            Hire Me as Your Coach
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
