import React, {FC, useEffect, useState, ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {activeProductData} from '../../redux/productModalSlice';

import RootPage from '../rootPage/rootPage';
import Overlay from '../../components/overlay/overlay';
import Product from '../../components/product/product';
import ProductModal from '../../components/productModal/productModal';

import {DailyDietI, ProductI} from '../../interfaces/interfaces';

import './nutritionPage.scss';
import MealComponent from '../../components/mealComponent/mealComponent';

const NutritionPage: FC = () => {
    const [dailyDiet, setDailyDiet] = useState<DailyDietI>({
        breakfast: [],
        dinner: [],
        afternoon: [],
        lunch: []
    });
    const {title, imgPath, description} = useSelector(activeProductData);

    const weight = +(sessionStorage.getItem('weight') as string),
        height = +(sessionStorage.getItem('height') as string),
        age = +(sessionStorage.getItem('age') as string),
        sex = sessionStorage.getItem('sex'),
        activity = sessionStorage.getItem('lifestyle') as string,
        target = sessionStorage.getItem('target');

    let a = 0;

    switch (activity) {
        case 'very-weak':
            a = 1.2;
            break;
        case 'weak':
            a = 1.375;
            break;
        case 'medium':
            a = 1.55;
            break;
        case 'strong':
            a = 1.7;
            break;
        case 'very-strong':
            a = 1.9;
            break;
    }

    const calsNorm = sex === 'male' ? 
        Math.floor((10*weight + 6.25*height - 5*age + 5) * a) : 
        Math.floor((10*weight + 6.25*height - 5*age - 161) * a);

    const proteinsNorm = Math.floor(calsNorm * 0.3),
        fatsNorm = Math.floor(calsNorm * 0.3),
        carbsNorm = Math.floor(calsNorm * 0.4);

    const calsForMeals = {
        breakfast: sex === 'male' ? 0.25 * calsNorm : 0.2 * calsNorm,
        dinner: sex === 'male' ? 0.6 * calsNorm : 0.55 * calsNorm,
        lunch: sex === 'male' ? 0.15 * calsNorm : 0.2 * calsNorm
    }
    
    return (
        <>
            <RootPage>
                <div className="container">
                    {/* норма каллорий: {calsNorm}
                    норма белков: {proteinsNorm}
                    норма жиров: {fatsNorm}
                    норма углеводов: {carbsNorm} */}
                    <h1 className="title title_black">Ваш рацион питания день:</h1>
                    <div className="day">
                        <MealComponent title='Завтрак' meal='breakfast' cals={calsForMeals.breakfast}/>
                        <MealComponent title='Обед' meal='lunch' cals={calsForMeals.lunch}/>
                        <MealComponent title='Ужин' meal='dinner' cals={calsForMeals.dinner}/>
                    </div>
                </div>
            </RootPage>
            <Overlay>
                <ProductModal 
                    title={title}
                    imgPath={imgPath}
                    description={description}
                />
            </Overlay>
        </>
    );
};

export {NutritionPage};
export default NutritionPage;
