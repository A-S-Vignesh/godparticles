import React from 'react'

function ClientReview() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-50 p-4 m-4">
      <h1 className="text-4xl p-4 m-4">Words from our clients</h1>
      <h2 className="text-xl">There are 500+ happy customers</h2>
      <div className="flex w-3/6 bg-white justify-center items-center rounded-xl shadow-xl mt-4 hover:scale-105 transform transition duration-300 ease-in-out">
        <div className=" bg-blue-400 rounded-xl p-8">
          <p className="">
            We have successfully delivered over 200 projects across various
            industries, ensuring high-quality results and customer satisfaction.
            Our team is committed to excellence, and we are proud of the impact
            we've made for our clients.
          </p>
        </div>
        <div>
          <h1 className="text-4xl">94%</h1>
          <p className="ml-4 mr-1">
            Customer satisfaction rate based on feedback and project outcomes,
            showcasing our dedication to delivering results that exceed
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ClientReview