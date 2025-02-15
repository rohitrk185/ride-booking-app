import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext";

// eslint-disable-next-line react/prop-types
const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { user, setUser } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!token || !user || !user.email) {
      return navigate("/login");
    }
  }, [token, isLoading, user]);

  useEffect(() => {
    if (!isLoading || !token) {
      setIsLoading(false);
      return;
    }

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
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error(err);
        navigate("/login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectWrapper;
