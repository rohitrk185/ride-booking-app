import { useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";
import { useEffect, useState } from "react";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { captain, setCaptain } = useCaptain();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!token || !captain || !captain.email) {
      localStorage.removeItem("token");
      return navigate("/captain-login");
    }
  }, [token, isLoading]);

  axios
    .get(`${import.meta.env.VITE_BACKEND_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const { captain: loggedInCaptain } = response.data;
        setCaptain(loggedInCaptain);
      } else {
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    })
    .catch((err) => {
      console.error(err);
      localStorage.removeItem("token");
      navigate("/captain-login");
    })
    .finally(() => {
      setIsLoading(false);
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
