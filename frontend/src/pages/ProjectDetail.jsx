import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ProjectDetail() {
  const [service, setService] = useState(null);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const id = queryParams.get('q');

  useEffect(() => {
    const fetchService = async () => {
      const response = await fetch(`http://localhost:4000/api/project/${id}`);
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
        <div className="">
          {/* Upper */}
          <div className="mt-12 w-full h-32  ">
            <h1 className="text-left md:text-center text-6xl font-bold">
              {service.title}
            </h1>
          </div>

          {/* Lower */}
          <div className="m-16 flex flex-col space-y-24 justify-center items-center md:items-start md:flex-row md:justify-around">
            <div className="w-full md:w-[25%] shadow-2xl rounded-3xl flex flex-col space-y-7 px-6 py-8">
              <h1 className="font-sans font-bold  text-2xl">Insights</h1>

              <div>
                <p className="text-[18px] text-slate-700 font-semibold">
                  Location:{' '}
                </p>
                <p className="text-[24px] ">{service.location}</p>
              </div>

              <div>
                <p className="text-[18px] text-slate-700 font-semibold">
                  Construction Type{' '}
                </p>
                <p className="text-[24px]">{service.typeConstruct}</p>
              </div>

              <div>
                <p className="text-[18px] text-slate-700 font-semibold">
                  Sector:
                </p>
                <p className="text-[24px]">{service.sector}</p>
              </div>
            </div>

            {/* Main Content description with image */}
            <div className="flex md:w-[50%] flex-col space-y-8">
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

export default ProjectDetail;
