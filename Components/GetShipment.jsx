import { useState } from "react";

export default ({ getModal, setGetModal, getShipment }) => {
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };
  console.log(singleShipmentData);

  const convertTime = (time,n) => {
    try {
      // Ensure time is a number
      if (typeof time !== "number" || isNaN(time)) {
        throw new Error("Invalid timestamp");
      }
  
      // Convert Unix timestamp to milliseconds and create a Date object
      const newTime = new Date(time * n);
  
      // Check if the Date object is valid
      if (isNaN(newTime.getTime())) {
        throw new Error("Invalid date");
      }
  
      // Format the date
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Use 24-hour format
      }).format(newTime);
  
      return formattedDate;
    } catch (error) {
      console.error("Error converting time:", error.message);
      return null;
    }
  };

  return getModal ? (
    <div  className="fixed inset-0 overflow-y-auto">
    <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setGetModal(false)}></div>
    <div className="flex items-center min-h-screen px-4 py-8">
      <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
        <div className="flex justify-end">
          <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100" onClick={() => setGetModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
          <h4 className="text-lg font-semibold text-gray-800">
            Shipment Details</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="relative mt-3">
              <input
                type="number"
                placeholder="Enter Shipment ID"
                className="w-full px-4 py-2  text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-md"
                onChange={(e) => setIndex(e.target.value)}
              />
            </div>
            <button onClick={() => getShipmentData()} className="w-full px-4 py-2 mt-3 font-medium test-sm text-center text-white bg-indigo-600 hover:bg-indigo-400 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
              Get Shipment
            </button>
          </form>
          {singleShipmentData ==  undefined ? (
            ""
          ) : (
            <div className="text-left">
              <p>Sender: {singleShipmentData.sender.slice(0, 25)}...</p>
              <p>Receiver: {singleShipmentData.receiver.slice(0, 25)}...</p>
              <p>PickupTime: {convertTime(singleShipmentData.pickupTime,1)}</p>
              <p>DeliveryTime: {convertTime(singleShipmentData.deliveryTime,1000)}</p>
              <p>Distance: {singleShipmentData.distance}</p>
              <p>Price: {singleShipmentData.price}</p>
              <p>Status: {singleShipmentData.status}</p>
              <p>Paid: {singleShipmentData.isPaid ? "Complete" : "Not Complete"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  ) : null;
};

