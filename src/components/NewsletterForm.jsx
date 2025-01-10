import { useState } from "react";
import { db } from "../../firebase/firebase"; // Import Firebase Firestore instance
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

export default function NewsletterForm() {
  // State variables to manage form inputs and feedback messages
  const [name, setName] = useState(""); // Stores the name input value
  const [email, setEmail] = useState(""); // Stores the email input value
  const [formStatus, setFormStatus] = useState(""); // Stores the status message after form submission
  const [statusColor, setStatusColor] = useState("#323232"); // Stores the color of the status message
  const [isLoading, setIsLoading] = useState(false); // loading submit

  // Utility function to validate email format
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Prevents the default form submission behavior

    // Check if name and email are not empty
    if (!name.trim() || !email.trim()) {
      setFormStatus("Please provide both \nname and email.");
      setStatusColor("red");
      setIsLoading(false);
      return;
    }

    // Validate the email format
    if (!validateEmail(email)) {
      setFormStatus("Please enter a \nvalid email address.");
      setStatusColor("red");
      setIsLoading(false);
      return;
    }

    try {
      // Check if the email already exists in the Firestore collection
      const q = query(
        collection(db, "newsletter-emails"),
        where("email", "==", email.trim())
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setFormStatus("This email is \nalready subscribed.");
        setStatusColor("orange");
        return;
      }

      // Add a new document to the "newsletter-emails" collection
      await addDoc(collection(db, "newsletter-emails"), {
        name: name.trim(), // Save the name
        email: email.trim(), // Save the email
        date: serverTimestamp(), // Save the current timestamp
      });

      // Update the form status to success
      setFormStatus("Thank you for subscribing \nto the newsletter.");
      setStatusColor("green");

      // Clear the form fields
      setName("");
      setEmail("");
    } catch (e) {
      // Handle any errors during form submission
      console.error("Error submitting the newsletter form: ", e);
      setFormStatus("An error occurred. \nPlease try again later.");
      setStatusColor("red");
    } finally {
      setIsLoading(false);
    }
  };

  // Render the form
  return (
    <div>
      <form
        onSubmit={handleSubmit} // Bind the handleSubmit function to the form submission
        className="flex flex-col gap-4 justify-center min-w-[250px] md:min-w-[300px]" // Tailwind CSS classes for styling
      >
        {/* Logo at the top of the form */}
        <img
          src="/nav-main-icon.svg"
          alt="nav icon"
          className="max-w-[70px] mx-auto"
        />
        {/* Form title */}
        <h3 className="text-6 font-semibold text-center">
          Signup for newsletter
        </h3>
        {/* Subtitle */}
        <p className="text-[14px] sm:text-4 text-[#929292] text-center">
          Get notified when I post a new blog.
        </p>
        {/* Name input field */}
        <input
          type="text"
          placeholder="name"
          aria-label="Name" // Accessibility label
          aria-describedby="form-status" // Link to the status message
          className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update the name state on input change
        />
        {/* Email input field */}
        <input
          type="email"
          placeholder="email"
          aria-label="Email" // Accessibility label
          aria-describedby="form-status" // Link to the status message
          className="p-4 bg-[rgba(219, 219, 219, 0.28)] border border-[#7E7E7E] rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
        />
        {/* Submit button */}
        <button className="text-white font-bold justify-center bg-[#323232] rounded-xl px-[20px] py-[10px]">
          Submit
        </button>
        {/* Status message */}
        <p id="form-status" style={{ color: statusColor }}>
          {formStatus} {/* Display the current form status */}
        </p>
      </form>
    </div>
  );
}
