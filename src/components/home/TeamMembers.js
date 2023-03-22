import React from 'react';
import { useGetTeamMemberQuery } from '../../features/teamMember/teamMemberApi';

const TeamMembers = () => {

    const { data: teamMembers, isError, isLoading, error } = useGetTeamMemberQuery();

    let content = null;

    if (isLoading) content = <div className="text-center">Loading..</div>;
    if (!isLoading && isError) content = <div className="text-center"> {error?.message}</div>;
    if (!isLoading && !isError && teamMembers?.length === 0) content = <div className="text-center">No members found!</div>;
    if (!isLoading && !isError && teamMembers?.length > 0) {
        content = teamMembers.map(member => <div className="checkbox-container">
            <img src={member.avatar} className="team-avater" alt="" />
            <p className="label">{member.name}</p>
        </div>)
    }

    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold">Team Members</h3>
            <div className="mt-3 space-y-4">
                {content}
            </div>
        </div>
    );
};

export default TeamMembers;