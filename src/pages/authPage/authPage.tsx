import {FC} from 'react';

import './authPage.scss';

interface AuthPageProps {
    
}
 
const AuthPage: FC<AuthPageProps> = () => {
    return (
        <div className='container'>
            <div className="row">
                <form className="form form_centered col s6" action="GET">
                    <div className="input-field">
                        <input placeholder="Имя" id="first_name" type="text" className="validate"/>
                    </div>
                    <div className="input-field">
                        <input placeholder="Пароль" id="password" type="password" className="validate"/>
                    </div>
                    <input type="submit" className="waves-effect waves-light btn form__btn form__btn_centered" value="Войти"/>
                </form>
            </div>
        </div>
    );
}
 
export default AuthPage;