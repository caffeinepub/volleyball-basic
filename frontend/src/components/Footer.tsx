import { Link } from '@tanstack/react-router';
import { SiFacebook, SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Heart } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/919412574143';
const FACEBOOK_URL = 'https://www.facebook.com/share/18PFxeeuyW/?mibextid=wwXIfr';
const INSTAGRAM_URL = 'https://www.instagram.com/volleyball_basic?igsh=MWdjenViNm51N3d0aQ%3D%3D&utm_source=qr';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'volleyball-basic');

  return (
    <footer style={{ backgroundColor: 'oklch(var(--navy-dark))' }} className="text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/logo.dim_400x120.png"
              alt="Volleyball Basic"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Professional volleyball coaching by Yash Bhardwaj. Helping athletes improve performance, jump higher, and avoid injuries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'oklch(var(--gold))' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Coach', path: '/about' },
                { label: 'Training Programs', path: '/programs' },
                { label: 'Pricing', path: '/pricing' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3
              className="font-display text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: 'oklch(var(--gold))' }}
            >
              Connect With Us
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: 'oklch(var(--gold) / 0.15)', color: 'oklch(var(--gold))' }}
                aria-label="WhatsApp"
              >
                <SiWhatsapp size={18} />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: 'oklch(var(--gold) / 0.15)', color: 'oklch(var(--gold))' }}
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ backgroundColor: 'oklch(var(--gold) / 0.15)', color: 'oklch(var(--gold))' }}
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2.5 inline-flex"
            >
              <SiWhatsapp size={14} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40"
          style={{ borderTop: '1px solid oklch(var(--gold) / 0.15)' }}
        >
          <p>© {year} Volleyball Basic. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart
              size={12}
              className="inline"
              style={{ color: 'oklch(var(--gold))', fill: 'oklch(var(--gold))' }}
            />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
