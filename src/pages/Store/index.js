import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import Button from '~/components/Button';
import { bg_store } from '~/utils/images';

const cx = classNames.bind(styles);

function StorePage() {
    return (
        <div className={cx('hero-banner-wrapper')} style={{ backgroundImage: `url(${bg_store})` }}>
            <div className={cx('overlay')}></div>
            <div className={cx('hero-content')}>
                <h1 className={cx('main-media-title')}>Store</h1>
                <div className={cx('button-group')}>
                    <a href="https://store.steampowered.com/app/123456" target="_blank" rel="noopener noreferrer">
                        <Button outline leftIcon={<i className="fa-brands fa-steam"></i>}>
                            Steam
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StorePage;
