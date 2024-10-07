import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;

      // Check if required fields are present
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required.' });
      }

      // Create a transporter using your SMTP settings from environment variables
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: process.env.MAIL_ENCRYPTION === 'ssl', // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      });

      // Define the email options
      const mailOptions = {
        from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
        to: 'vimalsharma0753@gmail.com', // Change this to your recipient
        subject: 'New Contact Form Submission',
        text: `Message from ${name} <${email}>: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error in sendEmail API:', error); // Detailed logging
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
