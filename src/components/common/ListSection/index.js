import classNames from 'classnames/bind';
import styles from './ListSection.module.scss';
import Section from '~/components/common/Section';

const cx = classNames.bind(styles);

function ListSection({ title, items, renderItem, className }) {
    return (
        <Section title={title}>
            <ul className={cx('list', className)}>
                {items.map((item, index) => (
                    <li key={index} className={cx('item')}>
                        {renderItem(item, index)}
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default ListSection;
