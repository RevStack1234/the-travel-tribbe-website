import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingStyle = { fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' };
  const paragraphStyle = { marginBottom: '15px' };
  const listItemStyle = { marginBottom: '10px', paddingLeft: '20px', position: 'relative' as const };

  return (
    <div className="policy-page">
      {/* Hero Section */}
      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'var(--bg-white)', paddingTop: '160px', paddingBottom: '100px', textAlign: 'center', position: 'relative' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ color: 'var(--bg-white)', fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '15px', lineHeight: 1.1 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', letterSpacing: '1px' }}
        >
          Effective Date: 15 September 2026
        </motion.p>
      </section>

      {/* Content Section */}
      <section className="section bg-white" style={{ padding: '80px 5%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ 
              backgroundColor: 'rgba(212, 175, 55, 0.05)', borderLeft: '4px solid var(--accent)', 
              padding: '25px 30px', marginBottom: '60px' 
            }}
          >
            <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 500, fontSize: '1.1rem', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Important:</strong> This policy describes the website and service practices of The Travel Tribbe. It should be reviewed by the business’s legal/compliance advisor before final publication.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gap: '50px', color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            
            <div>
              <h2 style={headingStyle}>1. Introduction</h2>
              <p style={paragraphStyle}>The Travel Tribbe (“The Travel Tribbe”, “we”, “us” or “our”) respects the privacy of visitors, customers and individuals who contact us for travel-related services. This Privacy Policy explains how we collect, use, disclose, retain and protect personal information when you visit our website, submit an enquiry, communicate with us, or purchase or use our travel services.</p>
            </div>

            <div>
              <h2 style={headingStyle}>2. Information We May Collect</h2>
              <p style={paragraphStyle}>Depending on the service requested, we may collect information such as:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '40px', marginBottom: '15px' }}>
                <li style={listItemStyle}>Name and contact details, including phone number, email address and communication preferences.</li>
                <li style={listItemStyle}>Travel-related information such as destination, travel dates, number of travellers, accommodation preferences and itinerary requirements.</li>
                <li style={listItemStyle}>Information required to arrange travel or visa-related services, which may include passport or identity details, date of birth, nationality and other documentation where necessary and lawfully requested.</li>
                <li style={listItemStyle}>Transaction and booking information, including payment status, invoice details and service selections.</li>
                <li style={listItemStyle}>Information you provide through enquiry forms, email, telephone, WhatsApp or other communication channels.</li>
                <li style={listItemStyle}>Technical information such as IP address, browser/device information, website usage data and cookies or similar technologies where applicable.</li>
              </ul>
            </div>

            <div>
              <h2 style={headingStyle}>3. How We Use Information</h2>
              <p style={paragraphStyle}>We may use personal information for purposes including:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '40px', marginBottom: '15px' }}>
                <li style={listItemStyle}>Responding to enquiries and providing quotations.</li>
                <li style={listItemStyle}>Planning, booking and coordinating travel, accommodation, flights, visa assistance and related services.</li>
                <li style={listItemStyle}>Processing payments, issuing invoices and maintaining business records.</li>
                <li style={listItemStyle}>Communicating booking updates, service information and important travel-related notices.</li>
                <li style={listItemStyle}>Verifying information and completing documentation required by travel suppliers, visa authorities or other service providers.</li>
                <li style={listItemStyle}>Improving our website, services, customer experience and internal operations.</li>
                <li style={listItemStyle}>Preventing fraud, misuse, security incidents or other unlawful activity.</li>
                <li style={listItemStyle}>Meeting applicable legal, regulatory, accounting and contractual obligations.</li>
              </ul>
            </div>

            <div>
              <h2 style={headingStyle}>4. Payments and Third-Party Service Providers</h2>
              <p style={paragraphStyle}>Payments may be processed through third-party payment gateways or financial institutions. We generally do not store complete payment-card details on our own systems. Payment information is handled by the relevant payment provider according to its own terms and privacy practices.</p>
              <p style={paragraphStyle}>To fulfil a booking or requested service, we may need to share relevant information with airlines, hotels, tour operators, visa/documentation service providers, insurance providers, transport providers, technology providers, payment processors or other suppliers involved in the requested service. We limit such sharing to information reasonably required for the relevant purpose.</p>
            </div>

            <div>
              <h2 style={headingStyle}>5. Cookies and Website Technologies</h2>
              <p style={paragraphStyle}>Our website may use cookies or similar technologies for essential website functionality, security, analytics and, where applicable, improving user experience. You may be able to control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
            </div>

            <div>
              <h2 style={headingStyle}>6. Data Security</h2>
              <p style={paragraphStyle}>We use reasonable administrative, technical and organizational measures intended to protect personal information against unauthorized access, misuse, alteration, disclosure or loss. However, no website, electronic transmission or storage system can be guaranteed to be completely secure.</p>
            </div>

            <div>
              <h2 style={headingStyle}>7. Data Retention</h2>
              <p style={paragraphStyle}>We retain personal information only for as long as reasonably necessary for the purposes described in this policy, including fulfilling bookings, maintaining records, resolving disputes, enforcing agreements and meeting applicable legal or accounting requirements. Retention periods may vary depending on the nature of the information and the service provided.</p>
            </div>

            <div>
              <h2 style={headingStyle}>8. Your Rights and Choices</h2>
              <p style={paragraphStyle}>Subject to applicable law, you may have rights regarding your personal information, including the ability to request access to, correction of or deletion of information, withdraw consent where processing is based on consent, or raise a complaint regarding the handling of your information. Requests can be made using the contact details below. Certain requests may be subject to legal, contractual or operational limitations.</p>
            </div>

            <div>
              <h2 style={headingStyle}>9. Children’s Information</h2>
              <p style={paragraphStyle}>Our services are intended to be arranged by adults or by persons legally authorized to make travel arrangements. We do not knowingly solicit unnecessary personal information from children through the website. Where information relating to a minor is required for a travel booking, it should be provided by a parent, guardian or authorized person.</p>
            </div>

            <div>
              <h2 style={headingStyle}>10. External Links</h2>
              <p style={paragraphStyle}>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, security or content of third-party websites. You should review their respective privacy policies before providing information.</p>
            </div>

            <div>
              <h2 style={headingStyle}>11. Changes to this Policy</h2>
              <p style={paragraphStyle}>We may update this Privacy Policy when our services, technology, legal requirements or business practices change. Updates will be published on this page with a revised effective date.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-main)', padding: '50px', marginTop: '20px', borderTop: '4px solid var(--accent)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '2rem', marginBottom: '25px' }}>12. Contact</h2>
              <p style={paragraphStyle}>For privacy-related questions, requests or complaints, please contact:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '15px' }}>
                <li style={{ fontSize: '1.2rem', color: 'var(--primary)' }}><strong>The Travel Tribbe</strong></li>
                <li><strong>Email:</strong> <a href="mailto:reservations@thetraveltribbe.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>reservations@thetraveltribbe.com</a></li>
              </ul>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-light)', textAlign: 'center', marginTop: '40px', paddingTop: '40px' }}>
              This document is published by The Travel Tribbe for customers and website visitors. The company may update this document from time to time; the latest version published on the website will apply from its stated effective date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
