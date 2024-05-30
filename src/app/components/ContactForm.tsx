"use client";

import EmailJs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import MagicButton from "./ui/MagicButton";

export const ContactForm: React.FC = () => {
  const useRef1 = useRef<HTMLInputElement | null>(null);
  const useRef2 = useRef<HTMLInputElement | null>(null);
  const useRef3 = useRef<HTMLInputElement | null>(null);
  const useRef4 = useRef<HTMLInputElement | null>(null);
  const useRef5 = useRef<HTMLInputElement | null>(null);
  const useRef6 = useRef<HTMLTextAreaElement>(null);
  const [copied, setCopied] = useState(false);

  const email = "markangeloceloza380@gmail.com";
  const number = "09306206963";

  const handleGmailClick = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };

  const handleNumberClick = () => {
    navigator.clipboard.writeText(number).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    EmailJs.sendForm(
      "service_vhfxo88",
      "template_w3g1srl",
      e.target,
      "SxKVMTKVEpiQa0iV0"
    );

    if (useRef1.current) {
      useRef1.current.value = "";
    }
    if (useRef2.current) {
      useRef2.current.value = "";
    }
    if (useRef3.current) {
      useRef3.current.value = "";
    }
    if (useRef4.current) {
      useRef4.current.value = "";
    }
    if (useRef5.current) {
      useRef5.current.value = "";
    }
    if (useRef6.current) {
      useRef6.current.value = "";
    }
  };

  return (
    <section
      id="contacts"
      className=" py-10 w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[150vh] flex items-center"
    >
      <div className="flex h-full flex-col justify-center items-center w-full ">
        <h2 className="text-2xl font-semibold py-6">Contact me</h2>
        <form className="w-80" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 ">
              <input
                type="text"
                id="name"
                name="name"
                ref={useRef1}
                className="w-full border border-gray-300 rounded p-2"
                placeholder="First Name"
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                id="surname"
                name="surname"
                ref={useRef2}
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <input
              type="tel"
              id="phone"
              name="phone"
              ref={useRef3}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Phone"
              required
            />
          </div>

          <div className="mb-2">
            <input
              type="email"
              id="email"
              name="email"
              ref={useRef4}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-2">
            <input
              type="text"
              id="address"
              name="address"
              ref={useRef5}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Full Address"
              required
            />
          </div>

          <div className="mb-2">
            <textarea
              id="message"
              ref={useRef6}
              name="message"
              rows={4}
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Message your order"
              required
            />
          </div>
          <div className="flex relative  items-center gap-3">
            {/* <button
              type="submit"
              value="send"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-28 transition duration-200"
            >
              SEND
            </button> */}
            <MagicButton
              title="Send Message"
              icon={<FaLocationArrow />}
              position="right"
            />

            <Link
              href="https://web.facebook.com/markangelo.celozaiii"
              className="cursor-pointer"
            >
              <BsFacebook width={50} />
            </Link>
            <span onClick={handleGmailClick} className="cursor-pointer">
              <SiGmail />
            </span>
            <span onClick={handleNumberClick} className="cursor-pointer">
              <FaPhone />
            </span>
            <span className="absolute right-0 top-2 animate-bounce font-bold">
              {copied === true && "Copied"}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
