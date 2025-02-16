import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CaptainLogout = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/captains/logout`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 200) {
    localStorage.removeItem('token');
    navigate('/');
  }

  return <div>CaptainLogout</div>;
};

export default CaptainLogout;
