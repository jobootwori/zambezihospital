import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { fullName, email, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${fullName} (${email})`,
    html: `<b style="font-size: 16px;">${subject}</b><br/>${message}`,
    //text: `${subject}\n${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

// // app/api/route.js
// import { NextRequest } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request: NextRequest) {
  
//     const { fullName, email, subject, message } = req.body;

//     console.log("Received request with data:", req.body);

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "zambezicancerhospital@gmail.com", // replace with your Gmail address
//         pass: "eatwijdokcmdawms", // replace with your Gmail password
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "zambezicancerhospital@gmail.com", // replace with your recipient's email address
//       subject: subject,
//       text: `
//         Full Name: ${fullName}
//         email: ${email}
//         subject: ${subject}
//         message: ${message}
//       `,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error("Error sending email:", error);
//         return res.status(500).json({ error: "Internal Server Error", message: error.toString() });
//       }
//       res.status(200).send("Email sent: " + info.response);
//     });
//   } 

