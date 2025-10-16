import { Link } from 'react-router-dom';
import ListSection from '~/components/common/ListSection';
import { projectList } from '~/data/projectsListPresskit';

function Projects() {
    return (
        <ListSection
            title="Projects"
            items={projectList}
            renderItem={(project) => <Link to={project.path}>{project.name}</Link>}
        />
    );
}

export default Projects;
