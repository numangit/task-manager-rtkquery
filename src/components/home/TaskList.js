import React from 'react';
import { useGetTasksQuery } from '../../features/task/taskApi';
import TaskListItem from './TaskListItem';

const TaskList = () => {

    const { data: tasks, isLoading, isError, error } = useGetTasksQuery();

    let content = null;

    if (isLoading) content = <div className="text-center">Loading..</div>;
    if (!isLoading && isError) content = <div className="text-center"> {error?.message}</div>;
    if (!isLoading && !isError && tasks?.length === 0) content = <div className="text-center">No tasks found!</div>;
    if (!isLoading && !isError && tasks?.length > 0) {
        content = tasks.map(task => <TaskListItem key={task.id} task={task} />)
    }

    return (
        <div className="lws-task-list">
            {content}
        </div>
    );
};

export default TaskList;