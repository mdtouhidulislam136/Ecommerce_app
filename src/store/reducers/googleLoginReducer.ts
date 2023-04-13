import { createReducer } from "@reduxjs/toolkit";
import { GoogleLoginSuccess, GoogleLogout } from "../actions/googleLoginAction";


interface GoogleLoginState {
    token: string | null;
}

const initialState: GoogleLoginState = {
    token: null,
}


export const GoogleLoginReducer = createReducer(initialState, (builder) => {
    builder.addCase(GoogleLoginSuccess, (state, action) => {
        state.token = action.payload.token;
    })
        .addCase(GoogleLogout, (state) => {
            state.token = null;
    })
})