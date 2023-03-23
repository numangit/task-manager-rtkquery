import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({ url: "/tasks" })
        }),
        getTask: builder.query({
            query: (id) => ({ url: `/tasks/${id}` })
        }),
        addTask: builder.mutation({
            query: (data) => ({ url: "/tasks", method: 'POST', body: data }),
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
            query: ({ id, data }) => ({ url: `/tasks/${id}`, method: 'PATCH', body: data })
        }),
        deleteTask: builder.mutation({
            query: (id) => ({ url: `/tasks/${id}`, method: 'DELETE' }),
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                        const deleteTask = draft.findIndex(task => task.id === id);
                        draft.splice(deleteTask, 1);
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