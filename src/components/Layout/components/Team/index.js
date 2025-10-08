import classNames from 'classnames/bind';
import styles from './Team.module.scss';
import Section from '~/components/common/Section';
import { teamMembers } from '~/data/teamMembers';

const cx = classNames.bind(styles);

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
