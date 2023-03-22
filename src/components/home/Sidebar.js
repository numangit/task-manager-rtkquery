import React from 'react';
import ProjectList from './ProjectList';
import TeamMembers from './TeamMembers';

const Sidebar = () => {
    return (
        <div className="sidebar">

            <ProjectList />

            <TeamMembers />

        </div>
    );
};

export default Sidebar;