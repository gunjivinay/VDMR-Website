import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Group-1000010363.png';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact Us' }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href) => {
    setActive(href);
  };

  return (
    <header className="sticky top-0 z-40">
      <motion.nav
        className={`backdrop-blur border-b transition-colors ${
          scrolled
            ? 'bg-white/90 border-slate-200 shadow-sm'
            : 'bg-white/80 border-transparent'
        }`}
        initial={false}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1.3fr] items-center px-4 py-2 md:py-3">


          {/* LEFT — LOGO */}
          <div className="flex items-center">
            <a href="#home">
              <img
                src={logo}
                alt="VDMR Pty Ltd"
                className="h-10 w-auto md:h-12 lg:h-18"
              />
            </a>
          </div>

      {/* CENTER — NAV LINKS */}
<div className="hidden md:flex justify-center">
  <ul className="flex items-center gap-10 whitespace-nowrap text-base font-medium text-slate-700">
    {links.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          onClick={() => handleClick(link.href)}
          className="relative inline-flex items-center py-1 group"
        >
          {link.label}

          {/* Underline Animation with Active Link */}
          <span
            className={`
              absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-orange-400
              transition-all duration-300 origin-left
              ${active === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
            `}
          ></span>
        </a>
      </li>
    ))}
  </ul>
</div>


          {/* RIGHT — BUTTONS */}
<div className="hidden md:flex justify-end items-center gap-4">

<a
  href="#contact"
  className="
    px-7 py-2.5 rounded-xl text-base font-medium
    bg-gradient-to-b from-[#F39C7A] to-[#E56E40]
    text-white shadow 
    transition-all duration-500 ease-in-out
    hover:bg-none hover:bg-[#FBC7A6] hover:text-black
  "
>
  Sign Up Now →
</a>

<a
  href="#contact"
  className="
    px-7 py-2.5 rounded-xl text-base font-medium
    bg-gradient-to-b from-[#F39C7A] to-[#E56E40]
    text-white shadow 
    transition-all duration-500 ease-in-out
    hover:bg-none hover:bg-[#FBC7A6] hover:text-black
  "
>
  Upload CV
</a>


</div>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="absolute right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="text-lg">{open ? '✕' : '☰'}</span>
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-slate-200 bg-white md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4">
                <ul className="flex flex-col gap-3 text-base font-medium text-slate-800">
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
                    className="rounded-full bg-orange-500 px-5 py-2 text-center text-white font-medium hover:bg-orange-300 hover:text-black"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up Now →
                  </a>

                  <a
                    href="#contact"
                    className="rounded-full bg-orange-500 px-5 py-2 text-center text-white font-medium hover:bg-orange-300 hover:text-black"
                    onClick={() => setOpen(false)}
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
