import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCaptain } from '../context/CaptainContext';
import { useUser } from '../context/UserContext';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');

  const [vehicleType, setVehicleType] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');

  const { captain, setCaptain } = useCaptain();
  const { setUser } = useUser();

  useEffect(() => {
    if (captain && captain.email) {
      navigate('/captain-home');
    }
  }, [captain]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        type: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const { token, captain: createdCaptain } = response.data;
      localStorage.setItem('token', token);
      setCaptain(createdCaptain);
      setUser(null);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
    setFirstname('');
    setLastname('');
    setVehicleType('');
    setVehicleColor('');
    setVehicleCapacity('');
    setVehiclePlate('');
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-10" src="/captain-logo.png" alt="" />

        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">{"What's your name"}</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eee] rounded px-2 py-2 outline-none w-1/2 border-none text-base placeholder:text-sm"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eee] rounded px-2 py-2 outline-none w-1/2 border-none text-base placeholder:text-sm"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">{"What's your email"}</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="bg-[#eee] mb-6 rounded px-2 py-2 outline-none border-none w-full text-base placeholder:text-sm"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eee] mb-6 rounded px-2 py-2 outline-none border-none w-full text-base placeholder:text-sm"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
          <div className="flex gap-2 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Color"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle Plate"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-2 mb-7">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle Capacity"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
            <select
              required
              className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Moto</option>
            </select>
          </div>

          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-2 py-2 outline-none border-none w-full text-lg placeholder:text-base">
            Create Account
          </button>

          <p className="text-center">
            <span>Already have an account?</span>{' '}
            <Link className="text-blue-600" to="/captain-login">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <div className="my-20 pb-4">
        <p className="text-[0.5rem] leading-tight">
          This site is protected by reCAPTCHA and the{' '}
          <span className="underline">Google Privacy Policy</span> and{' '}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
