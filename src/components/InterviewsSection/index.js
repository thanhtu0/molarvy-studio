import { useState, useRef } from 'react'; // 1. Import thêm useRef
import classNames from 'classnames/bind';
import styles from './InterviewsSection.module.scss';

import SectionTitle from '~/components/common/SectionTitle';
import ArticleCard from '~/components/common/ArticleCard';
import Button from '~/components/Button';
import { interviewsData } from '~/data/interviewsData';

const cx = classNames.bind(styles);
const ITEMS_PER_PAGE = 3;

const InterviewsSection = () => {
    const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
    const sectionRef = useRef(null);

    const handleLoadMore = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + ITEMS_PER_PAGE);
    };

    const handleShowLess = () => {
        setVisibleItems(ITEMS_PER_PAGE);
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const isShowingAll = visibleItems >= interviewsData.length;
    const isShowingMoreThanInitial = visibleItems > ITEMS_PER_PAGE;

    return (
        <div ref={sectionRef} className={cx('interviews-wrapper', 'has-bg')}>
            <SectionTitle>Interviews</SectionTitle>
            <div className={cx('cards-grid')}>
                {interviewsData.slice(0, visibleItems).map((item, index) => (
                    <ArticleCard
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                        link={`/interviews/${item.slug}`}
                    />
                ))}
            </div>
            <div className={cx('btn-container')}>
                {!isShowingAll && (
                    <Button viewMore onClick={handleLoadMore}>
                        Load more news
                    </Button>
                )}

                {isShowingAll && isShowingMoreThanInitial && (
                    <Button viewMore onClick={handleShowLess}>
                        {' '}
                        Show less
                    </Button>
                )}
            </div>
        </div>
    );
};

export default InterviewsSection;
