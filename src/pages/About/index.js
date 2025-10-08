import classNames from 'classnames/bind';
import styles from './About.module.scss';

import CompanyIntro from '~/components/CompanyIntro';
import TeamMemberCard from '~/components/TeamMemberCard';
import { teamsData } from '~/data/teamsData';

const cx = classNames.bind(styles);

function AboutPage() {
    return (
        <main className={cx('about-page')}>
            <CompanyIntro />

            <section className={cx('team-section')}>
                <h2 className={cx('section-title')}>THE TEAM</h2>
                <div className={cx('team-grid')}>
                    {teamsData.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            imageSrc={member.imageSrc}
                            name={member.name}
                            description={member.description}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default AboutPage;
