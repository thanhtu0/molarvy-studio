import classNames from 'classnames/bind';
import styles from './Award.module.scss';
import Section from '~/components/common/Section';

const cx = classNames.bind(styles);

const awardsList = [
    '"Pocket Gamer Awards Best Narrative Game 2021 (Nominee)" - FAR: Lone Sails',
    '"Pocket Gamer Awards Best Mobile Conversion 2021 (Nominee)" - FAR: Lone Sails',
    '"TapTap Award Best Indie Game 2020 (Winner)" - FAR: Lone Sails',
    '"Reboot Develop Blue Indie Award Game of the Year 2019 (Winner)" - FAR: Lone Sails',
    '"Deutscher Computerspielpreis Best International Game 2019 (Nominee)" - FAR: Lone Sails',
    '"Swiss Game Awards Main Prize 2019 (Winner)" - FAR: Lone Sails',
    '"Game Developers Choice Awards Best Debut 2019 (Honorable Mention)" - FAR: Lone Sails',
    '"Golden Joystick Awards Best Visual Design 2018 (Nominee)" - FAR: Lone Sails',
];

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
