import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import CrowdfundingStats from '~/components/CrowdfundingStats';
import GamePresentation from '~/components/GamePresentation';
import HeroBanner from '~/components/HeroBanner';
import { bg_gv } from '~/utils/images';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <>
            <HeroBanner />

            <div className={cx('main-content')} style={{ backgroundImage: `url(${bg_gv})` }}>
                <div className={cx('showcase-container')}>
                    <div className={cx('showcase-header')}>
                        <h1 className={cx('showcase-title')}>NINE SOLS</h1>
                        <p className={cx('showcase-subtitle')}>
                            A hand-drawn, deflection-focused, Taopunk style 2D action-platformer from Red Candle Games
                        </p>
                    </div>

                    <div className={cx('columns-wrapper')}>
                        <GamePresentation />
                        <CrowdfundingStats />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
