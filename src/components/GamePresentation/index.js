import classNames from 'classnames/bind';
import styles from './GamePresentation.module.scss';

const cx = classNames.bind(styles);

const GamePresentation = () => {
    return (
        <div className={cx('presentation-wrapper')}>
            <div className={cx('video-container')}>
                <iframe
                    src="https://www.youtube.com/embed/6u45Fa-Boa8"
                    title="Nine Sols 九日 - Crowdfunding Trailer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default GamePresentation;
