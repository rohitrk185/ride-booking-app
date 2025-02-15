import { useNavigate } from "react-router-dom";
import { useCaptain } from "../context/CaptainContext";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
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
      return navigate("/captain-login");
    }
  }, [token, isLoading, captain, navigate]);

  useEffect(() => {
    if (!isLoading || !token) {
      setIsLoading(false);
      return;
    }

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
          navigate("/captain-login");
        }
      })
      .catch((err) => {
        console.error(err);
        navigate("/captain-login");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoading, navigate, setCaptain, token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;
