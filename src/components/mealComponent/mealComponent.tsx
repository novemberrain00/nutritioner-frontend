import {FC, useEffect, useState} from "react";
import {ProductI} from "../../interfaces/interfaces";

import Product from "../product/product";

interface MealComponentProps {
    title: string,
    meal: string,
    cals: number
}
 
const MealComponent: FC<MealComponentProps> = ({meal, cals, title}) => {
    const [products, setProducts] = useState<ProductI[]>([]);

    useEffect(() => {
        (async () => {
            await fetch(`http://localhost:5000/products/all?cals=${cals}&meal=${meal}`)
            .then(response =>response.json())
            .then(response => {
                setProducts(response);
            });
            
        })(); 
    }, []);

    return (
        <>
            <div className="day__reception">
                <h3 className="title title_black title_tiny day__reception-title">{title}</h3>
            </div>
            <div className="day__items">
                {
                    products.map(({name, img, proteins, fats, carbs, cals}, i) => {
                        return <Product 
                            key={''+i}
                            name={name}
                            img={img}
                            proteins={proteins}
                            fats={fats}
                            carbs={carbs}
                            cals={cals}
                        />
                    }) || 'Загрузка'
                }
            </div>
        </>
    );
}
 
export default MealComponent;