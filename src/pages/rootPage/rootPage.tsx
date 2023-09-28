import React, {FC} from 'react';

import './rootPage.scss';

interface RootPageI {
    children: React.ReactElement
}

const RootPage: FC<RootPageI> = ({children}) => {
  return (
    <>
        <header className='header'>
            <nav>
                <div className="header__nav nav-wrapper">
                    <a href="#" className="header__logo brand-logo">Logo</a>
                    <ul id="nav-mobile" className="header__nav-list right hide-on-med-and-down">
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="#">Войти</a>
                        </li>
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="#">Каталог продуктов</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        {children}
    </>
  );
};

export {RootPage};
export default RootPage;
