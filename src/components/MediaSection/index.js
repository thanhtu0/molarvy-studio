import classNames from 'classnames/bind';
import styles from './MediaSection.module.scss';
import SectionTitle from '~/components/common/SectionTitle';
import MediaCard from '~/components/MediaCard';

const cx = classNames.bind(styles);

const MediaSection = ({ title, items, onCardClick }) => {
    return (
        <section className={cx('media-section')}>
            <SectionTitle>{title}</SectionTitle>
            <div className={cx('grid')}>
                {items.map((item, index) => (
                    <MediaCard
                        key={index}
                        type={item.type}
                        thumbnailSrc={item.thumbnailSrc}
                        title={item.title}
                        onClick={() => onCardClick(item)}
                    />
                ))}
            </div>
        </section>
    );
};

export default MediaSection;
