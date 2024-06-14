import { useState } from "react";
import { Str1 } from "../Components/index";
export default ({ startModal, setStartModal, startShipment }) => {
  const [getProduct, setGetProduct] = useState({
    reveiver: "",
    index: "",
});
 
const startshipping = () => {
  startShipment(getProduct);
};
return startModal ? (
  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div
    className="fixed inset-0 w-full h-full bg-black opacity-40"
    onClick={() => setStartModal(false)}
    ></div>
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex justify-end">
          <button
          className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
          onClick={() => setStartModal(false)}
          >
            <Str1 />
            </button>
          </div>
          <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
            <h4 className="text-lg font-semibold text-gray-800">Start Shipment</h4>
           
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative mt-3">
                <input
                type="text"
                placeholder="Receiver"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setGetProduct({ ...getProduct,
                   receiver: e.target.value })}
                />
              </div>
              <div className="relative mt-3">
                <input
                type="number"
                placeholder="Enter Shipment ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={(e) => setGetProduct({ ...getProduct, 
                  index: e.target.value })}
                />
              </div>
              <button
              onClick={() => startshipping()}
              className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded-md"
              >Get details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};