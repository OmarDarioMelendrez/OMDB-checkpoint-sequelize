import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getSearchMovies = createAsyncThunk("getSearchMovies", (search) => {
    console.log("obtener movies ejecutado");
    return axios.get(`/api/movie/${search}`).then(res => res.data)
})

export const getMovieById = createAsyncThunk("getMovieById", (id) => {
    return axios.get(`/api/movie/id/${id}`).then(res => res.data)
})

const videosReducer = createReducer({search: {}, selected: {}}, {
    [getSearchMovies.fulfilled]: (state, action) => state = {...state, search: action.payload},
    [getMovieById.fulfilled]: (state, action) => state = {...state, selected: action.payload}
})

export default videosReducer