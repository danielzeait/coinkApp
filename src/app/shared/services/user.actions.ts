import { createAction, props } from "@ngrx/store";

export const setPhoneNumber = createAction(
    '[Phone Keyboard Component] Update phone number',
    props<{ phoneNumber: string }>()
);

export const updateRegisterData = createAction(
    '[Register Form Component] Update register data',
    props<{ registerData: {} }>()
);

export const resetUserData = createAction('[Get Started] Reseting user data');