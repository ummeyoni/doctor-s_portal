import React from "react";

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4">
      <div className="">
        <img style={{ width: "300px" }} src={doctor.img} alt="" />
        <div className="text-center mt-3">
          <h5>{doctor.name}</h5>
          <small>{doctor.contact}</small>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
