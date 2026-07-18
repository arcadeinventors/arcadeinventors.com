import { NextResponse } from "next/server"

export const runtime = "nodejs"

const TO = process.env.CONTACT_TO || "info@arcadeinventors.com"
const FROM = process.env.CONTACT_FROM || "Arcade Inventors <onboarding@resend.dev>"

/**
 * POST /api/contact — routes a contact submission to info@arcadeinventors.com.
 * Sends via Resend when RESEND_API_KEY is set; otherwise accepts + logs the
 * message (so the form works while email delivery is being finalized).
 */
export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as Record<string, string>
  const name = (body.name || "").toString().slice(0, 200).trim()
  const email = (body.email || "").toString().slice(0, 200).trim()
  const interest = (body.interest || "General").toString().slice(0, 120)
  const message = (body.message || "").toString().slice(0, 5000).trim()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in your name, email, and message." }, { status: 400 })
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "That email doesn't look right." }, { status: 400 })
  }

  const subject = `Arcade Inventors — ${interest} — ${name}`
  const text = `New message from arcadeinventors.com\n\nName: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`

  const key = process.env.RESEND_API_KEY
  if (key) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
        body: JSON.stringify({ from: FROM, to: [TO], reply_to: email, subject, text }),
      })
      if (!res.ok) {
        console.error("[contact] resend failed:", res.status, (await res.text()).slice(0, 200))
      }
    } catch (err) {
      console.error("[contact] resend error:", err)
    }
  } else {
    console.log("[contact] (no RESEND_API_KEY) submission:", { name, email, interest })
  }

  return NextResponse.json({ ok: true })
}
