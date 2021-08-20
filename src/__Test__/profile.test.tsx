import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Profile from '../Profile/profile';


test('testing Profile component' , () =>{
    const { getByRole } = render(
    <BrowserRouter>
    <Provider store={store}>
    <Profile/>
    </Provider> 
    </BrowserRouter>
    )
    const add = getByRole('button',{ name:'Save'});
    expect(add).toBeInTheDocument();
    
  })