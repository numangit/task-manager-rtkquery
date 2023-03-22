import { apiSlice } from "../api/apiSlice";

const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({ url: "/tasks" })
        })
    })
});

export const { useGetTasksQuery } = taskApi;