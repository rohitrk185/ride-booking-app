import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [captainData, setCaptainData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    });

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />

        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eee] rounded px-2 py-2 outline-none w-1/2 border-none text-base placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eee] rounded px-2 py-2 outline-none w-1/2 border-none text-base placeholder:text-sm"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            type="email"
            placeholder="email@example.com"
            className="bg-[#eee] mb-6 rounded px-2 py-2 outline-none border-none w-full text-base placeholder:text-sm"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            className="bg-[#eee] mb-6 rounded px-2 py-2 outline-none border-none w-full text-base placeholder:text-sm"
          />
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-2 py-2 outline-none border-none w-full text-lg placeholder:text-base">
            Login
          </button>

          <p className="text-center">
            <span>Already have an account?</span>{" "}
            <Link className="text-blue-600" to="/captain-login">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className="text-[0.5rem] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
