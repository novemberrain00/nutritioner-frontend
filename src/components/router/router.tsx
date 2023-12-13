import React, {FC} from 'react';
import {Routes, Route} from "react-router-dom";

import MainPage from '../../pages/mainPage/mainPage';
import NutritionPage from '../../pages/nutritionPage/nutritionPage';
import TestsPage from '../../pages/testsPage/testsPage';
import AuthPage from '../../pages/authPage/authPage';

const Router: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/results' element={<NutritionPage/>}/>
            <Route path='/test' element={<TestsPage/>}/>
            <Route path='/auth' element={<AuthPage/>}/>
        </Routes>
    )
};

export default Router;