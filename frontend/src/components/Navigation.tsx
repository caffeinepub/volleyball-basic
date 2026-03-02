import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Coach', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header
      className="sticky top-0 z-50 shadow-lg"
      style={{ backgroundColor: 'oklch(var(--navy-dark))' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/generated/volleyball-basic-logo.dim_690x460.png"
              alt="Volleyball Basic"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link px-4 py-2 rounded-sm text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-gold'
                    : 'text-white/80 hover:text-white'
                }`}
                style={isActive(link.path) ? { color: 'oklch(var(--gold))' } : {}}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 btn-primary text-xs px-5 py-2.5"
            >
              Hire Me
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-sm text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: 'oklch(var(--navy))',
            borderColor: 'oklch(var(--gold) / 0.2)',
          }}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-sm text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'font-semibold'
                    : 'text-white/80 hover:text-white'
                }`}
                style={
                  isActive(link.path)
                    ? { color: 'oklch(var(--gold))', backgroundColor: 'oklch(var(--gold) / 0.1)' }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 btn-primary text-center text-xs py-3"
            >
              Hire Me as Your Coach
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
