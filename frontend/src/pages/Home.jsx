import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmRidePanelOpen, setConfirmRidePanelOpen] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicelPanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
          // opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
          // opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehicelPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicelPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanelOpen) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanelOpen]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src="/images/logo.png" />

      <div
        className="h-screen w-screen"
        onClick={() => {
          setVehiclePanelOpen(false);
          setPanelOpen(false);
        }}
      >
        {/* Image for Temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className=" absolute h-screen w-full top-0 flex flex-col justify-end">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            className="absolute top-6 right-6 text-2xl opacity-0"
            onClick={() => {
              setPanelOpen(false);
            }}
            ref={panelCloseRef}
          >
            <i className="ri-arrow-down-wide-line" />
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-8 rounded-full bg-gray-800"></div>
            <input
              type="text"
              value={pickup}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              placeholder="Add a pick-up location"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
            />
            <input
              type="text"
              value={destination}
              onClick={() => {
                setPanelOpen(true);
              }}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              placeholder="Enter your Destination"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
            />
          </form>
        </div>

        <div className="h-0 bg-white" ref={panelRef}>
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-10 pt-12 bg-white"
        ref={vehicelPanelRef}
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
        />
      </div>

      <div
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
        ref={confirmRidePanelRef}
      >
        <ConfirmRide
          setConfirmRidePanelOpen={setConfirmRidePanelOpen}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
        ref={vehicleFoundRef}
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div
        className="fixed w-full z-10 bottom-0 translate-y-full px-3 py-6 pt-12 bg-white"
        ref={waitingForDriverRef}
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
