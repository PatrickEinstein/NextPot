// import { Emailer } from "../component/Utils/SendEmail";
// export const MailController = async (req, res) => {
//   const { to, subject, text } = req.body;

//   try {
//     await Emailer(to, subject, text);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
