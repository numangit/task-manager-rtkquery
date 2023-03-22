import React, { useState } from 'react';

const ProjectListItem = ({ project }) => {
    const [isChecked, setIsChecked] = useState();
    const { colorClass, projectName } = project;

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                className={colorClass}
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.value)} />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default ProjectListItem;