import dotenv from "dotenv";

dotenv.config();

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.SEND_EMAIL,
    pass: process.env.SEND_PASSWORD,
  },
});

const sendMail = async (to, subject, message) => {
  try {
    const info = await transporter.sendMail({
      to,
      subject,
      html: message,
    });
    return { status: "Mail Sent Successfully", messageId: info.messageId };
  } catch (error) {
    return { status: "Mail Sent Failed", error: error.message };
  }
};

export default sendMail;
