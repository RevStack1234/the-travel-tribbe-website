import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, destination, travelDate, travellers, message } = req.body;

  if (!name || !phone || !destination) {
    return res.status(400).json({ error: 'Name, phone and destination are required' });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Email send error: GMAIL_USER or GMAIL_APP_PASSWORD is not configured');
    return res.status(500).json({ error: 'Failed to send enquiry. Please try again.' });
  }

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[char]));

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.SITE_URL || '';
  const logoUrl = `${baseUrl}/images/ttt-logo.png`;

  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #1a1a2e, #16213e); padding: 30px; text-align: center; }
        .logo { width: 80px; height: 80px; margin: 0 auto 15px; display: block; }
        .header h1 { color: #d4af7d; margin: 0; font-size: 24px; }
        .header p { color: #aaa; margin: 5px 0 0; font-size: 14px; }
        .body { padding: 30px; }
        .badge { display: inline-block; background: #d4af7d; color: #1a1a2e; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
        .section-title { font-size: 13px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin: 20px 0 10px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        .field { margin: 12px 0; }
        .field-label { font-size: 12px; color: #999; margin-bottom: 3px; }
        .field-value { font-size: 15px; color: #333; font-weight: 500; }
        .message-box { background: #f9f9f9; border-left: 3px solid #d4af7d; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; }
        .footer { background: #f9f9f9; padding: 20px 30px; text-align: center; font-size: 12px; color: #999; }
        .footer-logo { width: 40px; height: 40px; margin: 0 auto 10px; display: block; opacity: 0.6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="The Travel Tribbe" class="logo" />
          <h1>The Travel Tribbe</h1>
          <p>New Travel Enquiry Received</p>
        </div>
        <div class="body">
          <div class="badge">NEW ENQUIRY</div>

          <div class="section-title">Contact Details</div>
          <div class="field">
            <div class="field-label">Full Name</div>
            <div class="field-value">${escapeHtml(name)}</div>
          </div>
          <div class="field">
            <div class="field-label">Phone Number</div>
            <div class="field-value">${escapeHtml(phone)}</div>
          </div>
          ${email ? `
          <div class="field">
            <div class="field-label">Email Address</div>
            <div class="field-value">${escapeHtml(email)}</div>
          </div>` : ''}

          <div class="section-title">Travel Details</div>
          <div class="field">
            <div class="field-label">Destination</div>
            <div class="field-value">${escapeHtml(destination)}</div>
          </div>
          ${travelDate ? `
          <div class="field">
            <div class="field-label">Travel Date</div>
            <div class="field-value">${escapeHtml(travelDate)}</div>
          </div>` : ''}
          ${travellers ? `
          <div class="field">
            <div class="field-label">Number of Travellers</div>
            <div class="field-value">${escapeHtml(travellers)}</div>
          </div>` : ''}
          ${message ? `
          <div class="section-title">Message / Requirements</div>
          <div class="message-box">${escapeHtml(message)}</div>` : ''}
        </div>
        <div class="footer">
          <img src="${logoUrl}" alt="The Travel Tribbe" class="footer-logo" />
          <p>&copy; ${new Date().getFullYear()} The Travel Tribbe. All Rights Reserved.</p>
          <p>This enquiry was submitted from the website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: `"The Travel Tribbe" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      subject: `New Travel Enquiry - ${destination} | ${name}`,
      html: htmlTemplate,
      replyTo: email || undefined,
    });

    return res.status(200).json({ success: true, message: 'Enquiry submitted successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send enquiry. Please try again.' });
  }
};
