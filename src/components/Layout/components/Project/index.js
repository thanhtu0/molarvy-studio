import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';

import Section from '~/components/common/Section';

const cx = classNames.bind(styles);

const projectList = [
    { name: 'The Ghost of Lake', path: '/projects/the-ghost-of-lake' },
    // { name: 'Herdling', path: '/projects/herdling' },
    // { name: 'Far Lone Sails', path: '/projects/far-lone-sails' },
];

function Projects() {
    return (
        <Section title="Projects">
            <ul className={cx('project-list')}>
                {projectList.map((project, index) => (
                    <li key={index} className={cx('project-item')}>
                        <Link to={project.path}>{project.name}</Link>
                    </li>
                ))}
            </ul>
        </Section>
    );
}

export default Projects;
