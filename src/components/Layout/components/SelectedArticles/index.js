import classNames from 'classnames/bind';
import styles from './SelectedArticle.module.scss';
import Section from '~/components/common/Section';
import { articlesData } from '~/data/articlesData';

const cx = classNames.bind(styles);

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
