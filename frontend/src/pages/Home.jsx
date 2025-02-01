import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="h-screen relative">
      <img className="w-16 absolute left-5 top-5" src="/images/logo.png" />

      <div className="h-screen w-screen">
        {/* Image for Temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="bg-white absolute top-0 w-full p-5">
        <h4>Find a trip</h4>
        <form>
          <input type="text" placeholder="Add a pick-up location" />
          <input type="text" placeholder="Enter your Destination" />
        </form>
      </div>
    </div>
  );
};

export default Home;
