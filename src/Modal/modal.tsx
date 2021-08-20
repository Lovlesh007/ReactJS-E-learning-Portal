import "./modalstyle.css";
import React from "react";
import { hideModal} from '../actions/modalaction';
import { useDispatch } from "react-redux";
import close from '../assets/images/close.png';
import tick from "../assets/images/tick.svg";
import alert from "../assets/images/alert.svg";

const Modal = (data:any) => {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="content">
        <div className="header">
          <img className="img" src={close} onClick={() =>  dispatch(hideModal())} alt ="close Modal"></img>
        </div>
        <div className="data">
          <div className="message">
            <img
              src={data.data.isSuccessAlert ? tick : alert}
              className="imgTick"
              alt = "Tick Sign"
            ></img>
            <p className="title">{data.data.title}</p>
          </div>
          <p className="subTitle">{data.data.subTitle}</p>
          {data.data.showButton && (
            <button className = "okmodalbtn" onClick={() =>  dispatch(hideModal())}>OK</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
