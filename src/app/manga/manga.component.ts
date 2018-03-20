import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { MangaState } from '../store/state';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store/state';
import { MangaService } from './manga.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
  providers: [MangaService]
})
export class MangaComponent implements OnInit {

	@select(['manga']) readonly manga: Observable<MangaState>;

	constructor(
		private ngRedux: NgRedux<IAppState>,
		private mangaService: MangaService
	) {}

	ngOnInit() {
		const mangaId = 1;
		this.loadDescription(mangaId);
	}

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
