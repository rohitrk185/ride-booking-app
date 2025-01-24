import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useCaptain();
  const { setUser } = useCaptain();

  useEffect(() => {
    if (captain && captain.email) {
      navigate("/captain-home");
    }
  }, [captain]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/captains/login`,
      captainData
    );

    if (response.status === 200) {
      const { token, user: loggedInUser } = response.data;
      setCaptain(loggedInUser);
      setUser(null);
      localStorage.setItem("token", token);

      navigate("/captain-home", { replace: true });
    }

    setEmail("");
    setPassword("");
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="bg-[#eee] mb-7 rounded px-2 py-2 outline-none border-none w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eee] mb-7 rounded px-2 py-2 outline-none border-none w-full text-lg placeholder:text-base"
          />
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-2 py-2 outline-none border-none w-full text-lg placeholder:text-base">
            Login
          </button>

          <p className="text-center">
            <span>Want to Join Fleet?</span>{" "}
            <Link className="text-blue-600" to="/captain-signup">
              Register as Captain
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          className="bg-[#d5622d] text-white font-semibold mb-7 rounded px-2 py-2 outline-none border-none w-full text-lg placeholder:text-base flex items-center justify-center"
          to="/login"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
