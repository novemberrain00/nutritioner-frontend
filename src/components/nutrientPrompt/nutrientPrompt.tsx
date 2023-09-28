import React, {FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './nutrientPrompt.scss';

interface NutrientPromptI {
    type: string;
}

const NutrientPrompt: FC<NutrientPromptI> = ({type}) => {
    return <div className="prompt">
        тест
    </div>;
};

export default NutrientPrompt;