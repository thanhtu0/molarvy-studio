import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './InterviewDetail.module.scss';
import { interviewsData } from '~/data/interviewsData';
import { bg_studio } from '~/utils/images';

const cx = classNames.bind(styles);

const ContentBlock = ({ block }) => {
    switch (block.type) {
        case 'question':
            return (
                <p className={cx('question')}>
                    <strong>Q:</strong> {block.content}
                </p>
            );
        case 'statement':
            return <p className={cx('statement')}>{block.content}</p>;
        case 'answer':
            return <p className={cx('answer')}>{block.content}</p>;
        case 'paragraph':
            return <p>{block.content}</p>;
        case 'meta':
            return <p className={cx('meta-info')}>{block.content}</p>;
        case 'image':
            return block.src && <img src={block.src} alt={block.alt || ''} className={cx('inline-image')} />;

        case 'subheading':
            return <p className={cx('subheading')}>{block.content}</p>;

        case 'link':
            return (
                <a href={block.href} className={cx('external-link')} target="_blank" rel="noopener noreferrer">
                    {block.text}
                </a>
            );

        default:
            return null;
    }
};

function InterviewDetailPage() {
    const { slug } = useParams();
    const interview = interviewsData.find((item) => item.slug === slug);

    if (!interview) {
        return <div className={cx('not-found')}>Interview not found!</div>;
    }

    return (
        <main className={cx('detail-page')}>
            <article className={cx('interview-article')} style={{ backgroundImage: `url(${bg_studio})` }}>
                <h1 className={cx('title')}>{interview.title}</h1>

                <div className={cx('content')}>
                    {interview.contentBlocks ? (
                        interview.contentBlocks.map((block, index) => <ContentBlock key={index} block={block} />)
                    ) : (
                        <p>{interview.description}</p>
                    )}
                </div>
            </article>
        </main>
    );
}

export default InterviewDetailPage;
