import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserDataContext);

  return <div>Home</div>;
};

export default Home;
