import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import 'dotenv/config'

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:3000'] }))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  try {
    await resend.emails.send({
      from: 'IxonicTech Contact <onboarding@resend.dev>',
      to: 'ixonictech@gmail.com',
      reply_to: email,
      subject: subject ? `[Contact] ${subject}` : `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0d1117;color:#e2e8f0;border-radius:12px">
          <h2 style="margin:0 0 24px;color:#fff;font-size:22px">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;color:#94a3b8;width:100px;vertical-align:top">Name</td>
              <td style="padding:10px 0;color:#fff;font-weight:600">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#94a3b8;vertical-align:top">Email</td>
              <td style="padding:10px 0"><a href="mailto:${email}" style="color:#60a5fa">${email}</a></td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding:10px 0;color:#94a3b8;vertical-align:top">Subject</td>
              <td style="padding:10px 0;color:#fff">${subject}</td>
            </tr>` : ''}
            <tr>
              <td style="padding:10px 0;color:#94a3b8;vertical-align:top">Message</td>
              <td style="padding:10px 0;color:#fff;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
          <p style="margin:24px 0 0;color:#475569;font-size:12px">Sent via IxonicTech contact form</p>
        </div>
      `,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', JSON.stringify(err, null, 2))
    res.status(500).json({ error: err?.message || 'Failed to send email.' })
  }
})

const PORT = process.env.API_PORT || 3001
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`))
