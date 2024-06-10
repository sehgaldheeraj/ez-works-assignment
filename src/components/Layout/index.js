import Contact from "../Contact";
import ServiceGrid from "../ServiceGrid";
import "./index.css";
/* eslint-disable import/no-anonymous-default-export */
export default () => {
  return (
    <div className="main-container">
      <Contact />
      <ServiceGrid />
    </div>
  );
};
