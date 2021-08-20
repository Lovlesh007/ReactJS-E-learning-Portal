import React from "react";
import titleImage from "../../assets/images/titlebar.png";
import './title_style.css';

const TitleBar = (props:any) => {
  return (
    <div className="titleBar">
      <h1 className="title" style = {{color:"white"}}>{props.text?props.text:"Discover Latest Courses on React"}</h1>
      <img className="bgImage" src={titleImage} alt = "background"></img>
    </div>
  );
};

export default TitleBar;
