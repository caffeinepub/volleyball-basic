import { Link } from '@tanstack/react-router';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface Program {
  title: string;
  image: string;
  description: string;
  benefits: string[];
  tag: string;
}

const programs: Program[] = [
  {
    title: 'Vertical Jump Training',
    image: '/assets/generated/vertical-jump.dim_600x400.png',
    tag: 'Athleticism',
    description:
      'Unlock your explosive jumping potential with a science-backed vertical jump program specifically designed for volleyball players. Build the fast-twitch muscle fibers and plyometric power needed to dominate at the net.',
    benefits: [
      'Increase vertical jump height by 4–8 inches',
      'Develop explosive take-off mechanics',
      'Improve approach jump timing and consistency',
      'Build lower-body power and reactive strength',
    ],
  },
  {
    title: 'Setter Specific Training',
    image: '/assets/generated/volleyball-action-setter-v2.dim_1024x1024.jpg',
    tag: 'Position Specific',
    description:
      'Master the art of setting with a comprehensive program covering decision-making under pressure, precise footwork patterns, and setting accuracy from every position on the court.',
    benefits: [
      'Sharpen setting accuracy and consistency',
      'Improve footwork and court positioning',
      'Develop faster decision-making under pressure',
      'Build hand strength and touch for all set types',
    ],
  },
  {
    title: 'Attacker Specific Training',
    image: '/assets/generated/attacker-training.dim_600x400.png',
    tag: 'Position Specific',
    description:
      'Become a dominant offensive weapon with training focused on perfecting your approach mechanics, maximizing arm swing speed, and developing the tactical awareness to beat any block.',
    benefits: [
      'Perfect 3-step and 4-step approach mechanics',
      'Maximize arm swing speed and spike power',
      'Develop line, angle, and cut shot accuracy',
      'Improve reading of blockers and defenders',
    ],
  },
  {
    title: 'Blocker Specific Training',
    image: '/assets/generated/blocker-training.dim_600x400.png',
    tag: 'Position Specific',
    description:
      'Become an impenetrable wall at the net. This program focuses on perfecting your blocking timing, lateral footwork, and the ability to read hitters before they even swing.',
    benefits: [
      'Master blocking timing and penetration',
      'Improve lateral shuffle and cross-step footwork',
      'Develop hitter-reading and anticipation skills',
      'Build consistent block positioning and hand placement',
    ],
  },
  {
    title: 'Strength & Conditioning',
    image: '/assets/generated/strength-training.dim_600x400.png',
    tag: 'Physical Development',
    description:
      'Build a volleyball-ready body with sport-specific strength and conditioning programming. Develop the power, endurance, and resilience needed to perform at your peak throughout an entire season.',
    benefits: [
      'Build volleyball-specific functional strength',
      'Improve explosive power and speed on court',
      'Enhance endurance for long matches and tournaments',
      'Reduce injury risk through balanced muscle development',
    ],
  },
  {
    title: 'Injury Recovery & Rehabilitation',
    image: '/assets/generated/injury-recovery.dim_600x400.png',
    tag: 'Health & Recovery',
    description:
      'Return to the court safely and stronger than before. This program provides structured rehabilitation protocols for common volleyball injuries, ensuring a safe and effective return to full performance.',
    benefits: [
      'Structured return-to-play protocols',
      'Targeted rehabilitation for ankle, knee & shoulder injuries',
      'Rebuild strength and mobility post-injury',
      'Prevent re-injury with corrective exercise programming',
    ],
  },
];

export default function TrainingPrograms() {
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
            What We Offer
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white uppercase mb-4">
            Training Programs
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Six specialized volleyball training programs designed to elevate every aspect of your game — from athleticism to position-specific skills.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <article
                key={program.title}
                className="bg-card border border-border rounded-sm overflow-hidden card-hover flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: '208px' }}>
                  <img
                    src={program.image}
                    alt={program.title}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, oklch(var(--navy-dark) / 0.6) 0%, transparent 50%)',
                    }}
                  />
                  {/* Tag */}
                  <span
                    className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm"
                    style={{
                      backgroundColor: 'oklch(var(--gold))',
                      color: 'oklch(var(--navy-dark))',
                    }}
                  >
                    {program.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2
                    className="font-display text-xl font-bold uppercase tracking-wide mb-3"
                    style={{ color: 'oklch(var(--navy-dark))' }}
                  >
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-6 flex-1">
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{ color: 'oklch(var(--gold-dark))' }}
                    >
                      Key Benefits
                    </p>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle
                            size={15}
                            className="shrink-0 mt-0.5"
                            style={{ color: 'oklch(var(--gold-dark))' }}
                          />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="btn-primary w-full justify-center text-xs py-3"
                  >
                    Get Started
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-16 text-center"
        style={{
          background: 'linear-gradient(135deg, oklch(var(--gold-dark)) 0%, oklch(var(--gold)) 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="font-display text-3xl md:text-4xl font-bold uppercase mb-4"
            style={{ color: 'oklch(var(--navy-dark))' }}
          >
            Not Sure Which Program Is Right for You?
          </h2>
          <p
            className="mb-8 max-w-md mx-auto text-sm"
            style={{ color: 'oklch(var(--navy-dark) / 0.75)' }}
          >
            Contact Yash directly and get a personalized recommendation based on your position, goals, and current level.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 font-bold text-sm uppercase tracking-wider rounded-sm transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: 'oklch(var(--navy-dark))', color: 'white' }}
          >
            Contact Coach Yash
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
