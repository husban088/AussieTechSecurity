// app/api/get-quote/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, propertyType, cameras, message } =
      await req.json();

    // Basic validation
    if (!name || !email || !phone || !propertyType) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.QUOTE_EMAIL_USER,
        pass: process.env.QUOTE_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Website Quote" <${process.env.QUOTE_EMAIL_USER}>`,
      to: process.env.QUOTE_EMAIL_USER,
      replyTo: email,
      subject: `New CCTV Quote Request from ${name} 🔥`,
      html: `
        <h2>New Quote Request Received</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Property Type:</b> ${propertyType}</p>
        <p><b>Number of Cameras:</b> ${cameras || "Not specified"}</p>
        <p><b>Message:</b> ${message || "No additional message"}</p>
        <hr>
        <p><small>Sent from Get Quote form on your website</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Quote request sent successfully",
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error("QUOTE EMAIL ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send quote request",
        details:
          process.env.NODE_ENV === "development" ? String(error) : undefined,
      }),
      { status: 500 }
    );
  }
}
