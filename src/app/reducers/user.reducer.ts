import { createReducer, on } from "@ngrx/store";
import { resetUserData, setPhoneNumber, updateRegisterData } from "../shared/services/user.actions";

export const initialState = {};

export const userDataReducer = createReducer(
    initialState,
    on(setPhoneNumber, (state, { phoneNumber }) => ({ ...state, phoneNumber })),
    on(updateRegisterData, (state, { registerData }) => ({ ...state, ...registerData })),
    on(resetUserData, (state) => ({})),
);