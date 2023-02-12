import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromHeader from './header.reducer'

export const selectAuthState = createFeatureSelector<fromHeader.State>('header');
export const getCount = createSelector(selectAuthState, fromHeader.getCount);
export const getSort = createSelector(selectAuthState, fromHeader.getSort);