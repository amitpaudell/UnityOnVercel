import React from 'react';
import CountUp from 'react-countup';

import Latium from '../images/partners/latium.png';
import Eddy from '../images/partners/eddy.png';
import Copper from '../images/partners/coppertree.png';
import Drone from '../images/partners/dronedeploy.png';
import Hammer from '../images/partners/hammertech.png';
import Vita from '../images/partners/vita.png';

import { FiExternalLink } from 'react-icons/fi';
function AboutUs() {
  return (
    <div className="">
      {/* Heading Overview */}

      <div className="m-12 md:m-24 flex flex-col space-y-12">
        <div>
          <h1 className="text-[#00502f] text-3xl font-bold md:max-w-[80%] text-center md:text-left md:text-5xl">
            Driven by Ownership. Engineered for Possibility. Defined by Impact.
          </h1>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-medium">
            PCL builds projects that shape communities—from small renovations to
            complex, billion-dollar developments. From modular construction to
            advanced digital technologies to cutting-edge sustainability, we
            bring the right tools, talent, and mindset to every challenge.
          </p>

          <p className="text-xl font-medium">
            We redefine full-service and bring expertise across all project
            types, at all scales and under all procurement models. As innovative
            solution providers and construction specialists, we leverage our
            expertise to customize the right approach for your project,
            maximizing value for the best price.
          </p>

          <p className="text-xl font-medium">
            Our project experience spans every scale, from $20,000 upgrades to
            $3.5-billion developments, backed by proven expertise across all
            delivery models. Flexible, focused and innovative: we're focused on
            achieving your project vision and business goals.
          </p>
        </div>
      </div>

      {/* Large Number Section */}

      <div className=" bg-[#36383d] mt-24 p-12">
        <div className="ml-24 text-white text-3xl font-extralight md:max-w-[80%] text-center md:text-left md:text-5xl mb-12">
          Unity Construction by numbers
        </div>
        <div className="flex flex-wrap  items-center gap-x-36  gap-y-18 mt-24 ml-24  ">
          {/* Each Number with text block */}
          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">
              <CountUp end={100} duration={3} />%
            </h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Employee Owned
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">
              <CountUp start={0} end={5.2} decimals={1} duration={3} />
              K+
            </h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Salaried Employees
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">
              <CountUp end={20} duration={3} />+
            </h3>
            <p className="ml-6 text-white font-extralight text-xl">Offices</p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">
              {' '}
              <CountUp start={0} end={8.3} decimals={1} duration={3} />
              B+
            </h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Annual Construction Volume in 2024
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">
              <CountUp end={1000} duration={3} />+
            </h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Projects Underway
            </p>
          </div>

          <div className="p-2">
            <h3 className="text-7xl  text-[#fec525] font-bold">
              {' '}
              <CountUp start={0} end={6.7} decimals={1} duration={3} />M
            </h3>
            <p className="ml-6 text-white font-extralight text-xl">
              Donated to Community Organizations in 2024
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Partners */}
      <div>
        <div className="m-8 md:m-32 mb-24 flex flex-col space-y-12 items-center md:items-start md:flex-row  ">
          {/* Left */}
          <div className="w-full md:max-w-[40%]">
            <h1 className="text-4xl font-bold max-w-md text-center md:text-left md:text-5xl">
              Our Strategic Partners
            </h1>
          </div>

          {/* Right */}

          <div className="w-full md:max-w-[60%]">
            <p className="text-xl">
              {' '}
              At PCL our technology seamlessly integrates with a diverse range
              of product vendors, enabling a streamlined cloud-based experience
              across various platforms.
            </p>
          </div>
        </div>

        {/* Partners Section */}

        <div className="m-8 md:m-32 flex flex-wrap gap-18">
          {/* Each Block */}
          <div className="h-62 w-92 ">
            <img src={Latium} alt="" className="w-full" />
            <div>
              <a href="https://www.latiumtech.com/ " target="_blank">
                <button className="hover:bg-[#00502f] cursor-pointer text-center hover:text-white transition delay-100 duration-300 border-2 w-full py-4 uppercase font-medium">
                  Find Out More
                  <FiExternalLink
                    className="
                
                -mt-1 ml-4 text-xl inline-block"
                  />
                </button>
              </a>
            </div>
          </div>

          <div className="h-62 w-92 ">
            <img src={Eddy} alt="" className="w-full" />
            <div>
              <a href="https://eddysolutions.com/" target="_blank">
                <button className="hover:bg-[#00502f] cursor-pointer text-center hover:text-white transition delay-100 duration-300 border-2 w-full py-4 uppercase font-medium">
                  Find Out More
                  <FiExternalLink
                    className="
                
                -mt-1 ml-4 text-xl inline-block"
                  />
                </button>
              </a>
            </div>
          </div>

          <div className="h-62 w-92 ">
            <img src={Copper} alt="" className="w-full" />
            <div>
              <a href="https://coppertreeanalytics.com/" target="_blank">
                <button className="hover:bg-[#00502f] cursor-pointer text-center hover:text-white transition delay-100 duration-300 border-2 w-full py-4 uppercase font-medium">
                  Find Out More
                  <FiExternalLink
                    className="
                
                -mt-1 ml-4 text-xl inline-block"
                  />
                </button>
              </a>
            </div>
          </div>

          <div className="h-62 w-92 ">
            <img src={Drone} alt="" className="w-full" />
            <div>
              <a href="https://www.dronedeploy.com/ " target="_blank">
                <button className="hover:bg-[#00502f] cursor-pointer text-center hover:text-white transition delay-100 duration-300 border-2 w-full py-4 uppercase font-medium">
                  Find Out More
                  <FiExternalLink
                    className="
                
                -mt-1 ml-4 text-xl inline-block"
                  />
                </button>
              </a>
            </div>
          </div>

          <div className="h-62 w-92 ">
            <img src={Hammer} alt="" className="w-full" />
            <div>
              <a href="https://www.hammertech.com/en-us/ " target="_blank">
                <button className="hover:bg-[#00502f] cursor-pointer text-center hover:text-white transition delay-100 duration-300 border-2 w-full py-4 uppercase font-medium">
                  Find Out More
                  <FiExternalLink
                    className="
                
                -mt-1 ml-4 text-xl inline-block"
                  />
                </button>
              </a>
            </div>
          </div>

          <div className="h-62 w-92 ">
            <img src={Vita} alt="" className="w-full" />
            <div>
              <a href="https://www.vitaindustrial.com/ " target="_blank">
                <button className="hover:bg-[#00502f] cursor-pointer text-center hover:text-white transition delay-100 duration-300 border-2 w-full py-4 uppercase font-medium">
                  Find Out More
                  <FiExternalLink
                    className="
                
                -mt-1 ml-4 text-xl inline-block"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
