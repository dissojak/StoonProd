const PricingPlan = ({ planDetails }) => {
    return (
      <div className="rounded-2xl shadow-lg p-3 bg-teal-500 text-gray-600 max-w-sm max-h-fit">
        <div className="relative flex flex-col items-left p-5 pt-24 bg-blue-100 rounded-xl">
          <div className="absolute top-0 right-0 flex items-center bg-teal-500 rounded-l-full py-4 pl-4 pr-2 text-3xl font-semibold text-white">
            <span>{planDetails.minPrice} - {planDetails.maxPrice}</span>
            {/* <span>{planDetails.minPrice} - {planDetails.maxPrice}</span> */}
            <small className="text-lg ml-2 text-white mt-2">DT</small>
          </div>
          <p className="text-xl font-semibold text-cyan-800">{planDetails.title}</p>
          <p className="text-left mt-3">{planDetails.description}</p>
          <ul className="flex flex-col space-y-3 mt-4">
            {planDetails.features.map((feature) => (
              <li key={feature.id} className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-5 h-5 bg-sky-400 text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
          <div className="w-full flex justify-end mt-6">
            <a
              className="w-full py-3 text-center text-white bg-teal-600 rounded-lg font-medium text-lg hover:bg-teal-700 focus:outline-none"
              href="#"
            >
              Choose plan
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingPlan;
  