// import nodemailer from 'nodemailer';
// export const Emailer = async (email, subject, message) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "patoctave99@gmail.com",
//         pass: "kjksxvvyxtoldilv",
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "mohammedola1234@gmail.com",
//       subject: subject,
//       text: message,
//       // html: html,
//       // attachments: attachments,
//     };

//     await transporter.sendMail(mailOptions);
//     return "Mail sent successfully";
//   } catch (error) {
//     console.error(error.message);
//     return error.message;
//   }
// };
