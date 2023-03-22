import React from 'react';

const ProjectListItem = ({ project }) => {

    const { colorClass, projectName } = project;

    return (
        <div className="checkbox-container">
            <input type="checkbox" className={colorClass} checked />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default ProjectListItem;