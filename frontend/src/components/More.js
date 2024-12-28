import React from "react";

const More = () => {
  // Sample data for optical company details
  const companyDetails = {
    name: "ICare Vision Center",
    location: "123 Main Street, Malabe, Colombo",
    phone: "+94 76 830 8767",
    email: "icareoptical@gmail.com",
    website: "www.icare.com",

    images: [
      "https://indiancompanies.in/wp-content/uploads/2020/11/Top-Optical-Companies-Brand-Eye-wear-Industry-in-India.png",
      "https://img2023.weyesimg.com/uploads/www.ouyeedisplays.allweyes.com/images/15350151317970.jpg",
      "https://theopticalco.com.au/wp-content/uploads/2018/06/3-scaled.jpg",
      "https://media.licdn.com/dms/image/C5622AQFEdnSxW54L5w/feedshare-shrink_800/0/1679017575522?e=2147483647&v=beta&t=IjQrjtO1lXITBJO24MTPHjgFaWJicPORy8S6kGybgb8",
      "https://wwd.com/wp-content/uploads/2017/04/unspecified-1.jpg"
    ],
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-8">{companyDetails.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Main Image Section */}
        <div className="flex justify-center">
          <div className="max-w-xs w-full shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover"
              src={companyDetails.images[0]}
              alt="Optical Company Image"
            />
          </div>
        </div>

        {/* Company Details Section */}
        <div className="flex flex-col justify-center">
          <div className="text-lg space-y-4">
            <p className="text-gray-700"><strong>Location:</strong> {companyDetails.location}</p>
            <p className="text-gray-700"><strong>Phone:</strong> {companyDetails.phone}</p>
            <p className="text-gray-700"><strong>Email:</strong> {companyDetails.email}</p>
            <p className="text-gray-700"><strong>Website:</strong> <a href={`https://${companyDetails.website}`} className="text-indigo-600 hover:underline">{companyDetails.website}</a></p>
          </div>
        </div>
      </div>

      {/* Other Images Section */}
      <h2 className="text-2xl font-semibold text-center mt-12 mb-4">Other Images</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {companyDetails.images.slice(1).map((imageUrl, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-48 object-cover"
              src={imageUrl}
              alt={`Image ${index + 2}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
