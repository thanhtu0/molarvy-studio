import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Media.module.scss';

import MediaSection from '~/components/MediaSection';
import Modal from '~/components/common/Modal';
import { img_1, img_2, img_3 } from '~/utils/images';

const cx = classNames.bind(styles);

const getYoutubeThumbnail = (youtubeLink) => {
    try {
        const url = new URL(youtubeLink);
        const searchParams = new URLSearchParams(url.search);
        const videoId = searchParams.get('v');
        if (videoId) {
            return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }
    } catch (error) {
        console.error('Invalid YouTube link:', youtubeLink, error);
    }
    return null;
};

export const mediaData = {
    videos: [
        {
            type: 'video',
            title: 'Herdling Reveal Trailer',
            youtubeLink: 'https://www.youtube.com/watch?v=tUEcKBVzhQg',
            thumbnailSrc: getYoutubeThumbnail('https://www.youtube.com/watch?v=tUEcKBVzhQg'),
        },
        {
            type: 'video',
            title: 'FAR: Changing Tides | Feature Reveal Trailer',
            youtubeLink: 'https://www.youtube.com/watch?v=r0odfW_g4Lk',
            thumbnailSrc: getYoutubeThumbnail('https://www.youtube.com/watch?v=r0odfW_g4Lk'),
        },
        {
            type: 'video',
            title: 'Herdling Reveal Trailer',
            youtubeLink: 'https://www.youtube.com/watch?v=tUEcKBVzhQg',
            thumbnailSrc: getYoutubeThumbnail('https://www.youtube.com/watch?v=tUEcKBVzhQg'),
        },
    ],
    screenshots: [
        {
            type: 'image',
            title: 'Screenshot Ori and the Will of the Wisps E3 2019 01',
            thumbnailSrc: img_1,
            fullSrc: img_1,
        },
        {
            type: 'image',
            title: 'Screenshot Ori and the Will of the Wisps E3 2019 01',
            thumbnailSrc: img_2,
            fullSrc: img_2,
        },
        {
            type: 'image',
            title: 'Screenshot Ori and the Will of the Wisps E3 2019 01',
            thumbnailSrc: img_3,
            fullSrc: img_3,
        },
    ],
    wallpapers: [
        {
            type: 'image',
            title: 'Wallpaper 01',
            thumbnailSrc: img_2,
            fullSrc: img_2,
        },
        {
            type: 'image',
            title: 'Wallpaper 02',
            thumbnailSrc: img_1,
            fullSrc: img_1,
        },
        {
            type: 'image',
            title: 'Wallpaper 03',
            thumbnailSrc: img_3,
            fullSrc: img_3,
        },
    ],
};

function MediaPage() {
    const [modalContent, setModalContent] = useState(null);

    const handleCardClick = (item) => {
        if (item.type === 'video') {
            const url = new URL(item.youtubeLink);
            const searchParams = new URLSearchParams(url.search);
            const videoId = searchParams.get('v');
            setModalContent({ ...item, videoId: videoId });
        } else {
            setModalContent(item);
        }
    };

    const handleCloseModal = () => {
        setModalContent(null);
    };

    const renderModalBody = () => {
        if (!modalContent) return null;

        if (modalContent.type === 'video') {
            if (!modalContent.videoId) return <p>Không tìm thấy Video ID.</p>;
            return (
                <div className={cx('video-responsive')}>
                    <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${modalContent.videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={modalContent.title}
                    />
                </div>
            );
        }

        if (modalContent.type === 'image') {
            return <img src={modalContent.fullSrc} alt={modalContent.title} style={{ maxWidth: '100%' }} />;
        }
    };

    return (
        <main className={cx('media-page')}>
            <div className={cx('main-media-title')}>Media</div>
            <MediaSection title="Videos" items={mediaData.videos} onCardClick={handleCardClick} />
            <MediaSection title="Screenshots" items={mediaData.screenshots} onCardClick={handleCardClick} />
            <MediaSection title="Wallpapers" items={mediaData.wallpapers} onCardClick={handleCardClick} />

            <Modal show={!!modalContent} onClose={handleCloseModal} title={modalContent?.title}>
                {renderModalBody()}
            </Modal>
        </main>
    );
}

export default MediaPage;
