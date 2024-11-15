import React from "react";
import FeaturesBox from "./FeaturesBox";

function Service() {
const featuresdata = [
  {
    id: 1,
    image: "img1",
    title: "An unlike view of the customer",
    details:
      "A unique perspective of customer behavior that helps in better understanding of user needs.",
  },
  {
    id: 2,
    image: "img2",
    title: "Artificial Intelligence",
    details:
      "AI technology enables machines to simulate human intelligence for complex tasks.",
  },
  {
    id: 3,
    image: "img3",
    title: "Machine Learning",
    details:
      "Machine learning algorithms allow systems to learn and improve from experience without explicit programming.",
  },
  {
    id: 4,
    image: "img4",
    title: "Data Security",
    details:
      "Implementing data security measures ensures protection from unauthorized access and data breaches.",
  },
  {
    id: 5,
    image: "img5",
    title: "Cloud Computing",
    details:
      "Cloud computing allows for on-demand access to shared computing resources over the internet.",
  },
  {
    id: 6,
    image: "img6",
    title: "Blockchain Technology",
    details:
      "Blockchain ensures secure, transparent, and decentralized record-keeping of transactions.",
  },
];


  return (
    <div className="m-4 bg-slate-50 rounded-lg">
          <h1 className="text-4xl p-4 m-4">Explore our data service</h1>
          <h2 className="text-xl">we provide best service to all the customer</h2>
      <div className="flex flex-wrap p-4 ml-40 mr-40">
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

export default Service;
