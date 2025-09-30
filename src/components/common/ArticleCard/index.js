import classNames from 'classnames/bind';
import styles from './ArticleCard.module.scss';
import { bg_studio_text } from '~/utils/images';

const cx = classNames.bind(styles);

const ArticleCard = ({ imageSrc, title, description, link = '#' }) => {
    return (
        <div className={cx('card')} style={{ backgroundImage: `url(${bg_studio_text})` }}>
            <div className={cx('card-image-wrapper')}>
                <img src={imageSrc} alt={title} className={cx('card-image')} />
            </div>
            <div className={cx('card-content')}>
                <h3 className={cx('card-title')}>
                    <a href={link} className={cx('card-link')}>
                        {title}
                    </a>
                </h3>
                <p className={cx('card-description')}>{description}</p>
            </div>
        </div>
    );
};

export default ArticleCard;
