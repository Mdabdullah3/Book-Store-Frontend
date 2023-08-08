
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
    genre: string | null;
}

const initialState: FiltersState = {
    genre: null,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string | null>) => {
            state.genre = action.payload;
        },
        // setPublicationYear: (state, action: PayloadAction<number | null>) => {
        //     state.publicationYear = action.payload;
        // },
        clearFilters: (state) => {
            state.genre = null;
            // state.publicationYear = null;
        },
    },
});

export const { setGenre, clearFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
