import classNames from 'classnames/bind';
import styles from './Team.module.scss';
import Section from '~/components/common/Section';

const cx = classNames.bind(styles);

const teamMembers = [
    { name: 'Don Schmocker', role: 'Co-Founder, Art Director' },
    { name: 'Goran Saric', role: 'Co-Founder, Managing Director' },
    { name: 'Martina Hugentobler', role: 'Animation' },
    { name: 'Philipp Stern', role: 'Game & Level Design' },
    { name: 'Fabio Baumgartner', role: 'Game Design Lead, Sound Design' },
];

function Team() {
    return (
        <Section title="Team & Repeating Collaborator">
            <div className={cx('team-list')}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={cx('team-member')}>
                        <p className={cx('member-name')}>{member.name}</p>
                        <p className={cx('member-role')}>{member.role}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Team;
