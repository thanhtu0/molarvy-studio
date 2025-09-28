import classNames from 'classnames/bind';
import styles from './SelectedArticle.module.scss';
import Section from '~/components/common/Section';

const cx = classNames.bind(styles);

const articlesData = [
    {
        quote: 'Wonderfully eerie and atmospheric, with a painterly grey-hued palette, you discover the stark narrative via ruins and wrecks. A striking game ... a subtly moving experience.',
        author: 'Holly Nielsen',
        publication: 'The Guardian',
        url: '#',
    },
    {
        quote: 'Far: Lone Sails is a poem disguised as a video game ... The payoff is standing at the prow, watching the fantastical landscape roll by in the background. Rather than perks and unlocks, the reward here is quiet contemplation. ... Far is greater than the sum of its parts.',
        author: 'Charlie Hall',
        publication: 'Polygon.com',
        url: '#',
    },
    {
        quote: 'A lonely, contemplative journey across a barren landscape ... I really enjoyed it.',
        author: 'Andy Chalk',
        publication: 'PCGamer.com',
        url: '#',
    },
    {
        quote: 'Far: Lone Sails is the kind of game that sticks with you after seeing credits. It delivers a fascinating mystery in a strange land with engaging puzzles, and couples that with a relationship between the player and their oversized mode of transportation. 8.25 / 10',
        author: 'Kyle Hilliard',
        publication: 'Gameinformer.com',
        url: '#',
    },
];

function SelectedArticles() {
    return (
        <Section title="Selected Articles">
            <div className={cx('articles-list')}>
                {articlesData.map((article, index) => (
                    <blockquote key={index} className={cx('article-item')}>
                        <p className={cx('quote-text')}>"{article.quote}"</p>
                        <footer className={cx('quote-attribution')}>
                            - {article.author},{' '}
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.publication}
                            </a>
                        </footer>
                    </blockquote>
                ))}
            </div>
        </Section>
    );
}

export default SelectedArticles;
