import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import axios from "axios";
import { useCaptain } from "../context/CaptainContext";

const UserLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useUser();
  const { setCaptain } = useCaptain();

  useEffect(() => {
    if (user && user.email) {
      navigate("/home");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/users/login`,
      newUser
    );

    if (response.status === 200) {
      const { token, user: loggedInUser } = response.data;
      setUser(loggedInUser);
      setCaptain(null);
      localStorage.setItem("token", token);

      navigate("/home", { replace: true });
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="/images/logo.png" alt="" />

        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">{"What's your email"}</h3>
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
            <span>New here?</span>{" "}
            <Link className="text-blue-600" to="/signup">
              Create new Account
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          className="bg-[#10b461] text-white font-semibold mb-7 rounded px-2 py-2 outline-none border-none w-full text-lg placeholder:text-base flex items-center justify-center"
          to="/captain-login"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
