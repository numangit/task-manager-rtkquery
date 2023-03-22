import React from 'react';
import { useGetProjectsQuery } from '../../features/project/projectApi';
import ProjectListItem from './ProjectListItem';

const ProjectList = () => {

    const { data: projects, isLoading, isError, error } = useGetProjectsQuery();

    let content = null;

    if (isLoading) content = <div className="text-center">Loading...</div>;
    if (!isLoading && isError) content = <div className="text-center"> {error?.message}</div>;
    if (!isLoading && !isError && projects?.length === 0) content = <div className="text-center">No Projects found!</div>;
    if (!isLoading && !isError && projects?.length > 0) {
        content = projects.map(project => <ProjectListItem key={project.id} project={project} />)
    }

    return (
        <div>
            <h3 className="text-xl font-bold">Projects</h3>
            <div className="mt-3 space-y-4">
                {content}
            </div>
        </div>
    );
};

export default ProjectList;