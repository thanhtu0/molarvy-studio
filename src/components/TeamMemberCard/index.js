import classNames from 'classnames/bind';
import styles from './TeamMemberCard.module.scss';

const cx = classNames.bind(styles);

const TeamMemberCard = ({ imageSrc, name, description }) => {
    return (
        <div className={cx('card')}>
            <div className={cx('image-container')}>
                <img src={imageSrc} alt={name} className={cx('profile-image')} />
            </div>
            <h3 className={cx('name')}>{name}</h3>
            <p className={cx('description')}>{description}</p>
        </div>
    );
};

export default TeamMemberCard;
