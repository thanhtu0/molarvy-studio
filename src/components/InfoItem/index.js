import classNames from 'classnames/bind';
import styles from './InfoItem.module.scss';

const cx = classNames.bind(styles);

const InfoItem = ({ label, children }) => {
    if (!children && label !== 'Phone') {
        return null;
    }

    return (
        <div className={cx('info-item')}>
            <strong className={cx('info-label')}>{label}</strong>
            <div className={cx('info-content')}>{children}</div>
        </div>
    );
};

export default InfoItem;
