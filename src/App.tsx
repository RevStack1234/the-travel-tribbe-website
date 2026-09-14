import { useEffect, useState } from 'react';
import './index.css';

const images = {
  hero: '/images/hero_bg.png',
  destDubai: '/images/dest_dubai.png',
  destMaldives: '/images/dest_maldives.png',
  destEurope: '/images/dest_europe.png',
  destSingapore: '/images/dest_singapore.png',
  serviceHoliday: '/images/service_holiday.png',
  serviceHolidayNew: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  serviceHotel: '/images/service_hotel.png',
  serviceFlight: '/images/service_flight.png',
  serviceVisa: '/images/service_visa.png',
  servicePlanning: '/images/service_planning.png',
  servicePersonalized: '/images/service_personalized.png',
  usp1: '/images/hero_maldives.png',
  usp2: '/images/hero_safari.png',
  usp3: 'https://images.unsplash.com/photo-1542314831-c53cd4b85ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  usp4: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  logo: '/images/ttt-logo.png'
};

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-brand">
        <img src={images.logo} alt="The Travel Tribbe Logo" className="header-logo" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.insertAdjacentHTML('afterend', '<span style="font-family:Playfair Display; font-size:1.5rem; font-weight:700; color:var(--primary);">The Travel Tribbe</span>'); }} />
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#why-us" className="nav-link">Why Choose Us</a>
        <a href="#contact" className="nav-link">Contact</a>
        <a href="#plan" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>Plan Your Trip</a>
      </nav>
      <button className="mobile-menu-btn">☰</button>
    </header>
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
          />
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Travel Better. Travel in Luxury.</h1>
        <p className="hero-subtitle">
          From luxury holidays and premium hotel stays to business and first-class flights, visa assistance, and complete travel solutions, The Travel Tribbe takes care of every detail of your journey.
        </p>
        <div className="hero-buttons">
          <a href="#plan" className="btn btn-gold">Plan Your Trip</a>
          <a href="#contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Talk to Our Travel Expert</a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section bg-main">
      <div className="about-grid">
        <div className="about-image-collage reveal">
          <img src={images.serviceHotel} alt="Luxury Hotel" className="collage-img-1" />
          <img src={images.serviceHoliday} alt="Luxury Holiday" className="collage-img-2" />
          <div className="collage-badge">
            <span style={{ display: 'block', fontSize: '2rem', color: 'white', marginBottom: '5px' }}>Premium</span>
            Travel Experiences
          </div>
        </div>
        <div className="about-content reveal delay-200">
          <h2 className="section-title" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>Travel, Curated Around You.</h2>
          <p className="about-text">
            The Travel Tribbe is a premium travel company dedicated to creating seamless, personalized, and memorable travel experiences. Whether you are planning a luxury holiday, booking a premium hotel, travelling for business, or looking for assistance with your flights and visa requirements, we help simplify the entire travel process.
          </p>
          <p className="about-text">
            Our approach is simple - understand your requirements, recommend the right options, and take care of the details so you can focus on enjoying your journey.
          </p>
          <div className="about-highlights">
            <div className="highlight-item">
              <h3 className="highlight-title">Personalized Experiences</h3>
              <p className="highlight-desc">Travel solutions designed around your preferences and requirements.</p>
            </div>
            <div className="highlight-item">
              <h3 className="highlight-title">Premium Travel Services</h3>
              <p className="highlight-desc">From luxury stays to premium flight arrangements.</p>
            </div>
            <div className="highlight-item" style={{ gridColumn: '1 / -1' }}>
              <h3 className="highlight-title">End-to-End Assistance</h3>
              <p className="highlight-desc">Support across planning, booking, documentation and travel requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: 'Luxury Holidays', desc: 'Curated holiday experiences with premium stays, destinations and personalized travel arrangements.', img: images.serviceHolidayNew },
    { title: 'Premium Hotel Stays', desc: 'Access to carefully selected hotels and premium accommodation options suited to your journey.', img: images.serviceHotel },
    { title: 'Business & First-Class Flights', desc: 'Premium flight options designed for comfort, convenience and a seamless travel experience.', img: images.serviceFlight },
    { title: 'Visa Assistance', desc: 'Guidance and assistance with visa documentation and travel requirements for your destination.', img: images.serviceVisa },
    { title: 'End-to-End Travel Solutions', desc: 'From itinerary planning and bookings to travel coordination, we help manage the complete journey.', img: images.servicePlanning },
    { title: 'Personalized Travel Experiences', desc: 'Travel recommendations and arrangements tailored to your preferences, schedule and requirements.', img: images.servicePersonalized }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="section-header">
        <h2 className="section-title">Our Travel Services</h2>
      </div>
      <div className="services-grid-v2">
        {services.map((svc, idx) => (
          <div key={idx} className="service-card-v2 reveal" style={{ transitionDelay: `${(idx % 3) * 150}ms` }}>
            <div className="service-img-wrapper-v2">
              <img src={svc.img} alt={svc.title} className="service-img-v2" />
            </div>
            <div className="service-content-v2">
              <div className="service-num-v2">0{idx + 1}</div>
              <h3 className="service-title-v2">{svc.title}</h3>
              <p className="service-desc-v2">{svc.desc}</p>
              <div className="service-explore-v2">Discover <span>→</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    { num: "01", title: "Tell Us Your Plan", desc: "Share your destination, travel dates, preferences and requirements with our team." },
    { num: "02", title: "We Curate", desc: "We understand your requirements and put together suitable travel options." },
    { num: "03", title: "We Arrange", desc: "From flights and hotels to travel assistance and documentation, we coordinate the required arrangements." },
    { num: "04", title: "You Travel", desc: "Everything is organized so you can focus on experiencing your journey." }
  ];

  return (
    <section className="section bg-white" style={{ paddingTop: '40px' }}>
      <div className="section-header">
        <h2 className="section-title">Your Journey, Simplified.</h2>
      </div>
      <div className="process-grid">
        <div className="plane-track-container reveal delay-400">
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
          <div key={idx} className="process-step reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
            <div className="step-number">{step.num}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const usps = [
    { title: "Personalized Service", desc: "Every journey is planned around your individual travel requirements.", img: images.usp1 },
    { title: "Premium Options", desc: "We focus on quality stays, premium travel options and memorable experiences.", img: images.usp2 },
    { title: "Hassle-Free Planning", desc: "We simplify the planning and booking process by managing the important details.", img: images.usp3 },
    { title: "Dedicated Assistance", desc: "Our team remains available to assist you throughout your travel planning journey.", img: images.usp4 }
  ];

  return (
    <section id="why-us" className="section usp-editorial-section">
      <div className="usp-editorial-container">
        <div className="usp-editorial-left">
          <h2 className="usp-editorial-title reveal">Why Travel With<br/>The Travel Tribbe?</h2>
        </div>
        <div className="usp-editorial-right">
          {usps.map((usp, idx) => (
            <div key={idx} className="usp-editorial-item reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="usp-editorial-number">0{idx + 1}</div>
              <div className="usp-editorial-content">
                <h3 className="usp-editorial-heading">{usp.title}</h3>
                <p className="usp-editorial-desc">{usp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  const destinations = [
    { name: 'Dubai', subtitle: 'Luxury escapes & premium experiences', img: images.destDubai },
    { name: 'Maldives', subtitle: 'Island getaways & luxury stays', img: images.destMaldives },
    { name: 'Europe', subtitle: 'Curated multi-city journeys', img: images.destEurope },
    { name: 'Singapore', subtitle: 'Premium city escapes', img: images.destSingapore }
  ];

  return (
    <section className="section bg-main">
      <div className="section-header">
        <h2 className="section-title">Explore Your Next Journey</h2>
      </div>
      <div className="destinations-grid">
        {destinations.map((dest, idx) => (
          <div key={idx} className="dest-card reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
            <img src={dest.img} alt={dest.name} className="dest-img" />
            <div className="dest-overlay">
              <h3 className="dest-title">{dest.name}</h3>
              <p className="dest-desc">{dest.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EnquiryCTA() {
  return (
    <section id="plan" className="section" style={{ backgroundColor: 'var(--accent-light)', textAlign: 'center' }}>
      <h2 className="section-title">Planning Your Next Journey?</h2>
      <p className="section-subtitle" style={{ color: 'var(--primary)', marginBottom: '40px' }}>
        Tell us where you want to go, and let The Travel Tribbe help you plan the journey.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <a href="#contact" className="btn btn-primary">Plan My Trip</a>
        <a href="#contact" className="btn btn-outline">Speak to a Travel Expert</a>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="contact-grid">
        <div className="reveal">
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>The Travel Tribbe</h2>
            <div className="info-block">
              <div className="info-label">Address</div>
              <div className="info-value">Ganpati Cottage, 6B 1A Court Road, Civil Lines</div>
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
        </div>
        <div className="contact-form-container reveal delay-200">
          <h3 style={{ fontSize: '2rem', marginBottom: '30px', fontFamily: 'var(--font-heading)' }}>Let's Plan Your Journey</h3>
          {submitted ? (
            <div style={{ padding: '30px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Thank You!</h4>
              <p>Thank you for contacting The Travel Tribbe. Our travel team will get in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Full Name *" required />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Phone Number *" required />
                </div>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email Address" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Destination *" required />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Travel Date" />
                </div>
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Number of Travellers" min="1" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Travel Requirements / Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Enquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={images.logo} alt="The Travel Tribbe Logo" className="footer-logo" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.insertAdjacentHTML('afterend', '<div class="footer-logo-text">TRIBBE</div>'); }} />
          <p className="footer-tagline">Travel better. Travel in luxury.</p>
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
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
            <li style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>Ganpati Cottage, 6B 1A<br/>Court Road, Civil Lines</li>
          </ul>
        </div>
        <div>
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cancellation & Refund Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 The Travel Tribbe. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
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
    </div>
  );
}

export default App;
