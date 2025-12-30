// ...existing code...
import { useEffect, useState } from "react";
import ServiceCard from "../serviceCrad/ServiceCard";
import Aos from "aos";
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [servicesData, setServiceData] = useState([]);

  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServiceData(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div data-aos="fade-up" className="max-w-7xl mx-auto px-4">
      <div className="my-10 text-center">
        <div className="flex justify-center">
          <img
            src="/images/newyogasuthralogo.jpeg"
            alt="decor"
            className="w-40 h-auto"
          />
        </div>

        <h1 className="text-4xl font-bold">OUR SERVICES</h1>
        <p className="text-lg text-gray-500 mt-5">
          Talk to people you know who attend yoga classes regularly. They’ll probably have a <br />
          recommendation for a good instructor. If you don’t know anyone- call a local yoga studio and talk to the owner.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {servicesData.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
// ...existing code...