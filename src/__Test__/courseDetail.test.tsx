import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Coursedeatil from '../components/Coursedetail/coursedetail';


test('testing courseDetail component' , () =>{
    const { getByRole } = render(
    <BrowserRouter>
    <Provider store={store}>
    <Coursedeatil course={{"course_id":3,"instructor_name":"Leslie Alcock","course_name":"Master the fundamentals of React PQR and Redux with this Reach Training","tags":["redux","reacthooks","reactthunk"],"course_title":"PQR","discountedPrice":200,"price":600}}/>
    </Provider> 
    </BrowserRouter>
    )
    const add = getByRole('button',{ name:'ADD TO CART'});
    expect(add).toBeInTheDocument();
    
  })