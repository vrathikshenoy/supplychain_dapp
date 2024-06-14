import React from "react";

export default ({ setCreateShipmentModel, allShipmentsData }) => {
  const convertTime = (time, n) => {
    const newTime = new Date(time * n);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return dateTime;
  };

  console.log(allShipmentsData);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h1 className="text-2xl font-semibold">Create Tracking</h1>
          <p className="text-gray-500 mt-2">
            Create a new tracking for your shipment
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => setCreateShipmentModel(true)}
            className="inline-block px-4 py-2 text-white duration-150 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full"
          >
            Add Tracking
          </button>
        </div>
      </div>

      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="px-6 py-4">Sender</th>
              <th className="px-6 py-4">Receiver</th>
              <th className="px-6 py-4">Pickup Time</th>
              <th className="px-6 py-4">Distance</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Delivery Time</th>
              <th className="px-6 py-4">Paid</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {allShipmentsData && allShipmentsData.length > 0 ? (
              allShipmentsData.map((shipment, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.sender.slice(0, 15)}..
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.receiver.slice(0, 15)}..
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {convertTime(shipment.pickupTime,1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.distance} km
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.price} ETH
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  {shipment.status === 0
                      ? 0
                      : shipment.status === 1
                      ? 0
                      : convertTime(shipment.deliveryTime,1000)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.isPaid ? "Completed" : "Not Completed"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.status === 0
                      ? "Pending"
                      : shipment.status === 1
                      ? "In Transit"
                      : "Delivered"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center">
                  No shipments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

