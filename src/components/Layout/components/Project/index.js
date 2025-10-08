import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';

import Section from '~/components/common/Section';
import { projectList } from '~/data/projectsListPresskit';

const cx = classNames.bind(styles);

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
