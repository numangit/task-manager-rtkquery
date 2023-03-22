import React from 'react';

const TeamMember = ({ member }) => {

    const { name, avatar } = member;

    return (
        <div className="checkbox-container">
            <img src={avatar} className="team-avater" alt="avatar" />
            <p className="label">{name}</p>
        </div>
    );
};

export default TeamMember;