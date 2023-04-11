import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'Pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        startLoadingPokemons: (state, /* action */) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.page = action.payload.page;
            state.isLoading = false;
            state.pokemons = action.payload.pokemons;
        }
    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;


