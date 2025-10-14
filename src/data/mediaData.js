import { img_1, img_2, img_3 } from '~/utils/images';

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
