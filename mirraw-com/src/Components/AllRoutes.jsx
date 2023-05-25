import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';
import { WomenPage } from '../Pages/WomenPage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/women' element={<WomenPage/>}/>
    </Routes>
  )
}
