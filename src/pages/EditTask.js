import React from 'react';
import EditTaskForm from '../components/editTask/EditTaskForm';

const EditTask = () => {
    return (
        <div class="container relative">
            <main class="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <h1 class="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                    Edit Task for Your Team
                </h1>

                <div class="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                    <EditTaskForm />
                </div>
            </main>
        </div>
    );
};

export default EditTask;