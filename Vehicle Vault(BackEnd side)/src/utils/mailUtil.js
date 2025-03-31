//to,from,subject,text
const mailer = require("nodemailer");

///function
const sendingMail = async (to, subject, text) => {
  const transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: "patelmeet7252@gmail.com",
      pass: "lcyd lbyy roez btqb",
    },
  });

  const mailOptions = {
    from: "patelmeet7252@gmail.com",
    to: to,
    subject: subject,
    // text: text,
    //html:"<h1>"+text+"</h1>"
    html:`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome to Our Platform</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                }
                .email-container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    border-radius: 8px;
                    padding: 20px;
                }
                .email-header {
                    text-align: center;
                    background-color: #4CAF50;
                    color: #fff;
                    padding: 15px;
                    border-radius: 8px 8px 0 0;
                }
                .email-body {
                    padding: 20px;
                }
                .user-details {
                    background-color: #f9f9f9;
                    padding: 15px;
                    border-radius: 5px;
                }
                .email-footer {
                    text-align: center;
                    padding: 15px;
                    background-color: #f4f4f4;
                    border-radius: 0 0 8px 8px;
                    font-size: 14px;
                    color: #777;
                }
            </style>
        </head>
        <body>
        <div class="email-container">
            <div class="email-header">
                <h2>Welcome to VehicleVault</h2>
            </div>
            <div class="email-body">
                <p>Hello <strong>your name</strong>,</p>
                <p>Thank you for signing up with us! Below are your account details:</p>
                <div class="user-details">
                    <p><strong>Username:</strong> your name</p>
                    <p><strong>Email:</strong>your email</p>
                    <p><strong>Phone:</strong> your phone</p>
                </div>
                <p>You can now log in to your account and explore our services.</p>
                <p>Best Regards,<br>Our Support Team</p>
            </div>
            <div class="email-footer">
                <p>Need help? <a href="mailto:support@yourwebsite.com">Contact Support</a></p>
                <p>&copy; 2025 Your Website Name. All Rights Reserved.</p>
            </div>
        </div>
        </body>
        </html>
        `,
  };

  const mailresponse = await transporter.sendMail(mailOptions);
  console.log(mailresponse);
  return mailresponse;
};

module.exports = {
  sendingMail,
};