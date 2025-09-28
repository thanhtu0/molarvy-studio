import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import Section from '~/components/common/Section';

const cx = classNames.bind(styles);

const videosData = [
    {
        title: 'Herdling Reveal Trailer',
        youtubeLink: 'https://www.youtube.com/watch?v=tUEcKBVzhQg',
    },
    {
        title: 'FAR: Changing Tides | Feature Reveal Trailer',
        youtubeLink: 'https://www.youtube.com/watch?v=r0odfW_g4Lk',
    },
];

function Videos() {
    return (
        <Section title="Videos">
            {videosData.map((video, index) => {
                const url = new URL(video.youtubeLink);
                const searchParams = new URLSearchParams(url.search);
                const embedId = searchParams.get('v'); // Lấy giá trị của tham số 'v'

                return (
                    <div key={index} className={cx('video-item')}>
                        <p className={cx('video-title-line')}>
                            <span>{video.title}</span>
                            <a href={video.youtubeLink} target="_blank" rel="noopener noreferrer">
                                YouTube
                            </a>
                        </p>
                        <div className={cx('video-embed-container')}>
                            <iframe
                                src={`https://www.youtube.com/embed/${embedId}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                );
            })}
        </Section>
    );
}

export default Videos;
