import classNames from 'classnames/bind';
import styles from './StudioIntro.module.scss';

const cx = classNames.bind(styles);

const StudioIntro = () => {
    return (
        <div className={cx('intro-container')}>
            <h1 className={cx('brand-name')}>Molarvy</h1>
            <h1 className={cx('studio-subtitle')}>STUDIOS</h1>
            <p className={cx('description')}>
                Moon Studios is an independent video game development studio, founded in 2010 by
                <b> Thomas Mahler</b> (former Cinematic Artist at Blizzard Entertainment and )<b> Gennadiy Korol </b>
                (former Senior Graphics Engineer at Animation Lab). The company mainly focuses on highly refined
                gameplay mechanics within its products and prides itself on an excessive ‘iterative polish’ process.
                Moon Studios is a distributed development house: All team members are spread throughout the world,
                allowing Moon to work with the best and most talented people in the games industry. In 2011, Moon
                Studios partnered with Microsoft to develop
                <b>Ori and the Will of the Wisps</b>
            </p>
            <p className={cx('description')}>
                To learn more about <b>No Rest for the Wicked</b>, Moon Studios’ next highly-anticipated action RPG
                game, head over to{' '}
                <a href="https://norestforthewicked.com" bis_skin_checked="1">
                    norestforthewicked.com
                </a>
                !
            </p>
        </div>
    );
};

export default StudioIntro;
