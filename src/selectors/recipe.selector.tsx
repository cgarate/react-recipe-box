import { AppState } from 'store';

export const selectRecipeRecords = (state: AppState) => state.recipes;