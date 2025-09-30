import classNames from 'classnames/bind';
import styles from './SectionTitle.module.scss';
import { bg_studio_text } from '~/utils/images';

const cx = classNames.bind(styles);

const SectionTitle = ({ children }) => {
    return (
        <h2 className={cx('section-title')} style={{ backgroundImage: `url(${bg_studio_text})` }}>
            {children}
        </h2>
    );
};

export default SectionTitle;
