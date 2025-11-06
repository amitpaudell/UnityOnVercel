import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ServiceDetails() {
  const [service, setService] = useState(null);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const id = queryParams.get('q');

  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/construct/${id}`
      );
      const json = await response.json();

      if (response.ok) {
        setService(json);
      }
    };
    fetchService();
  }, [id]);

  return (
    <div>
      {service && (
        <div className="m-32">
          {/* Upper */}
          <div className="mt-12 w-full h-32 text-6xl font-bold ">
            <h1 className="text-center">{service.title}</h1>
          </div>

          {/* Lower */}
          <div>
            {/* Sections list
              <div></div> */}

            {/* Main Content description with image */}
            <div className="flex flex-col space-y-8">
              <img src={service.image} alt="" />
              <h3 className="font-bold text-3xl">{service.title}</h3>
              <h3 className="text-2xl text-justify">{service.description}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceDetails;
