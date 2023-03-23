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
            state.search = action.payload
        }
    }
});

export const { setProject, setSearch } = filterSlice.actions;
export default filterSlice;