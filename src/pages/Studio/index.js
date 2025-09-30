import classNames from 'classnames/bind';
import styles from './Studio.module.scss';

import StudioIntro from '~/components/StudioIntro';
import InterviewsSection from '~/components/InterviewsSection';

const cx = classNames.bind(styles);

function StudioPage() {
    return (
        <main className={cx('studio-page')}>
            <section className={cx('intro-section')}>
                <StudioIntro />
            </section>

            <section className={cx('interviews-section')}>
                <InterviewsSection />
            </section>
        </main>
    );
}

export default StudioPage;
