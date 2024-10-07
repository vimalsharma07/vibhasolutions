import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {

    console.log('SMTP Config:', {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      user: process.env.MAIL_USERNAME,
    });
    
    if (req.method === 'POST') {
      const { name, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: false,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
        to: 'vimalsharma0753@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Message from ${name} <${email}>: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } 
  catch (error) {
    console.error('Error sending email:', error);
    console.error('Full error details:', error.stack); // Log the full error stack for debugging
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
  
}
