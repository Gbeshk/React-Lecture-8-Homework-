import React from "react";
import RightDiv from "../../__molecules/rightdiv/rightdiv";
import "../organism/organism.css";
import leftpic from "../../../assets/images/leftpic.png";
import picshadows from "../../../assets/images/picshadows.svg";
import cube from "../../../assets/images/cube.svg";
import mobilepic from "../../../assets/images/mobilepic.svg";
import mobileshadow from "../../../assets/images/mobileshadow.svg";
function Organism() {
  return (
    <>
      <div className="container">
        <img src={leftpic} className="leftpic" alt="" />
        <img src={picshadows} className="picshadows" alt="" />
        <img src={cube} className="cube" alt="" />
        <img src={mobilepic} className="mobilepic" alt="" />
        <img src={mobileshadow} className="mobileshadow" alt="" />
        <RightDiv />
      </div>
    </>
  );
}
export default Organism;
