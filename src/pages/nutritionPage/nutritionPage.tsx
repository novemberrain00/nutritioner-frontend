import React, {FC, useEffect, useState, ReactNode} from 'react';
import {useSelector} from 'react-redux';

import {activeProductData} from '../../redux/productModalSlice';

import RootPage from '../rootPage/rootPage';
import Overlay from '../../components/overlay/overlay';
import Product from '../../components/product/product';
import ProductModal from '../../components/productModal/productModal';

import './nutritionPage.scss';

const NutritionPage: FC = () => {
    const [breakfast, setBreakfast] = useState([]);
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
        (10*weight + 6.25*height - 5*age + 5) * a : 
        (10*weight + 6.25*height - 5*age - 161) * a;

    const proteinsNorm = calsNorm*0.3,
        fatsNorm = calsNorm*0.3,
        carbsNorm = calsNorm*0.4;

    const calsForBreakfast = sex === 'male' ? 0.35 * calsNorm : 0.3 * calsNorm,
        calsForDinner = sex === 'male' ? 0.5 * calsNorm : 0.45 * calsNorm,
        calsForLunch = sex === 'male' ? 0.15 * calsNorm : 0.25 * calsNorm;

    useEffect(() => {                                           
        fetch(`http://localhost:4000/product/all`)
        .then(response =>response.json())
        .then(response => {
            setBreakfast(response);
        })
    }, []);

    return (
        <>
            <RootPage>
                <div className="container">
                    норма каллорий: {calsNorm}
                    норма белков: {proteinsNorm}
                    норма жиров: {fatsNorm}
                    норма углеводов: {carbsNorm}
                    <h1 className="title title_black">Ваш рацион питания день:</h1>
                    <div className="day">
                        <div className="day__reception">
                            <h3 className="title title_black title_tiny day__reception-title">Завтрак</h3>
                        </div>
                        <div className="day__items">
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                            <Product/>
                        </div>
                        <div className="day__reception">
                            <h3 className="title title_black title_tiny day__reception-title">Обед</h3>
                        </div>
                        <div className="day__reception">
                            <h3 className="title title_black title_tiny day__reception-title">Ужин</h3>
                        </div>
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
