import classNames from 'classnames/bind';
import styles from './CompanyIntro.module.scss';
import { logo_remove_bg } from '~/utils/images';

const cx = classNames.bind(styles);

const CompanyIntro = () => {
    return (
        <div className={cx('intro-wrapper')}>
            <img src={logo_remove_bg} alt="Molarvy Studio" className={cx('logo')} />
            <div className={cx('description')}>
                <p>Molarvy Studio is an indie games developer in Hue, VietNam.</p>
                <p>
                    Molarvy Studio is a game development studio driven by creativity and passion. We craft immersive
                    worlds, memorable characters, and meaningful experiences that inspire players around the globe.
                </p>
            </div>
        </div>
    );
};

export default CompanyIntro;
