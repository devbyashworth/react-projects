import React, { useState } from "react";
import { data } from "./data";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleActive = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <div className="container">
      <h1>Accordion 01</h1>
      <ul className="accordion">
        {data.map((data) => (
          <AccordionItem
            key={data.id}
            data={data}
            active={active}
            handleActive={handleActive}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
