import React from 'react';
import { useGetProjectsQuery } from '../../features/project/projectApi';
import { useGetTeamMemberQuery } from '../../features/teamMember/teamMemberApi';

const AddTaskForm = () => {

    const { data: teamMember } = useGetTeamMemberQuery();
    const { data: projects } = useGetProjectsQuery();

    return (
        <form className="space-y-6">
            <div className="fieldContainer">
                <label htmlFor="lws-taskName">Task Name</label>
                <input
                    type="text"
                    name="taskName"
                    id="lws-taskName"
                    required
                    placeholder="Implement RTK Query"
                />
            </div>

            <div className="fieldContainer">
                <label>Assign To</label>
                <select name="teamMember" id="lws-teamMember" required>
                    <option value="" hidden selected>Select Job</option>
                    {
                        teamMember?.map(member => <option
                            key={member.id}
                            value={member.name}>
                            {member.name}
                        </option>)
                    }
                </select>
            </div>
            <div className="fieldContainer">
                <label htmlFor="lws-projectName">Project Name</label>
                <select id="lws-projectName" name="projectName" required>
                    <option value="" hidden selected>Select Project</option>
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
                <input type="date" name="deadline" id="lws-deadline" required />
            </div>

            <div className="text-right">
                <button type="submit" className="lws-submit">Save</button>
            </div>
        </form>
    );
};

export default AddTaskForm;