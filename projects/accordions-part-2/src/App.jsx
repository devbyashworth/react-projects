import { useState } from "react";
import { data } from "./Components/Data";
import AccordionItem from "./Components/AccordionItem";

const App = () => {
  const [active, setActive] = useState(null);
  const handleToggle = (index) => setActive(active === index ? null : index);
  return (
    <ul className="accordion">
      {data.map((data, index) => (
        <AccordionItem
          key={index}
          index={index}
          active={active}
          data={data}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default App;
