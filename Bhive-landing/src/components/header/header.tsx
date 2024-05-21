import bhivelogo from '../../assets/bhive_logo.svg'
import callIcon from '../../assets/call.svg';
import './header.scss';

const Header = () => {

    return <header className='header'>
        <img className="header__logo" src={bhivelogo}></img>
        <img className="header__call" src={callIcon}></img>
    </header>
}

export default Header;