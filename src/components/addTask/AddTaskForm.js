import React, { useState } from 'react';
import { useGetProjectsQuery } from '../../features/project/projectApi';
import { useGetTeamMemberQuery } from '../../features/teamMember/teamMemberApi';

const AddTaskForm = () => {

    const { data: teamMember } = useGetTeamMemberQuery();
    const { data: projects } = useGetProjectsQuery();

    //form state
    const [taskName, setTaskName] = useState('');
    const [member, setMember] = useState('');
    const [project, setProject] = useState('');
    const [deadline, setDeadline] = useState('');

    //function to handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ taskName, member, project, deadline });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
                <label htmlFor="lws-taskName">Task Name</label>
                <input
                    type="text"
                    name="taskName"
                    id="lws-taskName"
                    required
                    placeholder="Implement RTK Query"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </div>

            <div className="fieldContainer">
                <label>Assign To</label>
                <select
                    name="teamMember"
                    id="lws-teamMember"
                    required
                    value={member}
                    onChange={(e) => setMember(e.target.value)}>
                    <option value="" hidden defaultValue>Select Job</option>
                    {
                        teamMember?.map(member => <option
                            key={member.id}
                            value={member}>
                            {member.name}
                        </option>)
                    }
                </select>
            </div>
            <div className="fieldContainer">
                <label htmlFor="lws-projectName">Project Name</label>
                <select
                    id="lws-projectName"
                    name="projectName"
                    required
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                >
                    <option value="" hidden defaultValue>Select Project</option>
                    {
                        projects?.map(project => <option
                            key={project.id}
                            value={project.projectName}>
                            {project.projectName}
                        </option>)
                    }
                </select>
            </div>

            <div className="fieldContainer">
                <label htmlFor="lws-deadline">Deadline</label>
                <input
                    type="date"
                    name="deadline"
                    id="lws-deadline"
                    required
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
            </div>

            <div className="text-right">
                <button type="submit" className="lws-submit">Save</button>
            </div>
        </form>
    );
};

export default AddTaskForm;