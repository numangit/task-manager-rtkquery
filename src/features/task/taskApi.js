import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getTasks: builder.query({
            query: () => ({
                url: "/tasks"
            })
        }),

        getTask: builder.query({
            query: (id) => ({
                url: `/tasks/${id}`
            })
        }),

        addTask: builder.mutation({
            query: (data) => ({
                url: "/tasks",
                method: 'POST',
                body: data
            }),
            async onQueryStarted({ data }, { dispatch, queryFulfilled }) {
                try {
                    const { data: addedTask } = await queryFulfilled
                    dispatch(
                        apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                            draft.push(addedTask);
                        })
                    )
                } catch { }
            },
        }),

        editTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: data
            }),
            async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
                try {
                    const { data: updatedTask } = await queryFulfilled;

                    dispatch(
                        apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {

                            const TargetedTask = draft?.find(task => task?.id === id);

                            TargetedTask.taskName = updatedTask.taskName;
                            TargetedTask.teamMember = updatedTask.teamMember;
                            TargetedTask.project = updatedTask.project;
                            TargetedTask.deadline = updatedTask.deadline;
                        })
                    )
                } catch { }
            },
        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                        return draft?.filter((task) => task?.id !== id) //does'nt work without return
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            },
        })
    })
});

export const {
    useGetTasksQuery,
    useGetTaskQuery,
    useAddTaskMutation,
    useEditTaskMutation,
    useDeleteTaskMutation
} = taskApi;