import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import LogoMarquee from './components/LogoMarquee.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import CallToAction from './components/CallToAction.jsx';
import Projects from './components/Projects.jsx';
import BlogSection from './components/BlogSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
        <Projects />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;



