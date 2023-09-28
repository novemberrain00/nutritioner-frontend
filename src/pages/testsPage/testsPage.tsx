import React, {FC, FormEvent, useEffect, useState} from 'react';
import RootPage from '../rootPage/rootPage';
import {useNavigate} from 'react-router-dom';

import './testsPage.scss';

const TestsPage: FC = () => {
    const navigate = useNavigate();

    const [isFormSended, setIsFormSended] = useState(true);

    const sendForm = async (e: FormEvent) => {
        const formData = new FormData(document.querySelector('#test-form') as HTMLFormElement);
        e.preventDefault();
        if(Number.isNaN(+(formData.get('age') as Object))
        || Number.isNaN(+(formData.get('height') as Object)) 
        || Number.isNaN(+(formData.get('weight') as Object))
        || !formData.get('age')
        || !formData.get('height')
        || !formData.get('weight')) {
            setIsFormSended(false);
        } else {
            sessionStorage.setItem('weight', ''+formData.get('weight'));
            sessionStorage.setItem('height', ''+formData.get('height'));
            sessionStorage.setItem('age', ''+formData.get('age'));
            sessionStorage.setItem('sex', ''+formData.get('sex'));
            sessionStorage.setItem('lifestyle', ''+formData.get('lifestyle'));
            sessionStorage.setItem('target', ''+formData.get('target'));
            setIsFormSended(true);
            navigate('/results')
        }
    }
    
    return (
        <RootPage>
            <div className="container tests">
                <div className="row tests__header">
                    <a href="/" onClick={e => {
                        e.preventDefault();
                        navigate('/')
                    }} className="link">Назад</a>
                </div>
                <form action="post" id="test-form" onSubmit={(e: FormEvent) => sendForm(e)}>
                    <div className="row">
                        <div className="col s8 offset-s2 tests__test">
                            <h2 className="tests__title title title_black">Укажите ваш возраст</h2>
                            <input 
                                placeholder="Введите ваш возраст" 
                                id="first_name" 
                                type="text" 
                                name="age"
                                className="tests__input validate"
                            />
                        </div>
                        <div className="col s8 offset-s2 tests__test">
                            <h2 className="tests__title title title_black">Укажите ваш рост</h2>
                            <input 
                                placeholder="Введите ваш рост" 
                                id="first_name" 
                                type="text" 
                                name="height"
                                className="tests__input validate"
                            />
                        </div>
                        <div className="col s8 offset-s2 tests__test">
                            <h2 className="tests__title title title_black">Укажите ваш вес</h2>
                            <input 
                                placeholder="Введите ваш вес" 
                                id="first_name" 
                                type="text" 
                                name="weight"
                                className="tests__input validate"
                            />
                        </div>
                        <div className="col s8 offset-s2 tests__test">
                            <h2 className="tests__title title title_black">Ваш пол:</h2>
                            <p>
                                <label>
                                    <input className="with-gap" name="sex" type="radio" value="male"/>
                                    <span>Мужской</span>
                                </label>
                                </p>
                                <p>
                                <label>
                                    <input className="with-gap" name="sex" type="radio" value="female"/>
                                    <span>Женский</span>
                                </label>
                            </p>
                        </div>
                        <div className="col s8 offset-s2 tests__test">
                            <h2 className="tests__title title title_black">Как вы оцениваете ваш образ жизни?</h2>
                            <p>
                                <label>
                                    <input className="with-gap" name="lifestyle" type="radio" value="very-weak"/>
                                    <span>
                                        Минимальная активность: сидячая работа, 
                                        практически полное отсутствие физических нагрузок 
                                    </span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap" name="lifestyle" type="radio" value="weak"/>
                                    <span>
                                        Небольшая активность: сидячая, либо работа, не требующая большой подвижности.
                                        Прогулки и/или занятие спортом 1-2 раза в неделю.
                                    </span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap" name="lifestyle" type="radio" value="medium"/>
                                    <span>
                                        Средняя активность: работа, не связанная с большими физическими нагрузками. 
                                        Переодические прогулки и/или занятия спортом 2-3 раза в неделю.
                                    </span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap" name="lifestyle" type="radio" value="strong"/>
                                    <span>
                                        Большая активность: работа, не связанная с большими физическими нагрузками. 
                                        Переодические прогулки и занятия спортом 3 и более раз в неделю.
                                    </span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap" name="lifestyle" type="radio" value="very-strong"/>
                                    <span>
                                        Экстримальная активность: работа, подразумевающая нахождение на свежем воздухе
                                        и требующая физические нагрузки. 
                                        Переодические прогулки и занятия спортом 3 и более раз в неделю.
                                    </span>
                                </label>
                            </p>
                        </div>
                        <div className="col s8 offset-s2 tests__test">
                            <h2 className="tests__title title title_black">Ваша цель:</h2>
                            <p>
                              <label>
                                  <input className="with-gap" name="target" type="radio" value="slim"/>
                                  <span>Похудение</span>
                              </label>
                            </p>
                            <p>
                              <label>
                                  <input className="with-gap" name="target" type="radio" value="keep"/>
                                  <span>Поддержание формы</span>
                              </label>
                            </p>
                            <p>
                              <label>
                                  <input className="with-gap" name="target" type="radio" value="mass"/>
                                  <span>Набор массы</span>
                              </label>
                            </p>
                        </div>
                    </div>
                    <div 
                        className={!isFormSended ? "row tests__warning" : "row tests__warning tests__warning_hidden"}
                    >
                        <div className="col s4 offset-s2">
                            Проверьте правильность введенных данных
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s2 offset-s9">
                            <input 
                                onClick={e => sendForm(e)}
                                type="submit" 
                                value="Далее" 
                                className="btn"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </RootPage>
    );
};

export {TestsPage};
export default TestsPage;
