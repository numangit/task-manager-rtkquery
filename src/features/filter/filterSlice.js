import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchKeyword: "",
    selectedProject: []
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.searchKeyword = action.payload
        },

        setProject: (state, action) => {
            state.selectedProject.forEach(project => {
                const projectIndex = state.selectedProject.findIndex(project => project === action.payload);
                if (projectIndex !== -1) {
                    state.selectedProject.push(action.payload)
                } else {
                    state.selectedProject.splice(projectIndex, 1)
                };
            })
        }
    }
});

export const { setProject, setSearch } = filterSlice.actions;
export default filterSlice.reducer;