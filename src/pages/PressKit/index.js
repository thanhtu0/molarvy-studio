import classNames from 'classnames/bind';
import styles from './PressKit.module.scss';

import { logo } from '~/utils/images';
import {
    Awards,
    Contact,
    Description,
    FactSheet,
    History,
    Images,
    LogoAndIcon,
    SelectedArticles,
    Videos,
    Team,
    Projects,
} from '~/components/Layout/components';

const cx = classNames.bind(styles);

function PressKit() {
    const createId = (str) => str.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');

    return (
        <>
            <img src={logo} alt="logo-image" className={cx('logo-image')} />

            <div className={cx('details-section')}>
                <div id={createId('Factsheet')} className={cx('factSheet-wrapper')}>
                    <FactSheet />
                </div>
                <div className={cx('description-wrapper')}>
                    <div id={createId('Description')}>
                        <Description />
                    </div>
                    <div id={createId('History')}>
                        <History />
                    </div>
                    <div id={createId('Projects')}>
                        <Projects />
                    </div>
                </div>
            </div>

            <div id={createId('Videos')}>
                <Videos />
            </div>

            <div id={createId('Images')}>
                <Images />
            </div>

            <div id={createId('Logo & Icon')}>
                <LogoAndIcon />
            </div>

            <div id={createId('Awards & Recognition')}>
                <Awards />
            </div>

            <div id={createId('Selected Articles')}>
                <SelectedArticles />
            </div>

            <div className={cx('additional-info-section')}>
                <div id={createId('Team')} className={cx('team-section')}>
                    <Team />
                </div>
                <div id={createId('Contact')} className={cx('contact-section')}>
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default PressKit;
