import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ConfirmRidePopup'

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(0)',
        })
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: 'translateY(100%)',
        })
      }
    },
    [ridePopupPanel]
  )

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: 'translateY(0)',
        })
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: 'translateY(100%)',
        })
      }
    },
    [confirmRidePopupPanel]
  )

  return (
    <div className="h-screen">
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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      <div
        className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full"
        ref={ridePopupPanelRef}
      >
        <RidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>

      <div
        className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white translate-y-full h-screen"
        ref={confirmRidePopupPanelRef}
      >
        <ConfirmRidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
    </div>
  )
}

export default CaptainHome
