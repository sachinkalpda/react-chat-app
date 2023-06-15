import { configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import chatSlice from '../store/reducers';
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// store persistance configration
const persistConfig = {
    key: 'root',
    devTools : 'production',
    storage,
}


const persistedReducer = persistReducer(persistConfig,chatSlice);


// store configartion
export const store = configureStore({
    reducer: {
        chats : persistedReducer
    },
    middleware : [thunk]
});

export const persistor = persistStore(store);

// export default store;