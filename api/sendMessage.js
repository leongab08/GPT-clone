// api/sendMessage.js
import { config } from "dotenv";
config({ path: '.env.local' }); // ← especificamos el path directo

import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-nano",
      messages: [{ role: "user", content: message }],
      temperature: 0.7,
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
