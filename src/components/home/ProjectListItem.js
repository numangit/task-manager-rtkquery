import React, { useState } from 'react';

const ProjectListItem = ({ project }) => {

    const [isChecked, setIsChecked] = useState(true);
    const { colorClass, projectName } = project;

    //handle project selection
    const handleProject = () => {
        console.log(isChecked);
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                className={colorClass}
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)} />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default ProjectListItem;