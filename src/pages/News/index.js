import classNames from 'classnames/bind';
import styles from './New.module.scss';
import { useRef, useState } from 'react';

import { newsData } from '~/data/newsData';
import SectionTitle from '~/components/common/SectionTitle';
import ArticleCard from '~/components/common/ArticleCard';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const ITEMS_PER_PAGE = 3;

function New() {
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

    const isShowingAll = visibleItems >= newsData.length;
    const isShowingMoreThanInitial = visibleItems > ITEMS_PER_PAGE;

    return (
        <main className={cx('news-page')}>
            <div ref={sectionRef} className={cx('news-wrapper', 'has-bg')}>
                <SectionTitle>News</SectionTitle>
                <div className={cx('cards-grid')}>
                    {newsData.slice(0, visibleItems).map((item, index) => (
                        <ArticleCard
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            link={`/news/${item.slug}`}
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
        </main>
    );
}

export default New;
