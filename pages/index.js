import React , {useState, useEffect ,useContext } from "react";

import {
 Table,
 Form,
 Services,
 Profile,
 CompleteShipment,
 GetShipment,
 StartShipment,
} from "../Components";

import { TrackingContext } from "../Conetxt/TrackingContext";

const index = () => {
  const { 
    currentUser,
    createShipment,
    getAllShipments,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  } = useContext(
    TrackingContext
  );
const [createShipmentModel, setCreateShipmentModel] = useState(false);
const [openProfile, setOpenProfile] = useState(false);
const [startModal, setStartModal] = useState(false);
const [completeModal, setCompleteModal] = useState(false);
const [getModal, setGetModal] = useState(false);
const [allShipmentsData, setAllShipmentsData] = useState(false);

useEffect(() => {
  const getCampgainsData =  getAllShipments();
   return async () => {
     const allData = await getCampgainsData;
     setAllShipmentsData(allData);
   };
}, []);

return (
  <>
  <Services 
   setOpenProfile={setOpenProfile}
   setCompleteModal={setCompleteModal}
   setGetModal={setGetModal}
   setStartModal={setStartModal}
   />
   <Table
    setCreateShipmentModel={setCreateShipmentModel}
    allShipmentsData={allShipmentsData}
    />
    <Form
     createShipmentModel={createShipmentModel}
     createShipment={createShipment}
     setCreateShipmentModel={setCreateShipmentModel}
     />
     <Profile
      openProfile={openProfile}
      setOpenProfile={setOpenProfile}
      currentUser={currentUser}
      getShipmentsCount={getShipmentsCount}
      />
       <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
        />
       <GetShipment
       getModal={getModal}
       setGetModal={setGetModal}
       getShipment={getShipment}
       />
      <StartShipment
       startModal={startModal}
       setStartModal={setStartModal}
       startShipment={startShipment}
       />
         </>
         );

};

export default index;


  
  
  
  












