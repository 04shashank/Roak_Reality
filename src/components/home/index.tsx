import React from "react";

const dummyData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1707988179933-20657423a28b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1707988179933-20657423a28b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
  },
  {
    img: "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
  },
];

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <h2>home</h2>
      <div className=" grid grid-cols-3 gap-4 ">
        {dummyData.map((property, index) => {
          return (
            <div
              key={index}
              className="h-[350px] border border-gray-400 bg-black rounded-lg overflow-hidden"
            >
              <img
                src={property.img}
                alt=""
                className=" object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
