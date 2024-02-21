import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { userDataReducer } from './user.reducer';


export interface State { }

export const reducers: ActionReducerMap<State> = {
  userdata: userDataReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];