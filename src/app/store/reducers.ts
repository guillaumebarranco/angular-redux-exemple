import { IAppState, MangaState, mangaInitialState } from './state';
import { Reducer, combineReducers } from 'redux';

interface Action {
  type: string;
  payload?: any;
}

const mangaReducer: Reducer<MangaState> = (state: MangaState = mangaInitialState, action: Action) => {

	switch (action.type) {

		case "DESCRIPTION_IS_LOADING":
			return {
				...state,
				descriptionLoading: action.payload
			};

		case "LOAD_DESCRIPTION":
			return {
				...state,
				description: action.payload
			};

		default:
			return state;
	}
};

export const rootReducer: Reducer<IAppState> = combineReducers({manga: mangaReducer});
