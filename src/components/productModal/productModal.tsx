import React, {FC} from 'react';

import './productModal.scss';

interface ProductModalI {
    title: string,
    imgPath: string,
    description: string,
}

const ProductModal: FC<ProductModalI> = ({title, imgPath, description}) => {
    return (
        <div className="product-modal">
            <div className="product-modal__header">
                {title}
            </div>
            <div className="product-modal__img">
                <img src={imgPath} alt={title} />
            </div>
            <div className="product-modal__body">
                {description}
            </div>
        </div>
    )
};

export default ProductModal;