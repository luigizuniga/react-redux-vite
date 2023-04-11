import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemon/pokemonSlice";

export const store = configureStore({
    reducer: {
        pokemons: pokemonSlice.reducer
    }
});
