import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import persistStore from "redux-persist/lib/persistStore"; // configurar los estados que van a persistir
import persistReducer from "redux-persist/lib/persistReducer"; // configurar la persistenia de los datos
import storage from "redux-persist/lib/storage"; //usa localstorage para guardar los datos

//configurar la persistencia de los datos
let persistConfig = {
    key: "root",
    storage,
};

//configurar que estado necesitamos guardar
let persistData = persistReducer(persistConfig, authSlice);


const store = configureStore({
    reducer: {
        auth: persistData,
    }
});

//exportar los datos guardados en localstorage
export const persistor = persistStore(store);
export default store;