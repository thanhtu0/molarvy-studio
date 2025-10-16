import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

function Section({ title, children }) {
    if (!children) {
        return null;
    }

    return (
        <div className={cx('section-container')}>
            <h1 className={cx('section-title')}>{title}</h1>
            <div className={cx('section-content')}>{children}</div>
        </div>
    );
}

export default Section;
