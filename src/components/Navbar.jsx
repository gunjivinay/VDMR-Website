import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Group-1000010363.png';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact Us' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      

      <motion.nav
        className={`backdrop-blur border-b transition-colors ${
          scrolled ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-white/80 border-transparent'
        }`}
        initial={false}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="VDMR Pty Ltd" className="h-10 w-auto md:h-12" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative inline-flex items-center py-1 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-b from-primaryLight to-primary px-4 py-2 text-sm font-medium text-white shadow-card hover:shadow-lg transition"
              >
                Sign Up Now
              </a>
              <a
                href="#contact"
                className="rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition"
              >
                Upload CV
              </a>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-slate-200 bg-white md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
                <ul className="flex flex-col gap-3 text-sm font-medium text-slate-800">
                  {links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-1 hover:bg-slate-100"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-gradient-to-b from-primaryLight to-primary px-4 py-2 text-center text-sm font-medium text-white shadow-card"
                  >
                    Sign Up Now
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-primary px-4 py-2 text-center text-sm font-medium text-primary"
                  >
                    Upload CV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;



