import React from "react";
import doctorSm from "../../../images/doctorSm.png";
import Doctor from "../Doctor/Doctor";

const doctorsData = [
  {
    img: doctorSm,
    name: " Dr.Caudi",
    contact: "0987654321"
  },
  {
    img: doctorSm,
    name: " Dr.Caudi",
    contact: "0987654321"
  },
  {
    img: doctorSm,
    name: " Dr.Caudi",
    contact: "0987654321"
  }
];

const Doctors = () => {
  return (
    <section>
      <h6 className="text-center mb-3" style={{ color: "#1cc7c1" }}>
        Our Doctors
      </h6>
      <div className=" row justify-content-center">
        <div className="row w-75 d-flex">
          {doctorsData.map(doctor => (
            <Doctor doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
