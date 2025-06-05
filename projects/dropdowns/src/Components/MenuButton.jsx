import React from "react";
import PropTypes from "prop-types";

const Icon = ({ icon, className = "" }) => {
  return (
    <span className={`material-symbols-outlined ${className}`}>{icon}</span>
  );
};

const MenuButton = ({
  name,
  icon,
  index,
  hasSubItems,
  subMenuHeight,
  onClick,
}) => {
  return (
    <button onClick={() => (onClick ? onClick(index, subMenuHeight) : null)}>
      <Icon icon={icon || name} />
      <p className="name">{name}</p>
      {hasSubItems && <Icon icon="chevron_right" className="chevron" />}
    </button>
  );
};

MenuButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  index: PropTypes.number,
  hasSubItems: PropTypes.bool,
  subMenuHeight: PropTypes.number,
  onClick: PropTypes.func,
};

export default MenuButton;
