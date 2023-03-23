import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchKeyword: "",
    selectedProject: ["Scoreboard", "Flight Booking", "Blog Application", "Product Cart", "Book Store", "Job Finder"]
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.searchKeyword = action.payload
        },
        setProject: (state, action) => {
            const projectIndex = state.selectedProject.indexOf(action.payload);
            if (projectIndex !== -1) {
                state.selectedProject.splice(projectIndex, 1)
            } else {
                state.selectedProject.push(action.payload)
            };
        }
    }
});

export const { setProject, setSearch } = filterSlice.actions;
export default filterSlice.reducer;