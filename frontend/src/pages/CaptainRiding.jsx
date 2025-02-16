import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(0)',
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: 'translateY(100%)',
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          className="w-16"
        />
        <Link
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
          to="/home"
        >
          <i className="ri-logout-box-r-line text-xl font-semibold" />
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div
        className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          className="w-[90%] p-1 text-center absolute top-0"
          onClick={() => {}}
        >
          <i className="ri-arrow-up-wide-line text-2xl text-gray-500 font-bold" />
        </h5>

        <h4 className="text-lg font-medium">4 KM away</h4>

        <button className="bg-green-500 text-gray-50 font-semibold p-3 px-14 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full"
        ref={finishRidePanelRef}
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
