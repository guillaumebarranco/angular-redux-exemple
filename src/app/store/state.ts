export interface MangaState {
	name: string;
	author: string;
	description: string;
	descriptionLoading: boolean;
}

export const mangaInitialState: MangaState = {
	name: 'Dragon Ball',
	author: 'Akira Toriyama',
	description: '',
	descriptionLoading: false,
};

export interface IAppState {
	manga: MangaState;
};

export const initialState: IAppState = {
	manga: mangaInitialState,
};
