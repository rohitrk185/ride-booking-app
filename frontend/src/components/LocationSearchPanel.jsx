// eslint-disable-next-line react/prop-types
const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => {
  const locations = [
    '91A, Near Malleshwaram, ABCDXYZ, Bengaluru',
    '1A, Near Malleshwaram, XYZABCD, Bengaluru',
    '72A, Near Malleshwaram, AYZBCDX, Bengaluru',
    '38C, Near Malleshwaram, ABZCDXY, Bengaluru',
    '4D, Near Malleshwaram, DXYZABC, Bengaluru',
  ];

  return (
    <div className="flex flex-col gap-3.5">
      {/* this is just sample data */}

      {locations.map((location) => (
        <div
          className="flex items-center justify-start gap-x-3 border-2 active:border-black border-gray-100 p-2 rounded-xl"
          key={location}
          onClick={() => {
            setPanelOpen(false);
            setVehiclePanelOpen(true);
          }}
        >
          <h2 className="bg-[#eee] rounded-full w-10 h-8   flex items-center justify-center">
            <i className="ri-map-pin-fill" />
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
