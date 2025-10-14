import classNames from 'classnames/bind';
import styles from './MediaCard.module.scss';

const cx = classNames.bind(styles);

const MediaCard = ({ type = 'image', thumbnailSrc, title, onClick }) => {
    return (
        <div className={cx('card')} onClick={onClick}>
            <div className={cx('thumbnail-wrapper')}>
                <img src={thumbnailSrc} alt={title} className={cx('thumbnail')} />
                <div className={cx('hover-overlay')}>
                    {type === 'video' ? (
                        <i className={cx('icon', 'video-icon', 'fa-brands', 'fa-youtube')}></i>
                    ) : (
                        <i className={cx('icon', 'fa-solid', 'fa-magnifying-glass')}></i>
                    )}
                </div>
            </div>

            <div className={cx('title-container')}>
                <p className={cx('title')}>{title}</p>
            </div>
        </div>
    );
};

export default MediaCard;
