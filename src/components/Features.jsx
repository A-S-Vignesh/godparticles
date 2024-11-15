import React from "react";
import FeaturesBox from "./FeaturesBox";

function Features() {
  const featuresdata = [
    {
      id: 1,
      image: "img",
      title: "An unlike view of the customer",
    },
    {
      id: 2,
      image: "img",
      title: "Industry leading production",
    },
    {
      id: 3,
      image: "img",
      title: "Collaboration access of data",
    },
  ];

  return (
    <div className="m-4 bg-slate-50 rounded-lg">
      <h1 className="text-4xl">Our Exciting Features</h1>
      <div className="flex p-4 ml-40 mr-40">
        {featuresdata?.map((data) => (
          <FeaturesBox
            key={data?.id}
            image={data?.image}
            title={data?.title}
            details={data?.details}
          />
        ))}
      </div>
    </div>
  );
}

export default Features;
