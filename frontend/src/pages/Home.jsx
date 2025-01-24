import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return <div>Home</div>;
};

export default Home;
