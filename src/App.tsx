import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './index.css';
import CancellationPolicy from './pages/CancellationPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';

const images = {
  hero: '/images/hero_bg.jpg',
  destDubai: '/images/dest_dubai.jpg',
  destMaldives: '/images/dest_maldives.jpg',
  destEurope: '/images/dest_europe.jpg',
  destSingapore: '/images/dest_singapore.jpg',
  serviceHoliday: '/images/service_holiday.jpg',
  serviceHolidayNew: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=75',
  serviceHotel: '/images/service_hotel.jpg',
  serviceFlight: '/images/service_flight.jpg',
  serviceVisa: '/images/service_visa.jpg',
  servicePlanning: '/images/service_planning.jpg',
  servicePersonalized: '/images/service_personalized.jpg',
  usp1: '/images/hero_maldives.jpg',
  usp2: '/images/hero_safari.jpg',
  usp3: 'https://images.unsplash.com/photo-1542314831-c53cd4b85ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=75',
  usp4: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=75',
  logo: '/images/ttt-logo.png'
};

// function openRazorpay(onSuccess: (paymentId: string) => void) {
//   const options: RazorpayOptions = {
//     key: import.meta.env.VITE_RAZORPAY_KEY_ID || '',
//     amount: 10000,
//     currency: 'INR',
//     name: 'The Travel Tribbe',
//     description: 'Trip Booking Payment',
//     handler: function (response: RazorpayResponse) {
//       console.log('Payment Success:', response.razorpay_payment_id);
//       onSuccess(response.razorpay_payment_id);
//     },
//     prefill: {
//       name: '',
//       email: '',
//       contact: '',
//     },
//     notes: {
//       trip: 'travel-tribbe',
//     },
//     theme: {
//       color: '#1a365d',
//     },
//     modal: {
//       ondismiss: function () {
//         console.log('Payment modal closed');
//       },
//     },
//   };
//
//   const rzp = new window.Razorpay(options);
//   rzp.open();
// }

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="header-brand">
        <img src={images.logo} alt="The Travel Tribbe Logo" className="header-logo" loading="eager" fetchPriority="high" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.insertAdjacentHTML('afterend', '<span style="font-family:Playfair Display; font-size:1.5rem; font-weight:700; color:var(--primary);">The Travel Tribbe</span>'); }} />
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#why-us" className="nav-link">Why Choose Us</a>
        <a href="#contact" className="nav-link">Contact Us</a>
        <a href="https://razorpay.me/@unityenterprises9893" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem', cursor: 'pointer' }}>Pay Now</a>
      </nav>
      <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu} />}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <img src={images.logo} alt="The Travel Tribbe" className="mobile-nav-logo" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">✕</button>
        </div>
        <a href="#home" className="mobile-nav-link" onClick={closeMobileMenu}>Home</a>
        <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>About Us</a>
        <a href="#services" className="mobile-nav-link" onClick={closeMobileMenu}>Services</a>
        <a href="#why-us" className="mobile-nav-link" onClick={closeMobileMenu}>Why Choose Us</a>
        <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>Contact Us</a>
        <a href="https://razorpay.me/@unityenterprises9893" target="_blank" rel="noopener noreferrer" className="btn btn-gold mobile-nav-btn" onClick={closeMobileMenu}>Pay Now</a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const heroImages = [
    images.hero,
    "/images/pexels-asadphoto-29901905.jpg",
    "/images/pexels-asadphoto-9482125.jpg",
    "/images/pexels-fabiorocha89-39159107.jpg",
    "/images/pexels-husam-wafaei-682295758-27571384.jpg",
    "/images/pexels-maria-charizani-3542905-5577693.jpg"
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="Luxury Destination"
            className={`hero-slide hero-slide-${idx + 1}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : undefined}
            decoding="async"
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Travel Better. <br className="hero-mobile-break" />Travel in Luxury.
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          From luxury holidays and premium hotel stays to business and first-class flights, visa assistance, and complete travel solutions, The Travel Tribbe takes care of every detail of your journey.
        </motion.p>
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.a
            href="#plan"
            className="btn btn-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Plan Your Trip
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            style={{ borderColor: 'white', color: 'white' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Talk to Our Travel Expert
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section bg-main" ref={ref}>
      <div className="about-grid">
        <motion.div
          className="about-image-collage"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.8 }}
        >
          <img src={images.serviceHotel} alt="Luxury Hotel" className="collage-img-1" loading="lazy" />
          <img src={images.serviceHoliday} alt="Luxury Holiday" className="collage-img-2" loading="lazy" />
          <div className="collage-badge">
            <span style={{ display: 'block', fontSize: '2rem', color: 'white', marginBottom: '5px' }}>Premium</span>
            Travel Experiences
          </div>
        </motion.div>
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>Travel, Curated Around You.</h2>
          <p className="about-text">
            The Travel Tribbe is a premium travel company dedicated to creating seamless, personalized, and memorable travel experiences. Whether you are planning a luxury holiday, booking a premium hotel, travelling for business, or looking for assistance with your flights and visa requirements, we help simplify the entire travel process.
          </p>
          <p className="about-text">
            Our approach is simple - understand your requirements, recommend the right options, and take care of the details so you can focus on enjoying your journey.
          </p>
          <div className="about-highlights">
            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="highlight-title">Personalized Experiences</h3>
              <p className="highlight-desc">Travel solutions designed around your preferences and requirements.</p>
            </motion.div>
            <motion.div
              className="highlight-item"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="highlight-title">Premium Travel Services</h3>
              <p className="highlight-desc">From luxury stays to premium flight arrangements.</p>
            </motion.div>
            <motion.div
              className="highlight-item"
              style={{ gridColumn: '1 / -1' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="highlight-title">End-to-End Assistance</h3>
              <p className="highlight-desc">Support across planning, booking, documentation and travel requirements.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    { title: 'Luxury Holidays', desc: 'Curated holiday experiences with premium stays, destinations and personalized travel arrangements.', img: images.serviceHolidayNew },
    { title: 'Premium Hotel Stays', desc: 'Access to carefully selected hotels and premium accommodation options suited to your journey.', img: images.serviceHotel },
    { title: 'Business & First-Class Flights', desc: 'Premium flight options designed for comfort, convenience and a seamless travel experience.', img: images.serviceFlight },
    { title: 'Visa Assistance', desc: 'Guidance and assistance with visa documentation and travel requirements for your destination.', img: images.serviceVisa },
    { title: 'End-to-End Travel Solutions', desc: 'From itinerary planning and bookings to travel coordination, we help manage the complete journey.', img: images.servicePlanning },
    { title: 'Personalized Travel Experiences', desc: 'Travel recommendations and arrangements tailored to your preferences, schedule and requirements.', img: images.servicePersonalized }
  ];

  return (
    <section id="services" className="section bg-white" ref={ref}>
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Our Travel Services
        </motion.h2>
      </div>
      <div className="services-grid-v2">
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            className="service-card-v2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <div className="service-img-wrapper-v2">
              <img src={svc.img} alt={svc.title} className="service-img-v2" loading="lazy" />
            </div>
            <div className="service-content-v2">
              <div className="service-num-v2">0{idx + 1}</div>
              <h3 className="service-title-v2">{svc.title}</h3>
              <p className="service-desc-v2">{svc.desc}</p>
              <a href="#contact" className="service-explore-v2">Discover <span>→</span></a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const planeRef = useRef<HTMLDivElement>(null);

  const steps = [
    { num: "01", title: "Tell Us Your Plan", desc: "Share your destination, travel dates, preferences and requirements with our team." },
    { num: "02", title: "We Curate", desc: "We understand your requirements and put together suitable travel options." },
    { num: "03", title: "We Arrange", desc: "From flights and hotels to travel assistance and documentation, we coordinate the required arrangements." },
    { num: "04", title: "You Travel", desc: "Everything is organized so you can focus on experiencing your journey." }
  ];

  useEffect(() => {
    if (isInView && planeRef.current) {
      planeRef.current.classList.add('active');
    }
  }, [isInView]);

  return (
    <section className="section bg-white" style={{ paddingTop: '40px' }} ref={ref}>
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Your Journey, Simplified.
        </motion.h2>
      </div>
      <div className="process-grid">
        <div
          className="plane-track-container"
          ref={planeRef}
        >
          <svg className="plane-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 12.5 50 Q 25 -20 37.5 50 T 62.5 50 T 87.5 50"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
              strokeDasharray="8 8" />
          </svg>
          <svg className="plane-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
          </svg>
        </div>
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="process-step"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
          >
            <div className="step-number">{step.num}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const usps = [
    { title: "Personalized Service", desc: "Every journey is planned around your individual travel requirements.", img: images.usp1 },
    { title: "Premium Options", desc: "We focus on quality stays, premium travel options and memorable experiences.", img: images.usp2 },
    { title: "Hassle-Free Planning", desc: "We simplify the planning and booking process by managing the important details.", img: images.usp3 },
    { title: "Dedicated Assistance", desc: "Our team remains available to assist you throughout your travel planning journey.", img: images.usp4 }
  ];

  return (
    <section id="why-us" className="section usp-editorial-section" ref={ref}>
      <div className="usp-editorial-container">
        <div className="usp-editorial-left">
          <motion.h2
            className="usp-editorial-title"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            Why Travel With<br />The Travel Tribbe?
          </motion.h2>
        </div>
        <div className="usp-editorial-right">
          {usps.map((usp, idx) => (
            <motion.div
              key={idx}
              className="usp-editorial-item"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
              whileHover={{ x: 10, backgroundColor: 'rgba(212, 175, 125, 0.05)' }}
            >
              <div className="usp-editorial-number">0{idx + 1}</div>
              <div className="usp-editorial-content">
                <h3 className="usp-editorial-heading">{usp.title}</h3>
                <p className="usp-editorial-desc">{usp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const destinations = [
    { name: 'Dubai', subtitle: 'Luxury escapes & premium experiences', img: images.destDubai },
    { name: 'Maldives', subtitle: 'Island getaways & luxury stays', img: images.destMaldives },
    { name: 'Europe', subtitle: 'Curated multi-city journeys', img: images.destEurope },
    { name: 'Singapore', subtitle: 'Premium city escapes', img: images.destSingapore }
  ];

  return (
    <section className="section bg-main" ref={ref}>
      <div className="section-header">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Explore Your Next Journey
        </motion.h2>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest, idx) => (
          <motion.div
            key={idx}
            className="dest-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <img src={dest.img} alt={dest.name} className="dest-img" loading="lazy" />
            <div className="dest-overlay">
              <h3 className="dest-title">{dest.name}</h3>
              <p className="dest-desc">{dest.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function EnquiryCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="plan" className="section" style={{ backgroundColor: 'var(--accent-light)', textAlign: 'center' }} ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        Planning Your Next Journey?
      </motion.h2>
      <motion.p
        className="section-subtitle"
        style={{ color: 'var(--primary)', marginBottom: '40px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Tell us where you want to go, and let The Travel Tribbe help you plan the journey.
      </motion.p>
      <motion.div
        className="cta-buttons"
        style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.a
          href="#contact"
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Plan My Trip
        </motion.a>
        <motion.a
          href="#contact"
          className="btn btn-outline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Speak to a Travel Expert
        </motion.a>
      </motion.div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelDate: '',
    travellers: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const today = new Date().toISOString().split('T')[0];

  const validate = (field: string, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[6-9]\d{9}$/.test(value.trim())) return 'Enter a valid 10-digit Indian phone number';
        return '';
      case 'email':
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Enter a valid email address';
        }
        return '';
      case 'destination':
        if (!value.trim()) return 'Destination is required';
        return '';
      case 'travelDate':
        if (value && value < today) return 'Travel date cannot be in the past';
        return '';
      case 'travellers':
        if (value && (isNaN(Number(value)) || Number(value) < 1 || Number(value) > 99)) {
          return 'Enter a valid number (1-99)';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validate(field, value) }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validate(field, formData[field as keyof typeof formData]) }));
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    let valid = true;
    (Object.keys(formData) as Array<keyof typeof formData>).forEach(field => {
      const err = validate(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        valid = false;
      }
    });
    setErrors(newErrors);
    setTouched({
      name: true, phone: true, email: true,
      destination: true, travelDate: true, travellers: true, message: true,
    });
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateAll()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `form-control${touched[field] && errors[field] ? ' form-control-error' : ''}`;

  return (
    <section id="contact" className="section bg-white" ref={ref}>
      <div className="contact-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>The Travel Tribbe</h2>
            <div className="info-block">
              <div className="info-label">Business Address</div>
              <div className="info-value">Ganpati Cottage, 6B 1-A Court Road, Civil Lines, Delhi, India</div>
            </div>

            <div className="info-block">
              <div className="info-label">GSTIN</div>
              <div className="info-value">07AJLPP2220M1Z1</div>
            </div>

            <div className="info-block">
              <div className="info-label">Email</div>
              <div className="info-value">accounts@thetraveltribbe.com</div>
            </div>
            <div style={{ marginTop: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Get in Touch</h3>
              <p style={{ color: 'var(--text-light)' }}>Plan your next journey with our travel experts.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Let's Plan Your Journey</h3>
          {submitted ? (
            <motion.div
              style={{ padding: '30px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', textAlign: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Thank You!</h4>
              <p>Thank you for contacting The Travel Tribbe. Our travel team will get in touch with you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {error && (
                <div style={{ padding: '12px', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
                  {error}
                </div>
              )}
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className={inputClass('name')}
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                    onBlur={() => handleBlur('name')}
                  />
                  {touched.name && errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    className={inputClass('phone')}
                    placeholder="Phone Number *"
                    maxLength={10}
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value.replace(/\D/g, ''))}
                    onBlur={() => handleBlur('phone')}
                  />
                  {touched.phone && errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className={inputClass('email')}
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                />
                {touched.email && errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="destination"
                    className={inputClass('destination')}
                    placeholder="Destination *"
                    value={formData.destination}
                    onChange={e => handleChange('destination', e.target.value)}
                    onBlur={() => handleBlur('destination')}
                  />
                  {touched.destination && errors.destination && <span className="form-error">{errors.destination}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="travelDate"
                    className={inputClass('travelDate')}
                    placeholder="Travel Date"
                    min={today}
                    value={formData.travelDate}
                    onChange={e => handleChange('travelDate', e.target.value)}
                    onBlur={() => handleBlur('travelDate')}
                  />
                  {touched.travelDate && errors.travelDate && <span className="form-error">{errors.travelDate}</span>}
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  inputMode="numeric"
                  name="travellers"
                  className={inputClass('travellers')}
                  placeholder="Number of Travellers"
                  value={formData.travellers}
                  onChange={e => handleChange('travellers', e.target.value.replace(/\D/g, ''))}
                  onBlur={() => handleBlur('travellers')}
                />
                {touched.travellers && errors.travellers && <span className="form-error">{errors.travellers}</span>}
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Travel Requirements / Message"
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={images.logo} alt="The Travel Tribbe Logo" className="footer-logo" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.insertAdjacentHTML('afterend', '<div class="footer-logo-text">TRIBBE</div>'); }} />
          <p className="footer-tagline">Travel better. Travel in luxury.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/chetan-patni-5755203b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.instagram.com/the_traveltribbe?stkn=MW9uMmpkdjgyZ2J4aw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://wa.me/message/BEV7CIELP7K2D1" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:accounts@thetraveltribbe.com">accounts@thetraveltribbe.com</a></li>
            <li style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px', lineHeight: '1.6' }}>Ganpati Cottage, 6B 1-A<br />Court Road, Civil Lines<br />Delhi, India</li>
            <li style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>GSTIN: 07AJLPP2220M1Z1</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#cancellation-policy">Cancellation & Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 The Travel Tribbe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// function PaymentSuccessModal({ paymentId, onClose }: { paymentId: string; onClose: () => void }) {
//   return (
//     <div className="modal-overlay" style={{
//       position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
//       backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)',
//       display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
//     }}>
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.9, y: 20 }}
//         className="modal-content"
//         style={{
//           background: 'white', padding: '40px', borderRadius: '16px',
//           maxWidth: '400px', width: '90%', textAlign: 'center',
//           boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
//         }}
//       >
//         <div style={{
//           width: '60px', height: '60px', borderRadius: '50%',
//           background: '#e8f5e9', color: '#4caf50',
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           margin: '0 auto 20px', fontSize: '30px'
//         }}>
//           ✓
//         </div>
//         <h3 style={{ margin: '0 0 10px', color: '#1a365d', fontSize: '24px' }}>Payment Successful!</h3>
//         <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>
//           Thank you for your payment. Your booking has been confirmed.
//         </p>
//         <div style={{
//           background: '#f8f9fa', padding: '15px', borderRadius: '8px',
//           marginBottom: '25px', fontSize: '14px', color: '#444',
//           border: '1px dashed #ccc'
//         }}>
//           <span style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '4px' }}>Transaction ID</span>
//           <strong>{paymentId}</strong>
//         </div>
//         <button
//           onClick={onClose}
//           className="btn btn-primary"
//           style={{ width: '100%', padding: '12px' }}
function PaymentSuccessModal({ paymentId, onClose }: { paymentId: string; onClose: () => void }) {
  return (
    <div className="modal-overlay" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="modal-content"
        style={{
          background: 'white', padding: '40px', borderRadius: '16px',
          maxWidth: '400px', width: '90%', textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}
      >
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%',
          background: '#e8f5e9', color: '#4caf50',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: '30px'
        }}>
          ✓
        </div>
        <h3 style={{ margin: '0 0 10px', color: '#1a365d', fontSize: '24px' }}>Payment Successful!</h3>
        <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.5' }}>
          Thank you for your payment. Your booking has been confirmed.
        </p>
        <div style={{
          background: '#f8f9fa', padding: '15px', borderRadius: '8px',
          marginBottom: '25px', fontSize: '14px', color: '#444',
          border: '1px dashed #ccc'
        }}>
          <span style={{ display: 'block', fontSize: '12px', color: '#888', marginBottom: '4px' }}>Transaction ID</span>
          <strong>{paymentId}</strong>
        </div>
        <button
          onClick={onClose}
          className="btn btn-primary"
          style={{ width: '100%', padding: '12px' }}
        >
          Done
        </button>
      </motion.div>
    </div>
  );
}

function App() {
  const [paymentSuccessId, setPaymentSuccessId] = useState<string | null>(null);
  const [pageReady, setPageReady] = useState(false);
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (window.location.hash.includes('cancellation-policy')) return 'cancellation-policy';
    if (window.location.hash.includes('privacy-policy')) return 'privacy-policy';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.includes('cancellation-policy')) {
        setCurrentRoute('cancellation-policy');
      } else if (window.location.hash.includes('privacy-policy')) {
        setCurrentRoute('privacy-policy');
      } else {
        setCurrentRoute('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPageReady(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (currentRoute === 'cancellation-policy') {
    return (
      <div className="app">
        <Header />
        <CancellationPolicy onBack={() => {
          window.location.hash = '#home';
        }} />
        <Footer />
        {paymentSuccessId && (
          <PaymentSuccessModal 
            paymentId={paymentSuccessId} 
            onClose={() => setPaymentSuccessId(null)} 
          />
        )}
      </div>
    );
  }

  if (currentRoute === 'privacy-policy') {
    return (
      <div className="app">
        <Header />
        <PrivacyPolicy />
        <Footer />
        {paymentSuccessId && (
          <PaymentSuccessModal 
            paymentId={paymentSuccessId} 
            onClose={() => setPaymentSuccessId(null)} 
          />
        )}
      </div>
    );
  }

  return (
    <div className="app" style={{ opacity: pageReady ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <Header />
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <WhyChooseUs />
      <Destinations />
      <EnquiryCTA />
      <Contact />
      <Footer />
      
      {paymentSuccessId && (
        <PaymentSuccessModal 
          paymentId={paymentSuccessId} 
          onClose={() => setPaymentSuccessId(null)} 
        />
      )}

      <a
        href="https://wa.me/message/BEV7CIELP7K2D1"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </div>
  );
}

export default App;
