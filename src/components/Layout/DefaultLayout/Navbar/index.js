// Navbar.js

import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={cx('navbar-fixed')}>
            <div className={cx('navbar-logo')}>
                <Link to="/" onClick={handleLinkClick}>
                    Molarvy
                </Link>
            </div>

            <div className={cx('navbar-menu', { active: menuOpen })}>
                <div className={cx('navbar-links-container')}>
                    <ul>
                        <li>
                            <Link to="/about" onClick={handleLinkClick}>
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" onClick={handleLinkClick}>
                                NEWS
                            </Link>
                        </li>
                        <li>
                            <Link to="/media" onClick={handleLinkClick}>
                                MEDIA
                            </Link>
                        </li>
                        <li>
                            <Link to="/presskit" onClick={handleLinkClick}>
                                PRESSKIT
                            </Link>
                        </li>
                        <li>
                            <Link to="/molarvy-studio" onClick={handleLinkClick}>
                                MOLARVY STUDIOS
                            </Link>
                        </li>
                        <li>
                            <Link to="/store" onClick={handleLinkClick}>
                                STORE
                            </Link>
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
                        href="https://instagram.com/molarvy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cx('icon', 'instagram')}
                    >
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>

            <div className={cx('hamburger')} onClick={() => setMenuOpen(!menuOpen)}>
                <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    );
};

export default Navbar;
