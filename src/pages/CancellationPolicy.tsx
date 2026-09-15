import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

interface Props {
  onBack: () => void;
}

export default function CancellationPolicy({ onBack: _onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingStyle = { fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '15px' };
  const paragraphStyle = { marginBottom: '15px' };

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
          Cancellation & Refund Policy
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
              <strong style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Important:</strong> Travel products are supplied under different fare and supplier rules. The specific cancellation terms shown on a quotation, invoice or booking confirmation should always be checked before payment.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gap: '50px', color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            
            <div>
              <h2 style={headingStyle}>1. Scope</h2>
              <p style={paragraphStyle}>This Cancellation & Refund Policy applies to travel services arranged by The Travel Tribbe, including flights, hotels, holidays, travel packages, visa assistance and other travel-related services, unless a separate written booking-specific policy applies.</p>
            </div>

            <div>
              <h2 style={headingStyle}>2. General Cancellation Principle</h2>
              <p style={paragraphStyle}>Cancellation and refund eligibility depends on the nature of the service, the timing of cancellation and the terms imposed by the relevant airline, hotel, tour operator, visa authority, insurer or other supplier.</p>
              <p style={paragraphStyle}>A customer should review the cancellation terms communicated in the quotation, invoice or booking confirmation before making payment.</p>
            </div>

            <div>
              <h2 style={headingStyle}>3. Customer-Initiated Cancellation</h2>
              <p style={paragraphStyle}>Customers requesting cancellation should contact The Travel Tribbe using the contact details provided on the website or booking documents. Cancellation requests should be made as early as possible.</p>
              <p style={paragraphStyle}>Any supplier cancellation charge, non-refundable amount, service fee, convenience fee, payment-gateway charge where applicable, visa/application fee, or other charge stated in the booking terms may be deducted from the amount refundable to the customer.</p>
            </div>

            <div>
              <h2 style={headingStyle}>4. Flights</h2>
              <p style={paragraphStyle}>Flight cancellation and refund conditions are primarily governed by the fare rules and policies of the relevant airline. Certain fares may be fully or partially non-refundable. Airline cancellation penalties, fare differences, taxes, service charges and applicable processing fees may affect the final refund.</p>
              <p style={paragraphStyle}>For schedule changes or cancellations initiated by an airline, available options will depend on the airline's applicable policy and the circumstances of the disruption.</p>
            </div>

            <div>
              <h2 style={headingStyle}>5. Hotels and Accommodation</h2>
              <p style={paragraphStyle}>Hotel bookings may be refundable, partially refundable or non-refundable depending on the rate selected and the property's cancellation policy. Where a hotel or accommodation supplier retains a cancellation charge, that amount may be deducted from any customer refund.</p>
            </div>

            <div>
              <h2 style={headingStyle}>6. Holiday Packages and Tours</h2>
              <p style={paragraphStyle}>Package, tour and activity bookings may have supplier-specific cancellation schedules. Certain components may become non-refundable after confirmation or within a specified period before travel.</p>
              <p style={paragraphStyle}>Where multiple suppliers are involved, each component may have a separate cancellation rule and the overall refund may therefore differ from the original amount paid.</p>
            </div>

            <div>
              <h2 style={headingStyle}>7. Visa and Documentation Services</h2>
              <p style={paragraphStyle}>Government visa fees, embassy/consulate charges, visa-centre charges and certain third-party documentation fees are generally non-refundable once paid or submitted, subject to the relevant authority's rules.</p>
              <p style={paragraphStyle}>The Travel Tribbe's service or processing fee may also be non-refundable once work has commenced, unless otherwise agreed in writing.</p>
            </div>

            <div>
              <h2 style={headingStyle}>8. Non-Refundable Services</h2>
              <p style={paragraphStyle}>Unless specifically stated otherwise in writing, the following may be non-refundable: supplier-declared non-refundable fares or rates, government and visa fees, third-party application charges, completed service components, processing/service fees after work has commenced, and charges arising from customer no-show or late cancellation.</p>
            </div>

            <div>
              <h2 style={headingStyle}>9. No-Show and Missed Travel</h2>
              <p style={paragraphStyle}>If a customer does not travel, fails to appear for a confirmed service, misses a flight or otherwise fails to use a booked service, refund eligibility will be determined by the applicable supplier rules. The Travel Tribbe cannot guarantee a refund where the supplier treats the booking as a no-show or non-refundable booking.</p>
            </div>

            <div>
              <h2 style={headingStyle}>10. Refund Processing</h2>
              <p style={paragraphStyle}>Where a refund is approved, The Travel Tribbe will initiate or process the refundable amount after applicable supplier confirmations and reconciliation are completed. Refunds will normally be made to the original payment method, unless an alternative method is legally permissible and agreed in writing.</p>
              <p style={paragraphStyle}>The time taken for the refund to reflect in the customer's account may depend on airlines, hotels, other suppliers, payment gateways, banks and financial institutions and may therefore vary.</p>
            </div>

            <div>
              <h2 style={headingStyle}>11. Changes Instead of Cancellation</h2>
              <p style={paragraphStyle}>Where permitted by the supplier, customers may request a change of travel dates, passenger details or other booking elements instead of cancellation. Such changes may attract fare differences, supplier charges, service fees or other applicable costs.</p>
            </div>

            <div>
              <h2 style={headingStyle}>12. Company-Initiated Cancellation or Service Disruption</h2>
              <p style={paragraphStyle}>If The Travel Tribbe is unable to provide a confirmed service due to circumstances within its reasonable control, we will work with the customer to provide an appropriate alternative or process any refund that is actually due under the applicable booking terms.</p>
              <p style={paragraphStyle}>Where disruption is caused by a third-party supplier or circumstances beyond our reasonable control, the remedy will be subject to the supplier's policy and applicable law.</p>
            </div>

            <div>
              <h2 style={headingStyle}>13. Force Majeure</h2>
              <p style={paragraphStyle}>Refunds or alternatives arising from natural disasters, government restrictions, war, civil unrest, pandemics, strikes, severe weather, border closures or other extraordinary events will be handled according to the applicable supplier rules and the law. The Travel Tribbe will provide reasonable assistance but cannot guarantee a full refund where suppliers do not provide one.</p>
            </div>

            <div>
              <h2 style={headingStyle}>14. How to Request a Cancellation or Refund</h2>
              <p style={paragraphStyle}>Send the request to <a href="mailto:accounts@thetraveltribbe.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>accounts@thetraveltribbe.com</a> with the customer's name, booking/reference number, service booked, travel date and reason for cancellation. The team may request additional information to verify the booking and process the request.</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-main)', padding: '50px', marginTop: '20px', borderTop: '4px solid var(--accent)' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', fontSize: '2rem', marginBottom: '25px' }}>15. Contact</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '15px' }}>
                <li style={{ fontSize: '1.2rem', color: 'var(--primary)' }}><strong>The Travel Tribbe</strong></li>
                <li><strong>Email:</strong> <a href="mailto:accounts@thetraveltribbe.com" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>accounts@thetraveltribbe.com</a></li>
                <li><strong>Address:</strong> Ganpati Cottage, 6B 1-A Court Road, Civil Lines, Delhi, India</li>
                <li><strong>GSTIN:</strong> 07AJLPP2220M1Z1</li>
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
