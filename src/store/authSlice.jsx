//importar el slice del estado y roles

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//url del enpoint del login
const url_login = "http://localhost/apiHospital/login"

//configurar la acccion asincrona con la api para iniciar sesion
export const authenticateUser = createAsyncThunk("auth/authenticateUser",
    async (credencial, {rejectWithValue})=> {
        try {
            let response = await axios.post(url_login,credencial);
            return response.data //respuessta de la conexion
        } catch (error) {
            return rejectWithValue(error.response.data);
        }

});

//estado inicial del usuario
const initialState = {
    isAuthenticated: false,
    userRole: null, //paciente, doctor o admin
    userName: "",
    status: "idle", //loading o success o faile
    error: null
}

//slice para gestionar el estado del usuario
let authSlice = createSlice({
    name: "auth", //nombre del estado
    initialState, //estado inicial
    reducers: {     //funciones que actualizaran el estado
        logout: ()=>{
            state.isAuthenticated = false,
            state.userRole = null,
            state.userName = "",
            state.email = "",
            state.status = "idle",
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.pending, (state) => {
            state.status = "loading";
            state.error = null;
        }).addCase(authenticateUser.rejected, (state) => {
            state.status = "failed";
            state.error = action.payload;
        }).addCase(authenticateUser.fulfilled, (state, action) => {
            state.isAuthenticated = true,
            state.userRole = action.payload.user_type,
            state.userName = action.payload.name,
            state.email = action.payload.email,
            state.status = "success"
        });
    }
});

//exportar las funciones que actualizaran el estado
export let {logout} = authSlice.actions;
export default authSlice.reducer;