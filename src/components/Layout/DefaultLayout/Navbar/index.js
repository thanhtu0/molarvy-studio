import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { Link } from 'react-router-dom';
import { logo_remove_bg } from '~/utils/images';

const cx = classNames.bind(styles);

const Navbar = () => {
    return (
        <nav className={cx('navbar-fixed')}>
            <div className={cx('navbar-logo')}>
                <Link to="/">Molarvy</Link>
            </div>

            <div className={cx('navbar-links-container')}>
                <ul>
                    <li>
                        <Link to="/news">NEWS</Link>
                    </li>
                    <li>
                        <Link to="/media">MEDIA</Link>
                    </li>
                    <li>
                        <Link to="/presskit">PRESSKIT</Link>
                    </li>
                    <li>
                        <Link to="/molarvy-studio">MOLARVY STUDIOS</Link>
                    </li>
                    <li>
                        <Link to="/store">STORE</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('navbar-badge')}>
                <Link to="/">
                    <img src={logo_remove_bg} className={cx('badge-content')} />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
