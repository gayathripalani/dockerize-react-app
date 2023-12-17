import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <nav className='navbar'>
            <Link className={`navbar-item ${location.pathname === '/home' ? 'active' : ''}`} to="/home">{t('home')}</Link>
            <Link className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`} to="/">{t('Navbar Item')}</Link>
        </nav>
    );
};

export default Navbar;
