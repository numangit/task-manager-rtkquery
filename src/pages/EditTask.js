import React from 'react';
import { useParams } from 'react-router-dom';
import EditTaskForm from '../components/editTask/EditTaskForm';
import { useGetTaskQuery } from '../features/task/taskApi';

const EditTask = () => {

    const { taskId } = useParams();
    const { data: task, isLoading, isError, error } = useGetTaskQuery(taskId);

    let content = null;

    if (isLoading) content = <div className="text-center">Loading..</div>;
    if (!isLoading && isError) content = <div className="text-center"> {error?.message}</div>;
    if (!isLoading && !isError && !task?.id) content = <div className="text-center">No task found!</div>;
    if (!isLoading && !isError && task?.id) {
        content = <EditTaskForm key={task.id} task={task} />
    }

    return (
        <div className="container relative">
            <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                    Edit Task for Your Team
                </h1>

                <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                    {content}
                </div>
            </main>
        </div>
    );
};

export default EditTask;