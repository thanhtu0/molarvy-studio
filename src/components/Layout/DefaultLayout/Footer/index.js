import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { logo_remove_bg } from '~/utils/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('main-content')}>
                <div className={cx('logo-section')}>
                    <img src={logo_remove_bg} alt="Molarvy Logo" />
                </div>

                <div className={cx('info-columns-wrapper')}>
                    <div className={cx('column')}>
                        <h4>Address</h4>
                        <p>
                            Molarvy Studio <br />
                            Hue City, VietNam <br />
                        </p>
                    </div>

                    <div className={cx('column')}>
                        <h4>Partners</h4>
                        <a href="https://www.youtube.com">Joel Schoch / Composer</a>
                        <a href="https://www.youtube.com">Markus Abbassi &</a>
                        <a href="https://www.youtube.com">Tim Glaus / Biz, Advisors</a>
                    </div>

                    <div className={cx('column')}>
                        <h4>Email</h4>
                        <a href="mailto:contact@okomotive.ch">contact@molarvy.vn</a>
                        <p>not hiring currently</p>
                    </div>

                    <div className={cx('column')}>
                        <h4>Follow Us</h4>
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
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
