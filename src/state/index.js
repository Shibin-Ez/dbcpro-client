import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isModalOpen: false,
    products: [],
    total: 0,
    url: "https://dbcpro-server.onrender.com"
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setModal: (state, action) => {
            state.isModalOpen = action.payload.isModalOpen;
        },
        setCartData: (state, action) => {
            state.products = action.payload.products;
            state.total = action.payload.total;
        },
    },
});

export const { setLogin, setLogout, setModal, setCartData } = authSlice.actions;
export default authSlice.reducer;