import { useState } from "react";

export default function ContactHeader() {
  const [copySuccess, setCopySuccess] = useState("");

  const copyText = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopySuccess("Copied!");
          setTimeout(() => setCopySuccess(""), 2000); // Clear success message after 2 seconds
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          setCopySuccess("Failed to copy");
        });
    } else {
      setCopySuccess("Clipboard API not supported");
    }
  };

  return (
    <div className="mx-5 md:mx-[10vw] my-[7.5rem] md:my-[10rem]">
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
            {/* Button to copy text */}
            <button
              onClick={() => copyText("niloy.ahsan02@gmail.com")}
              className="flex gap-2 text-white items-center bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-lg border border-white border-opacity-40 cursor-pointer hover:bg-opacity-30"
            >
              niloy.ahsan02@gmail.com{" "}
              <span>
                <img src="/copyicon.svg" alt="Copy icon" />
              </span>
            </button>

            {/* Button to open resume */}
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
          action="#"
          className="flex w-full max-w-[450px] flex-col gap-6 m-auto p-4"
        >
          <h2 className="text-4xl font-bold text-center">Let’s connect</h2>
          <p className="text-center">Say Hello - I’m excited to connect.</p>

          <input
            type="name"
            placeholder="name"
            className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
          />
          <input
            type="email"
            placeholder="email"
            className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
          />
          <textarea
            rows="5"
            placeholder="Message..."
            className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
          ></textarea>
          <button className="text-white font-bold justify-center bg-[#323232] rounded-xl">
            Submit
          </button>
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
          href="https://github.com/ahsan201"
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
    </div>
  );
}
