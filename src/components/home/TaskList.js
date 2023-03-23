import React from 'react';
import { useSelector } from 'react-redux';
import { useGetTasksQuery } from '../../features/task/taskApi';
import TaskListItem from './TaskListItem';

const TaskList = () => {

    const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
    const { searchKeyword, selectedProject } = useSelector(state => state.filter);

    //function to filter by search
    const filterBySearch = (task) => {
        if (task.taskName.toLowerCase().indexOf(searchKeyword.toLowerCase()) !== -1) {
            return true;
        } else if (searchKeyword === "") {
            return true;
        } else {
            return false;
        }
    };

    //function to sort by project
    const sortByProject = (task) => {
        const projectIndex = selectedProject.indexOf(task.project.projectName);
        if (projectIndex > -1) {
            return true;
        } else {
            return false;
        }
    };

    let content = null;

    if (isLoading) content = <div className="text-center">Loading..</div>;
    if (!isLoading && isError) content = <div className="text-center"> {error?.message}</div>;
    if (!isLoading && !isError && tasks?.length === 0) content = <div className="text-center">No tasks found!</div>;
    if (!isLoading && !isError && tasks?.length > 0) {
        content = tasks.filter(filterBySearch).filter(sortByProject).map(task => <TaskListItem key={task.id} task={task} />)
    }

    return (
        <div className="lws-task-list">
            {content}
        </div>
    );
};

export default TaskList;