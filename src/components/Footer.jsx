import logo from '../assets/Group-1000010363.png';
import phoneIcon from '../assets/Group-1000004160-25x25.png';
import emailIcon from '../assets/Group-1000004160-1-25x25.png';
import addressIcon from '../assets/Group-1000004160-2-25x25.png';

const Footer = () => {
  return (
    <footer className="mt-16 bg-gradient-to-b from-[#FFE8DF] via-primarySoft/80 to-primaryLight">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="text-center md:text-left">
            <img src={logo} alt="VDMR Pty Ltd" className="mx-auto h-12 w-auto md:mx-0" />
            <p className="mt-4 text-sm text-slate-800">
            VDMR Pty Ltd is a premier Australian-based consultancy specializing exclusively in Microsoft Dynamics 365. We partner with businesses globally to deliver scalable, powerful ERP and CRM solutions that drive operational excellence and help achieve sustainable competitive advantage.
            </p>
            <div className="mt-4 flex justify-center gap-3 md:justify-start">
              <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-xs text-primary">
                fb
              </span>
              <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-xs text-primary">
                X
              </span>
              <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-xs text-primary">
                in
              </span>
              <span className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-xs text-primary">
                ig
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-800">
              <li>
                <a href="#home" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-slate-900 mb-3">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-slate-900">
              <li className="flex gap-3">
                <img src={phoneIcon} alt="Phone" className="h-6 w-6" />
                <span>
                  Phone (Customer Service)
                  <br />
                  (+61) 447 272 033
                </span>
              </li>
              <li className="flex gap-3">
                <img src={emailIcon} alt="Email" className="h-6 w-6" />
                <span>
                  General Email
                  <br />
                  admin@vdmrptyltd.com
                </span>
              </li>
              <li className="flex gap-3">
                <img src={addressIcon} alt="Address" className="h-6 w-6" />
                <span>
                  Office Address
                  <br />
                  Unit 1 / 251 Latrobe Tce, Geelong, Victoria 3220, Australia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/40 pt-4 text-center text-xs text-slate-900">
  Copyright © 2025 VDMR Pty Ltd, All rights reserved.
  <br />

  {/* Gradient Text for Nexzap */}
  Powered by{" "}
  <a
  href="https://nexzap.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="font-semibold md:text-sm hover:text-white"
>
  Nexzap
</a>
</div>
      </div>
    </footer>
  );
};

export default Footer;



