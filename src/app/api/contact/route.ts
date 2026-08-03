import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, contact, message } = await req.json();
    
    // Grabs the webhook from your .env.local file
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
    }

    // Format the Discord embed message
    const payload = {
      username: "Portfolio Contact Form",
      embeds: [
        {
          title: "🚀 New Message Received!",
          color: 0x00ffaa, // Hex color code
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Contact Info", value: contact, inline: true },
            { name: "Message", value: message }
          ],
          timestamp: new Date().toISOString()
        }
      ]
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Discord rejected request" }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}