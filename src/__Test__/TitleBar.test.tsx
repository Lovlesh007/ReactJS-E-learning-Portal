import React from 'react';
import { render } from '@testing-library/react';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import TitleBar from '../components/TitleBar/TitleBar';


test('testing TitleBar component' , () =>{
    const { getByText } = render(
    <BrowserRouter>
    <Provider store={store}>
    <TitleBar text = "Shopping Cart" />
    </Provider> 
    </BrowserRouter>
    )
   
    const add = getByText("Shopping Cart");
    expect(add).toBeInTheDocument();
    
  })