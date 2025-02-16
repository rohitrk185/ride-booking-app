import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const FinishRide = ({ setFinishRidePanel }) => {
  return (
    <div>
      <h5
        className="w-[90%] p-2 text-center absolute top-0"
        onClick={() => {
          setFinishRidePanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-500 font-bold" />
      </h5>

      <h3 className="text-2xl font-semibold mb-5">{'Finish this Ride'}</h3>

      <div className="flex items-center justify-between mt-4 p-2 border-2 border-yellow-400 rounded-xl">
        <div className="flex items-center justify-between gap-x-4">
          <img
            className="h-12 w-10 rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h2 className="text-lg font-medium">Rohit Kumar</h2>
        </div>

        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-2"></div>
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

      <div className="mt-8 w-full">
        <Link
          className="w-full bg-green-500 text-gray-50 font-semibold p-3 rounded-lg mt-8 flex justify-center text-lg"
          to={'/captain-home'}
        >
          Finish Ride
        </Link>

        <p className="mt-8 text-xs text-right">
          Click on Finish Ride if the payment is completed
        </p>
      </div>
    </div>
  );
};

export default FinishRide;
