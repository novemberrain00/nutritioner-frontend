import React, {FC, useEffect, useState} from 'react';

import './calculator.scss';

const Calculator: FC = () => {
    const [weightValue, setWeightValue] = useState(''),
        [heightValue, setHeightValue] = useState(''),
        [bmiText, setBmiText] = useState(<></>),
        [bmiValue, setBmiValue] = useState(0);
    
    useEffect(() => {
        if(bmiValue <= 16 && bmiValue > 0) {
            setBmiText(<span style={{color: '#ff0000'}}>Выраженный дефицит массы тела</span>);
        } else if(bmiValue > 16 && bmiValue <= 18.5) {
            setBmiText(<span style={{color: 'rgb(245 127 0)'}}>Дефицит массы тела</span>);
        } else if(bmiValue > 18.5 && bmiValue <= 25) {
            setBmiText(<span style={{color: '#54f393'}}>Норма</span>);
        } else if(bmiValue > 25 && bmiValue <= 30) {
            setBmiText(<span style={{color: 'rgb(245 127 0)'}}>Избыточная масса тела</span>);
        } else if(bmiValue > 30 && bmiValue <= 35) {
            setBmiText(<span style={{color: 'rgb(245 127 0)'}}>Ожирение первой степени</span>);
        } else if(bmiValue > 35 && bmiValue <= 40) {
            setBmiText(<span style={{color: '#ff0000'}}>Ожирение второй степени</span>);
        } else if(bmiValue > 40) {
            setBmiText(<span style={{color: '#ff0000'}}>Ожирение третьей степени</span>);
        } 
    }, [bmiValue]);

    return (
        <div className="calculator">
            <h3 className="calculator__header title">Калькулятор индекса массы тела</h3>
            <div className="calculator__data">
                <input 
                    type="text" 
                    className="calculator__input input" 
                    name="calculator-weight" 
                    placeholder='Ваш вес'
                    onInput={e => {
                        setWeightValue((e.target as HTMLInputElement).value);
                        setBmiValue(+(e.target as HTMLInputElement).value / (+heightValue / 100)**2);
                    }}
                />
                <input 
                    type="text" 
                    className="calculator__input input" 
                    name="calculator-height" 
                    placeholder='Ваш рост'
                    onInput={e => {
                        setHeightValue((e.target as HTMLInputElement).value);
                        setBmiValue(+weightValue / (+(e.target as HTMLInputElement).value / 100)**2);
                    }}
                />
                <div className="calculator__total">
                    Ваш ИМТ: {bmiValue !== Infinity ? Math.round(bmiValue) || 0 : 0}
                </div>
                {bmiValue && bmiValue !== Infinity ? bmiText : ''}
            </div>
        </div>
    );
};

export {Calculator};
export default Calculator;
