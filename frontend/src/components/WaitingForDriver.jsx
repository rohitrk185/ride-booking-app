// eslint-disable-next-line react/prop-types
const WaitingForDriver = ({ setWaitingForDriver }) => {
  return (
    <div className="">
      <h5
        className="w-[90%] p-2 text-center absolute top-0"
        onClick={() => {
          setWaitingForDriver(false)
        }}
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-500 font-bold" />
      </h5>

      <div className="flex items-center justify-between">
        <img
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          className="h-12"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Rohit</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">KA 01 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>

      {/* <h3>Looking for a Driver</h3> */}

      {/* <div className="flex flex-col justify-between items-center gap-2">
        <img
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          className="h-20"
        />
      </div> */}
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-2 border-b">
          <i className="ri-map-pin-user-fill text-lg" />
          <div className="">
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-gray-600 text-sm -mt-1">
              Kankariya Talab, Ahmedabad
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-2 border-b">
          <i className="ri-map-pin-2-fill text-lg" />
          <div className="">
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-gray-600 text-sm -mt-1">
              Kankariya Talab, Ahmedabad
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-2">
          <i className="ri-currency-line text-lg" />
          <div className="">
            <h3 className="text-lg font-medium">&#8377; {'193.20'}</h3>
            <p className="text-gray-600 text-sm -mt-1">Cash</p>
          </div>
        </div>
      </div>

      {/* <button className="w-full bg-green-500 text-gray-50 font-semibold p-2 rounded-lg mt-5">
        Confirm
      </button> */}
    </div>
  )
}

export default WaitingForDriver
