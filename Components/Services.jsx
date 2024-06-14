import React from "react";
import images from "../Images/index";
import Image from "next/image";



export default ( {
 setOpenProfile,
 setCompleteModal,
 setGetModal,
 setStartModal,
}) => {
  const team = [

    {
      avatar: images.compShipment,

    },
    {
      avatar: images.getShipment,

    },
    {
      avatar: images.startShipment,

    },
    {
      avatar: images.userProfile,

    },
    {
      avatar: images.shipCount,

    },
    {
      avatar: images.send,
    },
  ];

const openModelBox =(test)=>{
        if(test===1){
          setCompleteModal(true);
        }else if(test===2){
          setGetModal(true);
        }else if(test===3){
          setStartModal(true);
        }else if(test===4){
          setOpenProfile(true);
        }
      };

  return (
    <section className="py-10 pb-14 ">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((item,i)=>(
              <li key={i}>
                <div 
                onClick={()=>openModelBox(i+1)}
                className="w-full h-60 sm:h-52 md:h-56">
                  <Image
                  src={item.avatar}
                  className="w-full h- full object-cover object-center rounded-xl"
                  alt="team member"                
                  />
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

