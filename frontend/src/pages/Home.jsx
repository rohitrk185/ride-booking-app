import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="overflow-hidden bg-transparent">
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex justify-between flex-col overflow-hidden">
        <img
          className="w-14 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <div className="bg-white py-4 pb-7 px-4">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5"
            to="/login"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
