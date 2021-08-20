import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider, shallowEqual } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Wishlist from '../Wishlist/wishlist';


test('testing WishList component' , () =>{
    const { getByText} = render(
    <BrowserRouter>
    <Provider store={store}>
    <Wishlist/>
    </Provider> 
    </BrowserRouter>
    )
    const add = getByText('My WishList');
    expect(add).toBeInTheDocument();
    
  })

  test('testing WishList cart' , () =>{
    const { getByText} = render(
    <BrowserRouter>
    <Provider store={store}>
    <Wishlist/>
    </Provider> 
    </BrowserRouter>
    )
    const add = getByText('YOUR CART DETAILS');
    expect(add).toBeInTheDocument();
    
  })