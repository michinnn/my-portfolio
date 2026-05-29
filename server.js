import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const SMTP_HOST = process.env.SMTP_HOST
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587
const SMTP_SECURE = process.env.SMTP_SECURE === 'true'
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER || SMTP_USER

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  console.warn('SMTP configuration is incomplete. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS in your .env file.')
}

app.use(express.json())
app.use(cors())

app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return res.status(500).json({ error: 'SMTP is not configured.' })
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `Portfolio Contact <${SMTP_USER}>`,
      to: CONTACT_RECEIVER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    res.json({ success: true, message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    res.status(500).json({ error: 'Unable to send the message right now.' })
  }
})

if (process.env.NODE_ENV === 'production') {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
