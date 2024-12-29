import {MAIN_ROUTE, ABOUT_ROUTE, LK_ROUTE} from "../utils/constants"
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className='navlink' to={MAIN_ROUTE}>Меню</NavLink>
                    <NavLink className='navlink' to={ABOUT_ROUTE}>О нас</NavLink>
                    <NavLink className='navlink' to={LK_ROUTE}>Личный кабинет</NavLink>
                </li>
            </ul>
        </nav>
    );
};  

export default NavBar;