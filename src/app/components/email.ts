// import emailjs from "emailjs-com";
// require("dotenv").config();

// interface EmailFormData {
//   user_name: string;
//   user_email: string;
//   message: string;
// }
// const user_ID = process.env.EMAILJS_USER_ID;
// console.log("Service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
// console.log("Template ID:", process.env.NEXT_PUBLIC_TEMPLATE_ID);
// console.log("User ID:", process.env.NEXT_PUBLIC_PUBLIC_KEY);

// const sendEmail = async (formData: EmailFormData) => {
//   try {
//     const transformedData: Record<string, string> = {
//       user_name: formData.user_name,
//       user_email: formData.user_email,
//       message: formData.message,
//     };

//     const response = await emailjs.send(
//       process.env.NEXT_PUBLIC_SERVICE_ID!,
//       process.env.NEXT_PUBLIC_TEMPLATE_ID!,
//       transformedData,
//       process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ""
//     );

//     console.log("Email sent:", response);
//     return response;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// };

// export default sendEmail;

import emailjs from "@emailjs/browser";
require("dotenv").config();

interface EmailFormData {
  user_name: string;
  user_email: string;
  message: string;
}

console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
console.log(process.env.NEXT_PUBLIC_TEMPLATE_ID);
console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY);

const sendEmail = async (formData: EmailFormData) => {
  try {
    const transformedData: Record<string, string> = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      message: formData.message,
    };

    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      console.error("Missing EmailJS environment variables!");
      throw new Error("Missing EmailJS environment variables!");
    }

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      transformedData,
      process.env.NEXT_PUBLIC_PUBLIC_KEY!
    );

    console.log("Email sent:", response);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
