import classNames from 'classnames/bind';
import styles from './Award.module.scss';
import Section from '~/components/common/Section';
import { awardsList } from '~/data/awardsData';

const cx = classNames.bind(styles);

function Awards() {
    return (
        <Section title="Awards & Recognition">
            <ul className={cx('awards-list')}>
                {awardsList.map((award, index) => (
                    <li key={index} className={cx('award-item')}>
                        {award}
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default Awards;
