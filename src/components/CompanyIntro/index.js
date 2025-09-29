import classNames from 'classnames/bind';
import styles from './CompanyIntro.module.scss';
import { logo_remove_bg } from '~/utils/images';

const cx = classNames.bind(styles);

const CompanyIntro = () => {
    return (
        <div className={cx('intro-wrapper')}>
            <img src={logo_remove_bg} alt="Molarvy Studio" className={cx('logo')} />
            <div className={cx('description')}>
                <p>Team Cherry is an indie games developer in Adelaide, South Australia.</p>
                <p>Our mission is to build crazy, exciting worlds for you to explore and conquer.</p>
            </div>
        </div>
    );
};

export default CompanyIntro;
