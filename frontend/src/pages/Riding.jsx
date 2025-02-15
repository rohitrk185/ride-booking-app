import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2"
        to="/home"
      >
        <i className="ri-home-5-line text-xl font-semibold" />
      </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="h-1/2 p-4">
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

        <div className="w-full mt-5">
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

        <button className="w-full bg-green-500 text-gray-50 font-semibold p-2 rounded-lg mt-5">
          Make Payment
        </button>
      </div>
    </div>
  )
}

export default Riding
