import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './NewDetail.module.scss';
import { newsData } from '~/data/newsData';
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

function NewDetailPage() {
    const { slug } = useParams();
    const newItem = newsData.find((item) => item.slug === slug);

    if (!newItem) {
        return <div className={cx('not-found')}>New not found!</div>;
    }

    return (
        <main className={cx('detail-page')}>
            <article className={cx('new-article')} style={{ backgroundImage: `url(${bg_studio})` }}>
                <h1 className={cx('title')}>{newItem.title}</h1>

                <div className={cx('content')}>
                    {newItem.contentBlocks ? (
                        newItem.contentBlocks.map((block, index) => <ContentBlock key={index} block={block} />)
                    ) : (
                        <p>{newItem.description}</p>
                    )}
                </div>
            </article>
        </main>
    );
}

export default NewDetailPage;
