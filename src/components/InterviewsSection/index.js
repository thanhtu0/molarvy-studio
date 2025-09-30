import { useState, useRef } from 'react'; // 1. Import thêm useRef
import classNames from 'classnames/bind';
import styles from './InterviewsSection.module.scss';

import SectionTitle from '~/components/common/SectionTitle';
import ArticleCard from '~/components/common/ArticleCard';
import { img_1, img_2, img_3 } from '~/utils/images';
import Button from '~/components/Button';

const interviewsData = [
    {
        imageSrc: img_1,
        title: 'Q&A with Thomas Mahler',
        description:
            'This month we celebrate 8 years since the release of Ori and the Blind Forest on March 11, 2015. Five years later, Ori and the Will of the Wisps followed…',
        link: '#',
    },
    {
        imageSrc: img_2,
        title: 'Gamasutra Q&A: Designing the gorgeous...',
        description:
            'May 18, 2020 | By John Harris Released earlier this year, the “metroidvania” Ori and the Will of the Wisps is the critically-acclaimed, commercially successful sequel to 2015’s Ori and the Blind Forest….',
        link: '#',
    },
    {
        imageSrc: img_3,
        title: 'Laced Records: Ori composer Gareth Coker...',
        description:
            'Composer Gareth Coker chats to Laced With Wax about his latest game score for Ori and the Will of the Wisps — how he changed approach from Blind Forest, how he’s happy to hit players…',
        link: '#',
    },
    // {
    //     imageSrc: img_1,
    //     title: 'Another Interview Title 4',
    //     description:
    //         'By Alex Avard March 09, 2020 Timelessness is one of those treasured descriptives that every game aims for, but few manage to reach. Moon Studios’ Thomas Mahler – the game director behind Ori and the Blind Forest and its upcoming sequel, Ori and the Will of the Wisps – has a theory as to why that is. “All of these games are pursuing the most advanced graphics with higher resolutions, textures, and everything else. But the problem is that technology is always evolving, and it only takes a few years before a game that once looked amazing suddenly… doesn’t. I was just playing The Witcher 3 the…',
    //     link: '#',
    // },
    // {
    //     imageSrc: img_2,
    //     title: 'Developer Insights: The Art of Ori',
    //     description:
    //         'Alex Wiltshire  10th April 2020 / 5:00PM Ori And The Will Of The Wisps feels so good to play. The fluidity of Ori’s movement; his quickness and agility; the sense of his weight and presence in the world – he’s a product of both traditional animation and leading graphics technology which developer Moon Studios has built up over years to make a sequel that surpasses the already beautiful Ori And The Blind Forest. When creative director Thomas Mahler tells me he thinks it’ll be the reference for 2D platformer visuals for years to come, I think he’s could be right….',
    //     link: '#',
    // },
    { imageSrc: img_2, title: 'The Sound Design of Will of the Wisps', description: '...', link: '#' },
    { imageSrc: img_1, title: 'The Sound Design of Will of the Wisps', description: '...', link: '#' },
    { imageSrc: img_3, title: 'The Sound Design of Will of the Wisps', description: '...', link: '#' },
    { imageSrc: img_3, title: 'The Sound Design of Will of the Wisps', description: '...', link: '#' },
];

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
            {' '}
            <SectionTitle>Interviews</SectionTitle>
            <div className={cx('cards-grid')}>
                {interviewsData.slice(0, visibleItems).map((item, index) => (
                    <ArticleCard
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                        link={item.link}
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
