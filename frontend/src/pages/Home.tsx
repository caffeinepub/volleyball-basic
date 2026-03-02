import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react';

const programs = [
  {
    title: 'Vertical Jump Training',
    image: '/assets/generated/vertical-jump.dim_600x400.png',
    desc: 'Explosive jump development for volleyball players.',
    path: '/programs',
  },
  {
    title: 'Setter Training',
    image: '/assets/generated/setter-training.dim_600x400.png',
    desc: 'Decision making, footwork & setting accuracy.',
    path: '/programs',
  },
  {
    title: 'Attacker Training',
    image: '/assets/generated/attacker-training.dim_600x400.png',
    desc: 'Approach mechanics, arm swing & spike power.',
    path: '/programs',
  },
  {
    title: 'Blocker Training',
    image: '/assets/generated/blocker-training.dim_600x400.png',
    desc: 'Timing, footwork & reading hitters.',
    path: '/programs',
  },
  {
    title: 'Strength & Conditioning',
    image: '/assets/generated/strength-training.dim_600x400.png',
    desc: 'Sport-specific strength for volleyball athletes.',
    path: '/programs',
  },
  {
    title: 'Injury Recovery',
    image: '/assets/generated/injury-recovery.dim_600x400.png',
    desc: 'Safe return-to-play rehabilitation programs.',
    path: '/programs',
  },
];

const stats = [
  { icon: <Award size={28} />, value: '5+', label: 'Years Experience' },
  { icon: <Users size={28} />, value: '100+', label: 'Athletes Coached' },
  { icon: <TrendingUp size={28} />, value: '6', label: 'Training Programs' },
  { icon: <Star size={28} />, value: '100%', label: 'Dedication' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1400x600.png')" }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, oklch(var(--navy-dark) / 0.92) 0%, oklch(var(--navy) / 0.80) 60%, oklch(var(--navy-dark) / 0.70) 100%)',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{
                backgroundColor: 'oklch(var(--gold) / 0.15)',
                color: 'oklch(var(--gold))',
                border: '1px solid oklch(var(--gold) / 0.3)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'oklch(var(--gold))' }} />
              Professional Volleyball Coaching
            </div>

            <h1
              className="font-display text-5xl md:text-7xl font-bold text-white leading-tight uppercase mb-4"
            >
              Volleyball
              <span style={{ color: 'oklch(var(--gold))' }}> Basic</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-4 max-w-xl">
              Train smarter. Jump higher. Dominate the court. Professional online volleyball coaching by{' '}
              <span className="text-white font-semibold">Yash Bhardwaj</span>.
            </p>

            {/* Pricing Callout */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm mb-8 text-sm font-semibold"
              style={{
                backgroundColor: 'oklch(var(--gold))',
                color: 'oklch(var(--navy-dark))',
              }}
            >
              <CheckCircle size={16} />
              Starting at $200/month — Online Coaching
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                Hire Me as Your Coach
                <ArrowRight size={18} />
              </Link>
              <Link to="/programs" className="btn-outline text-base px-8 py-4">
                View Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: 'oklch(var(--navy))' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center gap-2">
                <div style={{ color: 'oklch(var(--gold))' }}>{stat.icon}</div>
                <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: 'oklch(var(--gold))' }}
            >
              What We Offer
            </p>
            <h2 className="section-title" style={{ color: 'oklch(var(--navy-dark))' }}>
              Training Programs
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Specialized volleyball training programs designed to elevate every aspect of your game.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.title}
                to={program.path}
                className="group block rounded-sm overflow-hidden card-hover bg-card border border-border"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, oklch(var(--navy-dark) / 0.7) 0%, transparent 60%)',
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="font-display text-lg font-semibold uppercase tracking-wide mb-1"
                    style={{ color: 'oklch(var(--navy-dark))' }}
                  >
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{program.desc}</p>
                  <div
                    className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'oklch(var(--gold-dark))' }}
                  >
                    Learn More <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Coach Teaser */}
      <section
        className="py-20"
        style={{ backgroundColor: 'oklch(var(--navy-dark))' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'oklch(var(--gold))' }}
              >
                Your Coach
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white uppercase mb-4">
                Yash Bhardwaj
              </h2>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'oklch(var(--gold))' }}
              >
                Professional Volleyball Coach
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                With <strong className="text-white">5+ years of coaching experience</strong>, Yash Bhardwaj has helped
                hundreds of volleyball athletes improve their performance, jump higher, and build injury-resistant bodies.
                His mission is simple: help every player reach their full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/about" className="btn-primary">
                  Meet Your Coach
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center text-6xl font-display font-bold text-white border-4"
                style={{
                  backgroundColor: 'oklch(var(--navy-light))',
                  borderColor: 'oklch(var(--gold))',
                  color: 'oklch(var(--gold))',
                }}
              >
                YB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 text-center"
        style={{
          background: 'linear-gradient(135deg, oklch(var(--gold-dark)) 0%, oklch(var(--gold)) 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="font-display text-4xl md:text-5xl font-bold uppercase mb-4"
            style={{ color: 'oklch(var(--navy-dark))' }}
          >
            Ready to Elevate Your Game?
          </h2>
          <p
            className="text-base md:text-lg mb-8 max-w-xl mx-auto"
            style={{ color: 'oklch(var(--navy-dark) / 0.8)' }}
          >
            Join athletes who are already training with Yash Bhardwaj. Online coaching starting at just $200/month.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 font-bold text-base uppercase tracking-wider rounded-sm transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'oklch(var(--navy-dark))',
              color: 'white',
            }}
          >
            Hire Me as Your Coach
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
