import { Link } from '@tanstack/react-router';
import { CheckCircle, Target, Zap, Shield, ArrowRight } from 'lucide-react';

const highlights = [
  { icon: <Zap size={20} />, title: '5+ Years Experience', desc: 'Coaching volleyball players at all levels from beginners to competitive athletes.' },
  { icon: <Target size={20} />, title: 'Performance Focused', desc: 'Every training plan is tailored to maximize your specific volleyball performance goals.' },
  { icon: <Shield size={20} />, title: 'Injury Prevention', desc: 'Specialized knowledge in keeping athletes healthy and performing at their best.' },
];

const values = [
  'Personalized training plans for every athlete',
  'Science-backed volleyball training methods',
  'Focus on vertical jump improvement',
  'Position-specific skill development',
  'Strength & conditioning for volleyball',
  'Safe injury recovery protocols',
];

export default function AboutCoach() {
  return (
    <div>
      {/* Hero */}
      <section
        className="py-20 md:py-28"
        style={{
          background: 'linear-gradient(135deg, oklch(var(--navy-dark)) 0%, oklch(var(--navy)) 100%)',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'oklch(var(--gold))' }}
          >
            Meet Your Coach
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase mb-3">
            Yash Bhardwaj
          </h1>
          <p
            className="text-lg font-medium uppercase tracking-widest"
            style={{ color: 'oklch(var(--gold))' }}
          >
            Professional Volleyball Coach
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Photo + Stats */}
            <div className="flex flex-col items-center gap-6">
              <div
                className="w-64 h-64 rounded-sm overflow-hidden border-4"
                style={{ borderColor: 'oklch(var(--gold))' }}
              >
                <img
                  src="/assets/generated/coach-yash-bhardwaj-v2.dim_800x800.jpg"
                  alt="Coach Yash Bhardwaj"
                  width={800}
                  height={800}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div
                className="w-full rounded-sm p-6 text-white"
                style={{ backgroundColor: 'oklch(var(--navy))' }}
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-display text-3xl font-bold" style={{ color: 'oklch(var(--gold))' }}>5+</div>
                    <div className="text-white/60 text-xs uppercase tracking-wider mt-1">Years Coaching</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold" style={{ color: 'oklch(var(--gold))' }}>6</div>
                    <div className="text-white/60 text-xs uppercase tracking-wider mt-1">Programs</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold" style={{ color: 'oklch(var(--gold))' }}>100+</div>
                    <div className="text-white/60 text-xs uppercase tracking-wider mt-1">Athletes</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold" style={{ color: 'oklch(var(--gold))' }}>$200</div>
                    <div className="text-white/60 text-xs uppercase tracking-wider mt-1">Per Month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'oklch(var(--gold-dark))' }}
              >
                About Yash
              </p>
              <h2
                className="font-display text-3xl md:text-4xl font-bold uppercase mb-5"
                style={{ color: 'oklch(var(--navy-dark))' }}
              >
                Passionate About Volleyball Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Yash Bhardwaj is a dedicated professional volleyball coach with over <strong className="text-foreground">5 years of coaching experience</strong>. He has worked with athletes at all levels — from beginners just learning the fundamentals to competitive players looking to take their game to the next level.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His coaching philosophy centers on a holistic approach: developing technical skills, building explosive athleticism, and ensuring long-term physical health. Yash specializes in vertical jump training, position-specific skill development, and injury prevention — giving every athlete the tools they need to succeed on the court.
              </p>

              {/* Mission */}
              <div
                className="rounded-sm p-5 mb-6 border-l-4"
                style={{
                  backgroundColor: 'oklch(var(--navy-dark) / 0.05)',
                  borderColor: 'oklch(var(--gold))',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: 'oklch(var(--gold-dark))' }}
                >
                  Mission Statement
                </p>
                <p className="text-foreground font-medium italic text-base leading-relaxed">
                  "Help players improve performance, jump higher, and avoid injuries — so they can play the game they love at their absolute best."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/programs" className="btn-primary">
                  View Programs
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(var(--navy-dark) / 0.04)' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-sm p-6 bg-card border border-border card-hover"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: 'oklch(var(--gold) / 0.12)',
                    color: 'oklch(var(--gold-dark))',
                  }}
                >
                  {item.icon}
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

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h2
              className="font-display text-3xl font-bold uppercase"
              style={{ color: 'oklch(var(--navy-dark))' }}
            >
              What You Get With Yash
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div key={value} className="flex items-center gap-3">
                <CheckCircle
                  size={18}
                  className="shrink-0"
                  style={{ color: 'oklch(var(--gold-dark))' }}
                />
                <span className="text-foreground text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: 'oklch(var(--navy-dark))' }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Online coaching starting at $200/month. Personalized plans, expert guidance, real results.
          </p>
          <Link to="/contact" className="btn-primary text-base px-10 py-4">
            Hire Me as Your Coach
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
