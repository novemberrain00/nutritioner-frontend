import React, {FC} from 'react';
import {useDispatch} from 'react-redux'

import {changeVisibility} from '../../redux/overlaySlice';
import {setProductData} from '../../redux/productModalSlice';

import './product.scss';

const Product: FC = () => {
    const dispatch = useDispatch();

    return (
        <div className="product">
            <div className="product__header">
                Творог
            </div>
            <div className="product__picture">
                <img 
                    className='product__picture-img'
                    src="https://s7.stc.all.kpcdn.net/family/wp-content/uploads/2022/03/tvorog-polza-i-vred-960x540-1-960x540.jpg" 
                    alt="творог" 
                />
            </div>
            <div className="product__data">
                <div className="product__data-row">
                    <span>Белки: </span>28
                </div>
                <div className="product__data-row">
                    <span>Жиры: </span>28
                </div>
                <div className="product__data-row">
                    <span>Углеводы: </span>28
                </div> 
            </div>
            <div className="product__footer">
                <a href="#" onClick={e => {
                    e.preventDefault();
                    dispatch(changeVisibility());
                    dispatch((setProductData({
                        imgPath: 'https://s9.stc.all.kpcdn.net/family/wp-content/uploads/2022/03/tvorog-polza-i-vred-960x540-1-960x540.jpg',
                        title: 'творог',
                        description: 'Творог богат белком и кальцием. В нём есть жиры и немало витаминов группы В. А вот уровень лактозы гораздо ниже, чем, например, в молоке. Поэтому люди с непереносимостью этого углевода могут спокойно потреблять творог в пищу. Например, в качестве дополнения к завтраку.'
                    })));
                }} className="product__showmore">
                    Подробнее
                </a>
            </div>
        </div>
    )
};

export default Product;