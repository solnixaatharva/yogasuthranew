import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import ClassCard from "../../components/ClassCard/ClassCard";
import { classes as CLASSES } from "../../data/classes";

export default function Class() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [classes] = useState(CLASSES);

  return (
    <div className="max-w-7xl mx-auto my-8">
      <h1
        data-aos="flip-up"
        className="text-4xl font-extrabold text-center my-8 text-brand"
      >
        CLASSES
      </h1>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4"
      >
        {classes.map((cls) => (
          <ClassCard key={cls.id} cls={cls} />
        ))}
      </div>
    </div>
  );
}
