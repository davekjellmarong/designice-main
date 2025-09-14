import { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, company, email, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Name, email, and message are required',
      })
    }

    // Use Resend to send email
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'onboarding@resend.dev', // You can change this to your verified domain later
        to: process.env.CONTACT_EMAIL || 'your-email@example.com', // Use environment variable
        subject: `Ny henvendelse fra kontaktskjema - ${name}`,
        html: `
          <h2>Ny henvendelse fra kontaktskjema</h2>
          <p><strong>Navn:</strong> ${name}</p>
          ${company ? `<p><strong>Firma:</strong> ${company}</p>` : ''}
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Melding:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>Sendt fra kontaktskjema på ${new Date().toLocaleDateString(
            'no-NO'
          )}</em></p>
        `,
      })

      return res.status(200).json({
        success: true,
        message: 'Message sent successfully',
      })
    }

    // Fallback - just log to console (for development)
    console.log('Contact form submission:', {
      name,
      company,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    return res.status(200).json({
      success: true,
      message: 'Message received successfully',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your message',
    })
  }
}
