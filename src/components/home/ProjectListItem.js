import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProject } from '../../features/filter/filterSlice';

const ProjectListItem = ({ project }) => {

    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(true);
    const { colorClass, projectName } = project;

    //handle project selection
    const handleProject = (e) => {
        if (e.target.checked) dispatch(setProject(projectName));
        // if (e.target.checked) console.log(projectName);
    };

    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                className={colorClass}
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                onClick={handleProject} />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default ProjectListItem;