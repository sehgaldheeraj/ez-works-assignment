/* eslint-disable import/no-anonymous-default-export */
import "./index.css";
import PD from "../../assets/Research@4x-5.png";
import AP from "../../assets/Research@4x-2.png";
import TS from "../../assets/Research@4x-1.png";
import GD from "../../assets/Research@4x-4.png";
import RA from "../../assets/Research@4x.png";
import DP from "../../assets/Research@4x-3.png";

const servicesArray = [
  {
    name: "Presentational Design",
    image: PD,
  },
  {
    name: "Audio-Visual Production",
    image: AP,
  },
  {
    name: "Translation Services",
    image: TS,
  },
  {
    name: "Graphic Design",
    image: GD,
  },
  {
    name: "Research and Analysis",
    image: RA,
  },
  {
    name: "Data Processing",
    image: DP,
  },
];

export default () => {
  return (
    <div className="service-grid">
      {servicesArray.map((service, index) => {
        return (
          <div className="service-grid-item" key={index}>
            <div className="service-header">
              <img src={service.image} alt={service.name} />
              <p className="service-name">{service.name}</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        );
      })}
    </div>
  );
};
