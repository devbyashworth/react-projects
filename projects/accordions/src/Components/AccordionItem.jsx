import React, { useRef } from "react";
// import PropTypes from "prop-types";

const AccordionItem = ({ data, active, handleActive }) => {
  const content = useRef(null);

  return (
    <li className="accordion-item">
      <div>
        <h2 onClick={() => handleActive(data.id)} className="accordion-title">
          {data.title} <span>{data.id === active ? "-" : "+"}</span>
        </h2>
      </div>
      <div
        ref={content}
        className={`accordion-content ${active === data.id ? "active" : ""}`}
        style={
          active === data.id
            ? { height: content?.current?.scrollHeight }
            : { height: "0px" }
        }
      >
        <p>{data.paragraph}</p>
      </div>
    </li>
  );
};

// AccordionItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   active: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   handleActive: PropTypes.func,
// };

export default AccordionItem;
