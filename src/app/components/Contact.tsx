import React, { useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import sendEmail from "./email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const loading = toast.loading("Sending your message...", {
        className: "toast",
      });
      try {
        await sendEmail({
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          message: form.current.message.value,
        });
        toast.dismiss(loading);
        toast.success("Message sent successfully!", {
          className: "toast",
        });
        form.current.reset();
      } catch (error) {
        console.error("Failed to send message:", error);
        toast.dismiss(loading);
        toast.error("Failed to send message, please try again.", {
          className: "toast",
        });
      }
    }
  };

  return (
    <>
      <motion.h2
        className="text-4xl text-white text-center mt-28 font-bold mb-4 hover:-rotate-6 duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
        <div className="w-20 mx-auto h-2 bg-blue-500 rounded-full -rotate-6"></div>
        <div className="w-24 mx-auto h-2 bg-green-500 rounded-full -rotate-6"></div>
      </motion.h2>
      <ToastContainer />
      <div className=" max-w-4xl mt-10 mx-auto p-16 mb-5">
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-10 flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center w-full">
            <input
              type="text"
              id="name"
              name="user_name"
              required
              placeholder="Name"
              className="mt-1  p-4 bg-transparent text-white border border-gray-500 rounded-md shadow-sm focus:outline-none text-base mr-3 "
            />

            <input
              type="email"
              id="email"
              name="user_email"
              required
              placeholder="Email"
              className="mt-1  p-4 bg-transparent text-white border border-gray-500 rounded-md shadow-sm focus:outline-none text-base ml-3"
            />
          </div>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your message..."
            className="h-40 w-2/3 p-5 bg-transparent text-white border border-gray-500 rounded-md shadow-sm focus:outline-none text-base"
          ></textarea>

          <button
            type="submit"
            className="w-52  flex justify-center p-4 border border-transparent rounded-md text-sm font-medium text-white bg-[#6c42a0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </motion.form>
        <div
          className=" flex flex-col items-center mt-16 border-t p-8 border-[#525252] border-b 
        "
        >
          <h3 className="text-sm text-white">Or send me a direct email at</h3>
          <motion.a
            href="mailto:zareenfatima3762@gmail.com"
            className="block text-2xl  text-[#d8d8d8] text-center font-bold mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6 }}
          >
            📬 zareenfatima3762@gmail.com
          </motion.a>
        </div>
      </div>
    </>
  );
}

export default Contact;
