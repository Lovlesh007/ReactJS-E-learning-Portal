import React from 'react';
import { render} from '@testing-library/react';
import { Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Modal from '../Modal/modal';


test('testing modal component' , () =>{
    const { getByText } = render(
    <BrowserRouter>
    <Provider store={store}>
    <Modal data = {{
      title: "Your profile is saved!",
      showButton: true,
      isSuccessAlert: true,
    }}/>
     </Provider> 
    </BrowserRouter>
    )
    const add = getByText("Your profile is saved!");
    expect(add).toBeInTheDocument();
    
  })