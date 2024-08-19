const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { name, email, message } = JSON.parse(event.body);

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.your-email-provider.com", // replace with your SMTP server
    port: 587, // replace with the SMTP server port
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'your-email@example.com', // replace with your email address
      pass: 'your-email-password', // replace with your email password
    },
  });

  // Setup email data
  let mailOptions = {
    from: `"Portfolio Contact Form" <${email}>`, // sender address
    to: 'your-email@example.com', // list of receivers
    subject: 'New Contact Form Submission', // Subject line
    text: `You have a new message from ${name} (${email}): ${message}`, // plain text body
  };

  // Send email with defined transport object
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
