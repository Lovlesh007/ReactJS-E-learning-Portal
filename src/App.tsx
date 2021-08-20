import React from 'react';
import './App.css';
import Headerbar from './Headerbar/header';
// import Titlebar from './components/TitleBar/TitleBar';
import Courses from './Courses/courses';
import { useSelector } from 'react-redux';
import Modal from './Modal/modal';
import Profile from './Profile/profile';
import {Switch ,Route,BrowserRouter } from 'react-router-dom';
import CourseDetail from './CourseDescription/course_detail';
import Wishlist from './Wishlist/wishlist'
import Cart from './Cart/cart';

function App() {
  const modal = useSelector((state:any) => state.modalReducer);

  return (
    <div className="App" style={{fontFamily:"Montserrat"}}>
      <BrowserRouter>
      <Headerbar/>
      <Switch>
        <Route exact path="/">
          <Courses/>
        </Route>
        <Route exact path="/profile">
          <Profile/>
        </Route>
        <Route path="/courses/:id">
          <CourseDetail/>
        </Route>
        <Route exact path="/wishlist">
         <Wishlist></Wishlist>
        </Route>
        <Route exact path="/cart">
         <Cart></Cart>
        </Route>
      
      </Switch>
      </BrowserRouter>
      {modal.show && <Modal data={modal.data} />}
    </div>
  );
}

export default App;
