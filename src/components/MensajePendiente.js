import React from "react";

const MensajePendiente = ({ name }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">
          <span className="card-social">
            <i className="fab fa-whatsapp"></i>
          </span>&nbsp;Whatsapp
        </h5>
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
};

export default MensajePendiente;
