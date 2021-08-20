import React from 'react';
import { render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Headerbar from '../Headerbar/header';


test('testing header component' , () =>{
    const { getByText } = render(
    <BrowserRouter>
    <Provider store={store}>
    <Headerbar/>
     </Provider> 
    </BrowserRouter>
    )
    const add = getByText("COURSES");
    expect(add).toBeInTheDocument();
    
  })
