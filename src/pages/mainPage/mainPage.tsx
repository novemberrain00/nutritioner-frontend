import React, {FC} from 'react';

import Calculator from '../../components/calculator/calculator';
import RootPage from '../rootPage/rootPage';
import TestsPage from '../testsPage/testsPage';

import {useNavigate} from 'react-router-dom';

import './mainPage.scss';

const MainPage: FC = () => {
  const navigate = useNavigate();

  return (
    <main className="main">
        <RootPage>
            <div className="promo">
                <div className="container">
                    <div className="row">
                        <div className="col s6">
                            <h1 className="promo__title title">Рассчитайте рацион питания для себя</h1>
                            <p className="promo__text">
                                Получите индивидуальный рацион питания на каждый день 
                                для набора мышечной массы или похуденния. Автоматический расчет
                                каллорий cо сбалансрованным сочетанием БЖУ и других нутриентов.
                            </p>
                            <button onClick={() => navigate('/test')} className="btn promo__btn">Начать</button>
                        </div>
                        <div className="col s5 offset-s1"> 
                            <Calculator/>
                        </div>
                    </div>
                </div>
            </div>
        </RootPage>
    </main>
  );
};

export {MainPage};
export default MainPage;
