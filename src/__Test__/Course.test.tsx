import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Courses from '../Wishlist/wishlist';


test('testing courses component' , () =>{
    const { getByText } = render(
    <BrowserRouter>
    <Provider store={store}>
    <Courses/>
     </Provider> 
    </BrowserRouter>
    )
    const add = getByText("All Courses");
    expect(add).toBeInTheDocument();
    
  })

  test('testing courses component element' , () =>{
    const { getByText } = render(
    <BrowserRouter>
    <Provider store={store}>
    <Courses/>
     </Provider> 
    </BrowserRouter>
    )
    const add = getByText("YOUR CART DETAILS");
    expect(add).toBeInTheDocument();
    
  })