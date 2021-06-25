// import axios from "axios";
import { createAction, createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
// export const getSearchMovies = createAsyncThunk("getSearchMovies", (search) => {
//     console.log("obtener movies ejecutado");
//     return axios.get(`/api/movie/${search}`).then(res => res.data)
// })

// export const getMovieById = createAsyncThunk("getMovieById", (id) => {
//     return axios.get(`/api/movie/id/${id}`).then(res => res.data)
// })
export const setUser = createAction("setUser")

export const logOut = createAsyncThunk("logOut", async() => {
   axios.post("/api/auth/logout")
})
export const addToFavorites = createAsyncThunk("addToFavorites", (movie) => {
  // console.log(data.id);
  return axios.post(`/api/favorites`, {Title: movie.Title, imdbID: movie.imdbID, Poster: movie.Poster}).then(res => res.data)
})

export const removeOfFavorites = createAsyncThunk("removeOfFavorites", (imdbID)=> {
  return axios.delete(`/api/favorites/${imdbID}`).then(res => res.data)
})

export const getFavorites = createAsyncThunk("getFavorites", ()=> {
  return axios.get(`/api/favorites`).then(res => res.data)
})



const userReducer = createReducer({data: {}, favorites: [], friends: {}}, {
    [addToFavorites.fulfilled]: (state, action) => state = {...state, favorites: [...state.favorites, action.payload]},
    [getFavorites.fulfilled]: (state, action) => state = {...state, favorites: action.payload},
    [removeOfFavorites.fulfilled]: (state, action) => state = {...state, favorites: action.payload},
    [setUser]: (state, action) => state = {...state, data: action.payload},
    [logOut.fulfilled]: (state, action) => state = {data: {}, favorites: [], friends: {}},
    // [getMovieById.fulfilled]: (state, action) => state = {...state, selected: action.payload}
})

export default userReducer