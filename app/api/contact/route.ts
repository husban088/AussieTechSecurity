import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ⚡ PARALLEL SEND (FAST RESPONSE)
    const mailPromise = transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // ⚡ response pehle bhej do (instant feel)
    return new Response(JSON.stringify({ success: true }), { status: 200 });

    // email background me send hoti rahegi
    await mailPromise;
  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}
