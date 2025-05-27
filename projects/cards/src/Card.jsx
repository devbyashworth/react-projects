import React from "react";
// import PropTypes from "prop-types";

const Card = ({ image, title, subtitle, description, onProfile, onFollow }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="content">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <div className="buttons">
          <button type="button" onClick={onProfile}>
            Profile
          </button>
          <button type="button" onClick={onFollow} className="primary">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   description: PropTypes.string,
//   onProfile: PropTypes.func,
//   onFollow: PropTypes.func,
// };

export default Card;
