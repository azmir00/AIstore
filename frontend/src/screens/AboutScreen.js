import React from "react";

const AboutScreen = () => {
  return (
    <div>
      <div className="text-center main-section">
        <h1 className="font-weight-bolder">About Us</h1>
        <h4 className="text-secondary mt-5">
          Navigating a store can be difficult, but AI Store created the StoreBot
          <br />
          to help customers find their way around the store and get the items
          they need.
        </h4>
      </div>

      <div className="container p-5">
        <h4 className="text-center pt-5">Address</h4>
        <h5 className="text-secondary pt-5 text-center">
          Tingkat 11, <br />
          Suria KLCC, Kuala Lumpur City Centre, <br />
          50088 Kuala Lumpur, <br />
          Wilayah Persekutuan Kuala Lumpur.
        </h5>
      </div>
    </div>
  );
};

export default AboutScreen;
