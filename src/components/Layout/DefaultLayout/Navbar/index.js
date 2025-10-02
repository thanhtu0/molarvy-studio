import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import { Link } from 'react-router-dom';

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
                        <Link to="/about">ABOUT</Link>
                    </li>
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
            <div className={cx('social-icons')}>
                <a
                    href="https://facebook.com/molarvy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('icon', 'facebook')}
                >
                    <i className="fa-brands fa-facebook"></i>
                </a>

                <a
                    href="https://youtube.com/molarvy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('icon', 'youtube')}
                >
                    <i className="fa-brands fa-youtube"></i>
                </a>

                <a
                    href="https://twitter.com/molarvy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('icon', 'twitter')}
                >
                    <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a
                    href="https://reddit.com/r/molarvy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('icon', 'reddit')}
                >
                    <i className="fa-brands fa-reddit"></i>
                </a>

                <a
                    href="https://reddit.com/r/molarvy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cx('icon', 'instagram')}
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
