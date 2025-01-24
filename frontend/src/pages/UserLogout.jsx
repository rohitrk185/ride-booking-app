import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = async () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/users/logout`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 200) {
    localStorage.removeItem("token");
    navigate("/");
  }

  return <div>UserLogout</div>;
};

export default UserLogout;
