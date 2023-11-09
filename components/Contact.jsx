import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { RiMapPinFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact({ pageInfo }) {
  const form = useRef();
  const [success, setsuccess] = useState(false);

  setTimeout(() => {
    setsuccess(false);
  }, 3000);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          if (result.status === 200) {
            setsuccess((success) => !success);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col items-center mx-auto max-w-6xl  "
    >
      <h3 className="uppercase tracking-[10px] text-gray-500 pt-16 md:pt-5 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col items-center mx-5 py-10 space-y-5 ">
        <h4 className="text-3xl md:text-4xl font-semibold text-center  text-[#3CA7CB]">
          I have got just what you need.{" "}
          <span className="underline decoration-[#3CA7CB]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-5 text-gray-500 ">
          <div className="flex items-center justify-center space-x-5 ">
            <div>
              <BsTelephoneFill className="text-[#3CA7CB] h-7 w-7 animate-pulse" />
            </div>
            <a
              href={`tel:${pageInfo.phoneNumber}`}
              className="md:text-2xl text-xl"
            >
              {pageInfo.phoneNumber}
            </a>
          </div>

          <div className="flex items-center justify-center space-x-5 ">
            <FaEnvelope className="text-[#3CA7CB] h-7 w-7 animate-pulse" />
            <a
              href={`mailto:${pageInfo.email}`}
              className="md:text-2xl text-xl"
            >
              {pageInfo.email}
            </a>
          </div>

          <div className="flex items-center justify-center space-x-5">
            <RiMapPinFill className="text-[#3CA7CB] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl text-xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          className="flex flex-col items-center justify-center mx-auto space-y-2 w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex space-x-2">
            <input
              name="user_name"
              placeholder="Name"
              required
              className="contactInput"
              type="text"
            />
            <input
              name="user_email"
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>

          <input
            name="user_phone"
            placeholder="Phone Number"
            className="contactInput"
            type="tel"
          />
          <input
            name="user_subject"
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="contactInput "
            required
          />

          {!success ? (
            <button
              type="submit"
              className=" bg-[#3CA7CB] py-3 px-10 rounded-md text-gray-700 font-bold text-lg hover:bg-transparent hover:border hover:border-[#3CA7CB] hover:text-white  w-full"
            >
              Submit
            </button>
          ) : (
            <div className="w-full px-10 py-5 text-center bg-green-500 rounded-xl ">
              <p className="text-2xl text-white ">Message Successfully sent</p>
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
