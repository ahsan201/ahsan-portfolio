import { motion } from "framer-motion";
import { useState } from "react";
// Firebase
import { db } from "../../../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function ContactHeader() {
  const [copySuccess, setCopySuccess] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [statusColor, setStatusColor] = useState("#323232");
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validate email format
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Input validations
    if (!name.trim() || !email.trim()) {
      setFormStatus("Please provide both name and email.");
      setStatusColor("red");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setFormStatus("Please enter a valid email address.");
      setStatusColor("red");
      setIsLoading(false);
      return;
    }

    if (!message.trim()) {
      setFormStatus("Please provide a message.");
      setStatusColor("red");
      setIsLoading(false);
      return;
    }

    try {
      // Add contact info to Firestore
      await addDoc(collection(db, "contact-me-infos"), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        date: serverTimestamp(),
      });

      setFormStatus("Thank you for reaching out!");
      setStatusColor("green");

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting the contact form: ", error);
      setFormStatus("An error occurred. Please try again later.");
      setStatusColor("red");
    } finally {
      setIsLoading(false);
    }
  };

  // Clipboard copy handler
  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Copied to clipboard!");
      setTimeout(() => setCopySuccess(""), 2000); // Clear success message
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopySuccess("Failed to copy");
      setTimeout(() => setCopySuccess(""), 2000);
    }
  };

  return (
    <motion.div
      className="mx-5 md:mx-[10vw] my-[7.5rem] md:my-[10rem]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-6xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-600 mb-6">
        This is the place where real magic begins.
      </p>
      <div className="flex flex-col lg:flex-row gap-8 items-center card p-2">
        <div className="relative">
          {/* Contact image */}
          <img
            className="min-w-full h-full max-h-[800px] object-cover overflow-hidden rounded-[2rem]"
            src="/contact-me-header.jpg"
            alt="Contact me header image"
          />
          <div className="absolute inset-0 m-auto top-[40%] flex flex-col items-center gap-4">
            {/* Copy email button */}
            <button
              onClick={() => copyText("niloy.ahsan02@gmail.com")}
              className="flex gap-2 text-white items-center bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-lg border border-white border-opacity-40 cursor-pointer hover:bg-opacity-30"
            >
              {copySuccess || "niloy.ahsan02@gmail.com"}
              <span>
                <img src="/copyicon.svg" alt="Copy icon" />
              </span>
            </button>

            {/* Open resume button */}
            <a
              href="/Ahsan-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex gap-2 text-white items-center bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-lg border border-white border-opacity-40 cursor-pointer hover:bg-opacity-30">
                My Resume{" "}
                <span>
                  <img
                    src="/open-in-new-window.svg"
                    alt="Open in new window icon"
                  />
                </span>
              </button>
            </a>

            {/* Copy success message */}
            <p className="text-white text-sm mt-2 text-center">{copySuccess}</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[450px] flex-col gap-6 m-auto p-4"
        >
          <div>
            <h2 className="text-4xl mb-2 font-bold text-center">
              Let’s connect
            </h2>
            <p className="text-center">Say Hello - I’m excited to connect.</p>
          </div>

          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            rows="5"
            placeholder="Message..."
            className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            className={`text-white font-bold justify-center bg-[#323232] rounded-xl ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          <p
            className="text-center"
            style={{
              color: statusColor,
            }}
          >
            {formStatus}
          </p>
        </form>
      </div>
      <h2 className="text-4xl font-bold mt-16 mb-6">My Socials</h2>
      <div className="flex flex-bottom items-end gap-8">
        <a
          href="https://github.com/ahsan201"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100px]"
        >
          <img
            src="/github-icon.svg"
            alt="github account link"
            className="w-full"
          />
          <p className="text-center mt-1">github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/ahsan-habib-niloy-74429929a/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100px]"
        >
          <img
            src="/linkedin-icon.svg"
            alt="linkedin account link"
            className="w-full"
          />
          <p className="text-center mt-1">linkedin</p>
        </a>
        <a
          href="https://x.com/ahsan_habib_1"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100px]"
        >
          <img
            src="/twitter-icon.svg"
            alt="twitter account link"
            className="w-full"
          />
          <p className="text-center mt-1">twitter</p>
        </a>
        <a
          href="https://www.instagram.com/ahsaan.official/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[100px]"
        >
          <img
            src="/instagram-icon.svg"
            alt="instagram account link"
            className="w-full"
          />
          <p className="text-center mt-1">instagram</p>
        </a>
      </div>
    </motion.div>
  );
}
