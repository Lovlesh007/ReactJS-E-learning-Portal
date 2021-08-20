import React from 'react';
import { render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import CourseDescription from '../CourseDescription/course_detail';


test('testing courseDescription component' , () =>{
    const { getByRole } = render(
    <BrowserRouter>
    <Provider store={store}>
    <CourseDescription/>
     </Provider> 
    </BrowserRouter>
    )
    const add = getByRole('button',{ name:'ADD TO WISHLIST'});
    expect(add).toBeInTheDocument();
    
  })