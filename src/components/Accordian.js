import React, { useState } from "react";
import "./Accordian.css";

const Accordian = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="single_accordian">
      <div className="title">
        <h1 className="heading">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit */}
          {props.heading}
        </h1>
        <button className="button" onClick={() => setToggle(!toggle)}>
          {toggle ? <p>Hide</p> : <p>Show</p>}
        </button>
      </div>

      {toggle && (
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sollicitudin finibus libero, sit amet aliquet urna finibus in. Donec
          eget massa at lacus rhoncus condimentum at quis ante. Pellentesque
          quis felis enim. Sed dictum mi et lorem finibus dictum. Cras vulputate
          tortor felis, ac malesuada quam pulvinar id. Donec molestie id libero
          ac suscipit. Vestibulum sit amet augue ac orci gravida luctus ac vel
          turpis. Aenean varius arcu non arcu fringilla mattis. Integer in
          cursus tortor. Morbi id pretium dolor. Ut ac dolor neque. Ut sed justo
          porta odio volutpat euismod.
        </p>
      )}
    </div>
  );
};

export default Accordian;
