import React from 'react';
import { render } from '@testing-library/react';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Cart from '../Cart/cart';


test('testing Cart component' , () =>{
    const { getByRole } = render(
    <BrowserRouter>
    <Provider store={store}>
    <Cart />
    </Provider> 
    </BrowserRouter>
    )
    const add = getByRole('button',{ name:'CHECKOUT'});
    expect(add).toBeInTheDocument();
    
  })