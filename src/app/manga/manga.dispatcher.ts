import { Injectable } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/state';
import { MangaService } from './manga.service';

@Injectable()
export class MangaDispatcher {

	constructor(
		private ngRedux: NgRedux<IAppState>,
		private mangaService: MangaService
	) {}

	loadDescription(mangaId: number) {

		this.setDescriptionLoading(true);

		// Emulate async time loading data
		setTimeout(() => {

			this.mangaService.loadMangaDescription(mangaId).subscribe(response => {
				this.setDescription(response.description);
				this.setDescriptionLoading(false);
			});

		}, 2000);
	}

	setDescription(description: string) {

		this.ngRedux.dispatch({
			type: 'LOAD_DESCRIPTION',
			payload: description,
		});
	}

	setDescriptionLoading(isLoading: boolean) {

		this.ngRedux.dispatch({
			type: 'DESCRIPTION_IS_LOADING',
			payload: isLoading
		});
	}
}
