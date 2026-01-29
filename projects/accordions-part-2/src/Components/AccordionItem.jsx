import { useRef } from "react";

const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, data, index } = props;
  const { header, content } = data;

  return (
    <li className="accordion-item">
      <h2
        className={active === index ? "active" : ""}
        onClick={() => handleToggle(index)}
      >
        {header} <span className="material symbols outlined">expand_more</span>
      </h2>
      <div
        ref={contentEl}
        className="accordion-content"
        style={
          active === index
            ? { height: contentEl?.current?.scrollHeight }
            : { height: 0 }
        }
      >
        {" "}
        <p>{content}</p>{" "}
      </div>
    </li>
  );
};

export default AccordionItem;
