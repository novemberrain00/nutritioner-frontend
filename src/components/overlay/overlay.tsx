import React, {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {isOverlayShowed, changeVisibility} from '../../redux/overlaySlice';

import './overlay.scss';

interface OverlayI {
    children: React.ReactNode
}

const Overlay: FC<OverlayI> = ({children}) => {
    const isShowed = useSelector(isOverlayShowed),
        dispatch = useDispatch();

    const handleClose = (e: MouseEvent) => {
        console.log((e.target as HTMLElement).classList)
        if((e.target as HTMLElement).classList.contains('overlay')) {
            dispatch(changeVisibility());
        }
    };

    return isShowed ? (
        <div onClick={(e: any) => handleClose(e)} className="overlay">
            {children}
        </div>
    ) : null;
};

export default Overlay;