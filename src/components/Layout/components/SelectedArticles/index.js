import ListSection from '~/components/common/ListSection';
import { articlesData } from '~/data/articlesData';

function SelectedArticles() {
    return (
        <ListSection
            title="Selected Articles"
            items={articlesData}
            renderItem={(article) => (
                <div className="article-item">
                    <p className="quote-text">"{article.quote}"</p>
                    <footer className="quote-attribution">
                        - {article.author},{' '}
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.publication}
                        </a>
                    </footer>
                </div>
            )}
        />
    );
}

export default SelectedArticles;
