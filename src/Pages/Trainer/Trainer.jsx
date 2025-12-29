import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import TrainerCard from "../../components/TrainerCard/TrainerCard";
import { trainers as TRAINERS } from "../../data/trainers";

export default function Trainer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [trainers] = useState(TRAINERS);

  return (
    <div className="max-w-7xl mx-auto my-8">
      <h1
        data-aos="flip-up"
        className="text-4xl font-extrabold text-center my-8 text-brand"
      >
        TRAINERS
      </h1>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4"
      >
        {trainers.map((trainer) => (
          <TrainerCard key={trainer.id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
}
