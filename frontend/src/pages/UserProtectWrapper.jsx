import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!token) {
      localStorage.removeItem("token");
      return navigate("/login");
    }
  }, [token, isLoading, user]);

  axios
    .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const { user: loggedInUser } = response.data;
        setUser(loggedInUser);
        setIsLoading(false);
      } else {
        localStorage.removeItem("token");
        navigate("/login");
      }
    })
    .catch((err) => {
      console.error(err);
      localStorage.removeItem("token");
      navigate("/login");
    })
    .finally(() => {
      setIsLoading(false);
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
