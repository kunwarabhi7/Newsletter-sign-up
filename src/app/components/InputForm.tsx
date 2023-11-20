"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const InputForm = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const router = useRouter();
  const handleForm = (e: any) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    router.push("/success");
    // You can add additional logic for form submission here
    // For example, redirect to another page using router.push

    // router.push('/thank-you'); // Uncomment and customize as needed
  };

  return (
    <form onSubmit={handleFormSubmit} className="ml-2 ">
      <div className="flex  justify-start space-x-40 mt-3 mb-1 xl:m-4">
        <label className="font-bold xl:ml-48 xl:text-2xl xl:mt-12">
          Email address
        </label>
        {!isValidEmail && (
          <p className="text-red-500 text-xs">
            Please enter a valid email address.
          </p>
        )}
      </div>
      <input
        className={`border xl:mt-4 xl:h-12 border-gray-400 w-[26rem] h-9 pl-3 rounded-md ${
          !isValidEmail ? "border-red-500" : ""
        }`}
        type="email"
        placeholder="email@company.com"
        value={email}
        onChange={handleForm}
      />{" "}
      <br />{" "}
      <button
        disabled={isValidEmail}
        type="submit"
        className="xl:mt-6 xl:h-12 hover:bg-orange-600 disabled:cursor-none bg-gray-800 text-white w-[26rem]  my-4 rounded-md px-3 py-2"
      >
        Subsribe to monthly newsletter
      </button>
    </form>
  );
};

export default InputForm;
