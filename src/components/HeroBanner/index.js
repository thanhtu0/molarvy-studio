import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './HeroBanner.module.scss';
import Button from '~/components/Button';
import Modal from '~/components/common/Modal';
import { poster_sword } from '~/utils/images';

const cx = classNames.bind(styles);

const HeroBanner = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={cx('hero-banner-wrapper')} style={{ backgroundImage: `url(${poster_sword})` }}>
            <div className={cx('overlay')}></div>
            <div className={cx('hero-content')}>
                <h1 className={cx('game-title-hero')}>The Ghost of Lake</h1>
                <p className={cx('game-description')}>
                    The Ghost of Lake is a haunting adventure where you uncover dark secrets, face mysterious creatures,
                    and survive the cursed waters of an ancient lake.
                </p>
                <div className={cx('button-group')}>
                    <a href="https://store.steampowered.com/app/123456" target="_blank" rel="noopener noreferrer">
                        <Button outline leftIcon={<i className="fa-brands fa-steam"></i>}>
                            Steam
                        </Button>
                    </a>
                    <Button fill onClick={handleOpenModal} leftIcon={<i className="fa-solid fa-circle-play"></i>}>
                        Trailer
                    </Button>
                </div>
            </div>
            <Modal show={showModal} onClose={handleCloseModal} title="Trailer">
                <div className={cx('video-wrapper')}>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/ysz5S6PUM-U"
                        title="Game Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Modal>
        </div>
    );
};

export default HeroBanner;
