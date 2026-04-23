import React, { useLayoutEffect, useRef, useState } from "react";

const setCaret = (el) => {
  if (!el || !el.childNodes.length) return;
  try {
    const range = document.createRange();
    const selection = window.getSelection();
    range.setStart(el.childNodes[0], el.innerText.length);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  } catch (error) {
    console.log("Error Setting Caret: ", error);
  }
};

const Icon = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    <span className="material-symbols-outlined">{children}</span>
  </button>
);

const EditableText = ({
  name,
  defaultValue = "",
  onSave = () => {},
  className = "",
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const nextValue = useRef(defaultValue);
  const spanRef = useRef(null);

  const handleChange = (e) => (nextValue.current = e.target.innerText);
  const handleSave = () => {
    setIsEditing(false);
    onSave(name, nextValue.current);
  };
  const toggleEditing = () => setIsEditing((prev) => !prev);

  useLayoutEffect(() => {
    if (!spanRef.current) return;
    if (isEditing) {
      spanRef.current.focus();
      setCaret(spanRef.current);
    } else {
      spanRef.current.innerText = defaultValue;
      nextValue.current = defaultValue;
    }
  }, [isEditing, defaultValue]);

  return (
    <span className={`editable-text ${className}`}>
      <span
        className={`editable-text-value ${isEditing ? "is-editing" : ""}`}
        contentEditable={isEditing}
        ref={spanRef}
        onInput={handleChange}
        suppressContentEditableWarning
      >
        {defaultValue}
      </span>
      <span className="editable-text-buttons">
        {isEditing ? (
          <>
            <Icon onClick={handleSave}>check_circle</Icon>
            <Icon onClick={() => setIsEditing(false)}>cancel</Icon>
          </>
        ) : (
          <Icon onClick={toggleEditing}>edit</Icon>
        )}
      </span>
    </span>
  );
};

export default EditableText;
