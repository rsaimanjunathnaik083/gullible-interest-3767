import React from 'react';
import { Route, Routes} from 'react-router-dom';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  )
}
