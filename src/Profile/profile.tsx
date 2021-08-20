import TitleBar from "../components/TitleBar/TitleBar";
import React, { useEffect, useState } from "react";
import profile_img from '../assets/images/prof.png';
import './profilestyle.css';
import { showModal } from "../actions/modalaction";
import { useDispatch } from "react-redux";
const Profile = () => {
  const dispatch = useDispatch();
 const [name,setName] = useState("");
 const [firstname,setfirstName] = useState("");
 const [lastname,setlastName] = useState("");
 const [about,setAbout] = useState("");
 const [role,setRole] = useState("");
 const [disabled,setDisabled] = useState(true);
 useEffect(() => {
 name && about && firstname && lastname && role && setDisabled(false);
 !name && setDisabled(true);
 !about && setDisabled(true);
 !firstname && setDisabled(true);
 !lastname && setDisabled(true);
 !role && setDisabled(true);
},[name, about, firstname, lastname, role] );
 const onSubmit = (e:any) =>{
   e.preventDefault();
   dispatch(
    showModal({
      title: "Your profile is saved!",
      showButton: true,
      isSuccessAlert: true,
    })
  )
 }
  return (
    <div className="main">
      <TitleBar text = 'My Profile' />
      <div className="container1_profile">
        <div className="sidebar_image_profile">
          <img alt="Profile display" src={profile_img} className="img_profile"></img>
        </div>
        <div className="formContainer_profile">
          <form onSubmit = {onSubmit}>
          <div className="inputContainer_profile">
            <div className="box_profile">
            <label className="label_profile">Display Name *</label>
            <input className="input1_profile" placeholder="Enter Display Name"
            required
            onChange = {(e) =>{
              e.target.value.length > 3 && setName(e.target.value)
              e.target.value.length <= 3 && setName("")
            }}
            />
            { name.length<=3 && <span className="error_message">minmum length should be 4</span>}
            </div>
            <div className="box_profile">
            <label className="label_profile">First Name *</label>
            <input className="input1_profile" placeholder="Enter First Name"
             required
             onChange = {(e) =>{
              e.target.value.length > 3 && setfirstName(e.target.value)
              e.target.value.length <= 3 && setfirstName("")
             }}
            />
             { firstname.length<=3 && <span className="error_message">minimum length should be 4</span>}
            </div>
            <div className="box_profile">
            <label className="label_profile">Last Name *</label>
            <input className="input1_profile" placeholder="Enter Last Name"
             required
             onChange = {(e) =>{
              e.target.value.length > 3 && setlastName(e.target.value)
              e.target.value.length <= 3 && setlastName("")
             }}
            />
            { lastname.length<=3 && <span className="error_message">minimum length should be 4</span>}
            </div>
            
          
          </div>
          <div className="box_profile">
            <label className="label_profile">About Yourself *</label>
            <textarea className="input_profile" placeholder="Max 250 char"
            required
            onChange = {(e) =>{
              
              e.target.value.length > 3 && setAbout(e.target.value)
              e.target.value.length <= 3 && setAbout("")
            }}
            ></textarea>
             { about.length<=3 && <span className="error_message">minimum length should be 4</span>}
            </div>
           
          
          <label className="label_profile">Your Area of Interest</label>
          <div className="radioVertical">
          <div className="container_profile">
            <input type="checkbox" name="Area" value="Designer" />
            <label className="label1_profile">Designer</label>
            <br></br>
          </div>
          <div className="container_profile">
            <input type="checkbox" name="Area" value="Developer" />
            <label className="label1_profile">Developer</label>
            <br></br>
          </div>
          <div className="container_profile">
            <input type="checkbox" name="Area" value="Project Manager" />
            <label className="label1_profile">Project Manager</label>
            <br></br>
          </div>
          <div className="container_profile">
            <input type="checkbox" name="Area" value="Sales" />
            <label className="label1_profile">Sales</label>
            <br></br>
          </div>
          </div>
          <label className="label_profile">Are you a student or Professional</label>
          <div>
            <div className="container_profile">
            <input type="radio" name="role" value="Student" />
            <label className="label1_profile">Student</label>
            <br></br>
          </div>
          <div className="container_profile">
            <input type="radio" name="role" value="Professional" />
            <label className="label1_profile">Professional</label>
            <br></br>
          </div>
          </div>

          <div className="bottomContainer_profile">
          <label className="label_profile">How much of experience you have?</label>
            <div className="radioHorizontal_profile">
              <div className="container_profile">
                <input type="radio" name="experience" value="five" />
                <label className="label1_profile">0-5</label>
                <br></br>
            </div>
              <div className="container_profile">
                <input type="radio" name="experience" value="10" />
                <label className="label1_profile">5-10</label>
                <br></br>
            </div>
               <div className="container_profile">
                <input type="radio" name="experience" value="above" />
                <label className="label1_profile">10 & Above</label>
                <br></br>
            </div>
            </div>
            <label className="label_profile">What is your expertise</label>
            <div className="radioHorizontal_profile">
              <div className="container_profile">
                <input type="radio" name="expertise" value="java" />
                <label className="label1_profile">Java</label>
                <br></br>
                </div>
              <div className="container_profile">
                <input type="radio" name="expertise" value="react" />
                <label className="label1_profile">React</label>
                <br></br>
                </div>
              <div className="container_profile">
                <input type="radio" name="expertise" value="backend" />
                <label className="label1_profile">Backend</label>
                <br></br>
                </div>
            </div>
            <div className="box_profile">
            <label className="label_profile">Mention your role *</label>
            <input className="input1_profile" placeholder="Only characters allowed"
             required
             onChange = {(e) =>{
              e.target.value.length > 3 && setRole(e.target.value)
              e.target.value.length <= 3 && setRole("")
             }}
            />
            { role.length<=3 && <span className="error_message">minimum length should be 4</span>}
            </div>
            
          
          </div>
          <div className = "btn-div_profile">
          <button type = "submit" disabled = {disabled} className = {!disabled ?"btn_profile":"btn_profile_disabled"} 
          >Save</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
