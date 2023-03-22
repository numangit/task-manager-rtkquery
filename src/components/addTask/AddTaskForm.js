import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProjectsQuery } from '../../features/project/projectApi';
import { useAddTaskMutation } from '../../features/task/taskApi';
import { useGetTeamMemberQuery } from '../../features/teamMember/teamMemberApi';

const AddTaskForm = () => {

    const { data: members } = useGetTeamMemberQuery();
    const { data: projects } = useGetProjectsQuery();
    const [addTask] = useAddTaskMutation();

    //form state
    const [taskName, setTaskName] = useState('');
    const [teamMember, setTeamMember] = useState({});
    const [project, setProject] = useState({});
    const [deadline, setDeadline] = useState('');

    const navigate = useNavigate();

    //function to handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            taskName,
            teamMember: JSON.parse(teamMember),
            project: JSON.parse(project),
            deadline
        });
        navigate('/');
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
                    value={teamMember}
                    onChange={(e) => setTeamMember(e.target.value)}>
                    <option value="" hidden defaultValue>Select Member</option>
                    {
                        members?.map(member => <option
                            key={member.id}
                            value={JSON.stringify(member)}>
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
                            value={JSON.stringify(project)}>
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