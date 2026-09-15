import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

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

  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers.host || 'localhost:3000';
  let baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.SITE_URL;
  if (!baseUrl) {
    baseUrl = `${protocol}://${host}`;
  }

  // Read logo and convert to base64 data URI so email clients can't block it
  let logoDataUri = 'https://placehold.co/200x200/111827/d4af37.png?text=TTT&font=montserrat';
  try {
    const logoPath = path.join(process.cwd(), 'public', 'images', 'ttt-logo.png');
    const logoBuffer = fs.readFileSync(logoPath);
    const base64 = logoBuffer.toString('base64');
    logoDataUri = `data:image/png;base64,${base64}`;
  } catch (e) {
    console.warn('Logo file not found, using placeholder');
  }

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Travel Enquiry</title>
      <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f9fc; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
        .wrapper { width: 100%; background-color: #f7f9fc; padding: 40px 0; }
        .container { max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .header { background: linear-gradient(135deg, #111827 0%, #1f2937 100%); padding: 40px 30px; text-align: center; border-bottom: 4px solid #d4af37; }
        .logo-img { max-width: 120px; height: auto; margin-bottom: 20px; border-radius: 50%; border: 2px solid rgba(212, 175, 55, 0.3); padding: 5px; background: rgba(255,255,255,0.05); }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px; }
        .header h1 strong { color: #d4af37; font-weight: 600; }
        .header p { color: #9ca3af; margin: 10px 0 0; font-size: 15px; font-weight: 400; text-transform: uppercase; letter-spacing: 2px; }
        .body-content { padding: 40px 30px; }
        .greeting { font-size: 18px; color: #374151; margin-bottom: 30px; font-weight: 500; text-align: center; }
        .section { margin-bottom: 35px; background: #f8fafc; border-radius: 12px; padding: 25px; border: 1px solid #e2e8f0; }
        .section-header { display: flex; align-items: center; margin-bottom: 20px; }
        .section-title { font-size: 14px; color: #d4af37; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; margin: 0; }
        .grid { display: table; width: 100%; }
        .grid-row { display: table-row; }
        .grid-cell { display: table-cell; padding: 12px 10px; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
        .grid-row:last-child .grid-cell { border-bottom: none; }
        .label { font-size: 13px; color: #6b7280; font-weight: 600; width: 40%; text-transform: uppercase; letter-spacing: 0.5px; }
        .value { font-size: 15px; color: #111827; font-weight: 500; width: 60%; }
        .message-box { background: #ffffff; border-left: 4px solid #d4af37; padding: 20px; margin-top: 15px; border-radius: 0 8px 8px 0; font-size: 15px; color: #374151; line-height: 1.6; box-shadow: 0 2px 5px rgba(0,0,0,0.02); }
        .footer { background: #111827; padding: 30px; text-align: center; color: #6b7280; font-size: 13px; }
        .footer-logo { width: 50px; opacity: 0.5; margin-bottom: 15px; filter: grayscale(100%); }
        .footer p { margin: 5px 0; }
        .footer a { color: #d4af37; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="container">
          <!-- Header -->
          <div class="header">
            <img src="${logoDataUri}" alt="The Travel Tribbe Logo" class="logo-img" width="120" />
            <h1>The Travel <strong>Tribbe</strong></h1>
            <p>New Enquiry Received</p>
          </div>
          
          <!-- Body -->
          <div class="body-content">
            <div class="greeting">
              You have received a new travel enquiry! ✈️
            </div>

            <!-- Contact Information -->
            <div class="section">
              <h2 class="section-title">👤 Contact Information</h2>
              <div class="grid">
                <div class="grid-row">
                  <div class="grid-cell label">Full Name</div>
                  <div class="grid-cell value">${escapeHtml(name)}</div>
                </div>
                <div class="grid-row">
                  <div class="grid-cell label">Phone</div>
                  <div class="grid-cell value">${escapeHtml(phone)}</div>
                </div>
                ${email ? `
                <div class="grid-row">
                  <div class="grid-cell label">Email</div>
                  <div class="grid-cell value"><a href="mailto:${escapeHtml(email)}" style="color: #d4af37; text-decoration: none;">${escapeHtml(email)}</a></div>
                </div>` : ''}
              </div>
            </div>

            <!-- Travel Details -->
            <div class="section">
              <h2 class="section-title">🗺️ Travel Details</h2>
              <div class="grid">
                <div class="grid-row">
                  <div class="grid-cell label">Destination</div>
                  <div class="grid-cell value" style="color: #d4af37; font-weight: bold;">${escapeHtml(destination)}</div>
                </div>
                ${travelDate ? `
                <div class="grid-row">
                  <div class="grid-cell label">Travel Date</div>
                  <div class="grid-cell value">${escapeHtml(travelDate)}</div>
                </div>` : ''}
                ${travellers ? `
                <div class="grid-row">
                  <div class="grid-cell label">Travellers</div>
                  <div class="grid-cell value">${escapeHtml(travellers)} People</div>
                </div>` : ''}
              </div>
            </div>

            <!-- Message -->
            ${message ? `
            <div class="section" style="background: transparent; border: none; padding: 0;">
              <h2 class="section-title" style="margin-left: 5px;">💬 Message / Requirements</h2>
              <div class="message-box">
                ${escapeHtml(message).replace(/\n/g, '<br>')}
              </div>
            </div>` : ''}
            
          </div>

          <!-- Footer -->
          <div class="footer">
            <img src="${logoDataUri}" alt="TTT" class="footer-logo" width="50" />
            <p>&copy; ${new Date().getFullYear()} The Travel Tribbe. All Rights Reserved.</p>
            <p>This enquiry was automatically generated from your website's contact form.</p>
          </div>
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
