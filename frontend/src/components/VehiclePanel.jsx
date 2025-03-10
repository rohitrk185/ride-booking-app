// eslint-disable-next-line react/prop-types
const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanelOpen }) => {
  return (
    <div>
      <h5
        className="w-[90%] p-2 text-center absolute top-0"
        onClick={() => {
          setVehiclePanelOpen(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-2xl text-gray-500 font-bold" />
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      <div
        className="flex w-full items-center justify-between p-3 mb-2 active:border-2 border-black rounded-xl"
        onClick={() => {
          setVehiclePanelOpen(false);
          setConfirmRidePanelOpen(true);
        }}
      >
        <img
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          className="h-10"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium">
            UberGo{' '}
            <span>
              <i className="ri-user-3-fill" />
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{'193.20'}</h2>
      </div>

      <div
        className="flex w-full items-center justify-between p-3 mb-2 active:border-2 border-black rounded-xl"
        onClick={() => {
          setVehiclePanelOpen(false);
          setConfirmRidePanelOpen(true);
        }}
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          className="h-12"
        />
        <div className="-ml-7 w-1/2">
          <h4 className="font-medium">
            Moto{' '}
            <span>
              <i className="ri-user-3-fill" />
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{'65'}</h2>
      </div>

      <div
        className="flex w-full items-center justify-between p-3 mb-2 active:border-2 border-black rounded-xl"
        onClick={() => {
          setVehiclePanelOpen(false);
          setConfirmRidePanelOpen(true);
        }}
      >
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          className="h-11"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium">
            Moto{' '}
            <span>
              <i className="ri-user-3-fill" />
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{'118.68'}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
