import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import reducers from '../src/reducers/rootreducer';
import { Provider, shallowEqual } from 'react-redux';
import TitleBar from './components/TitleBar/TitleBar';
import Coursedeatil from './components/Coursedetail/coursedetail';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

test('addToWishList', () => {
  let state;
  state = reducers({cartReducer:[{course_id:1,instructor_name:'George Adamson',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:400,price:600}],wishListReducer:[],modalReducer:{show:true,data:{title:'Course successfully added in the cart',showButton:false,isSuccessAlert:true}}}, {type:'HIDE_MODAL'});
  expect(state).toEqual({cartReducer:[{course_id:1,instructor_name:'George Adamson',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:400,price:600}],wishListReducer:[],modalReducer:{show:false}});
});


test('addToCart', () => {
  let state;
  state = reducers({cartReducer:[],wishListReducer:[{course_id:4,instructor_name:'Russell Ayrton',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:500,price:600}],modalReducer:{show:false}}, {type:'ADD_WISHLIST_ITEM',payload:{course_id:5,instructor_name:'Rober Patricia',course_name:'Become a JavaScript Pro with MNO these valuable skills.',tags:['redux','reacthooks','reactthunk'],course_title:'MNO',discountedPrice:300,price:650}});
  expect(state).toEqual({cartReducer:[],wishListReducer:[{course_id:4,instructor_name:'Russell Ayrton',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:500,price:600},{course_id:5,instructor_name:'Rober Patricia',course_name:'Become a JavaScript Pro with MNO these valuable skills.',tags:['redux','reacthooks','reactthunk'],course_title:'MNO',discountedPrice:300,price:650}],modalReducer:{show:false}});
});

test('removeFromCart', () => {
  let state;
  state = reducers({cartReducer:[],wishListReducer:[{course_id:5,instructor_name:'Rober Patricia',course_name:'Become a JavaScript Pro with MNO these valuable skills.',tags:['redux','reacthooks','reactthunk'],course_title:'MNO',discountedPrice:300,price:650}],modalReducer:{show:false}}, {type:'REMOVE_WISHLIST_ITEM',payload:{course_id:5,instructor_name:'Rober Patricia',course_name:'Become a JavaScript Pro with MNO these valuable skills.',tags:['redux','reacthooks','reactthunk'],course_title:'MNO',discountedPrice:300,price:650}});
  expect(state).toEqual({cartReducer:[],wishListReducer:[],modalReducer:{show:false}});
});

test('moveToWishList', () => {
  let state;
  state = reducers({cartReducer:[],wishListReducer:[{course_id:1,instructor_name:'George Adamson',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:400,price:600},{course_id:2,instructor_name:'Richard Atkinson',course_name:'Become a JavaScript Pro MNO with these valuable skills.',tags:['redux','reacthooks','reactthunk'],course_title:'MNO',discountedPrice:300,price:700}],modalReducer:{show:true,data:{title:'Course successfully moved to wishlist',showButton:true,isSuccessAlert:true}}}, {type:'HIDE_MODAL'});
  expect(state).toEqual({cartReducer:[],wishListReducer:[{course_id:1,instructor_name:'George Adamson',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:400,price:600},{course_id:2,instructor_name:'Richard Atkinson',course_name:'Become a JavaScript Pro MNO with these valuable skills.',tags:['redux','reacthooks','reactthunk'],course_title:'MNO',discountedPrice:300,price:700}],modalReducer:{show:false}});
});

test('profileSaveModal', () => {
  let state;
  state = reducers({cartReducer:[],wishListReducer:[],modalReducer:{show:false}}, {type:'SHOW_MODAL',payload:{title:'Your profile is saved!',showButton:true,isSuccessAlert:true}});
  expect(state).toEqual({cartReducer:[],wishListReducer:[],modalReducer:{show:true,data:{title:'Your profile is saved!',showButton:true,isSuccessAlert:true}}});
});


test('ckeckoutOrder', () => {
  let state;
  state = reducers({cartReducer:[],wishListReducer:[],modalReducer:{show:true,data:{title:'You have successfully placed your order',showButton:true,isSuccessAlert:true}}}, {type:'HIDE_MODAL'});
  expect(state).toEqual({cartReducer:[],wishListReducer:[],modalReducer:{show:false}});
});

test('removeFromWishlist', () => {
  let state;
  state = reducers({cartReducer:[{course_id:4,instructor_name:'Russell Ayrton',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:500,price:600}],wishListReducer:[],modalReducer:{show:false}}, {type:'ADD_WISHLIST_ITEM',payload:{course_id:4,instructor_name:'Russell Ayrton',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:500,price:600}});
  expect(state).toEqual({cartReducer:[{course_id:4,instructor_name:'Russell Ayrton',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:500,price:600}],wishListReducer:[{course_id:4,instructor_name:'Russell Ayrton',course_name:'Responsive Design Course XYZ How to design responsive templates',tags:['redux','reacthooks','reactthunk'],course_title:'XYZ',discountedPrice:500,price:600}],modalReducer:{show:false}});
});


// describe('Paragraph', () => {
//   it('should render children inside a p tag', () => {
//     // const wrapper = shallow(<Paragraph>This is my first test</Paragraph>)
//     const wrapper = shallow(<TitleBar></TitleBar>)
//     const paragraph = wrapper.find('h1')
//     expect(paragraph).toHaveLength(1)
//     expect(paragraph.text()).toEqual('This is my first test')
//   })
// })


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('testing courseCard component' , () =>{
//   const { getByRole } = render(<Coursedeatil/>)
//   const add = getByRole('button',{ name:'ADD TO CART'});
//   expect(add).toBeInTheDocument();
// })