import classNames from 'classnames/bind';
import styles from './CrowdfundingStats.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const CrowdfundingStats = () => {
    return (
        <div className={cx('stats-wrapper')}>
            <div className={cx('progress-bar')}>
                <div className={cx('progress-fill')}></div>
            </div>
            <div className={cx('funding-info')}>
                <span className={cx('pledged-amount')}>NT$</span>
                <span className={cx('percentage')}>13,616,238</span>
                <span className={cx('percentage')}>454%</span>
            </div>
            <p className={cx('goal-text')}>pledged of NT$ 3,000,000 goal</p>

            <span className={cx('backers-count')}>8900</span>
            <span className={cx('backers-label')}>backers</span>
            {/* <a href="https://store.steampowered.com/app/123456" target="_blank" rel="noopener noreferrer"> */}
            <Button
                disabledButton
                leftIcon={<i class="fa-solid fa-hand-holding-heart"></i>}
                className={cx('campaign-status')}
            >
                Campaign Ended
            </Button>
            {/* </a> */}

            <p className={cx('end-date')}>campaign ends 6/24/2022 22:59</p>
        </div>
    );
};

export default CrowdfundingStats;
