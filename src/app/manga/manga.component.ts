import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { MangaState } from '../store/state';
import { MangaDispatcher } from './manga.dispatcher';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
  providers: [MangaDispatcher]
})
export class MangaComponent implements OnInit {

	@select(['manga']) readonly manga: Observable<MangaState>;

	constructor(private dispatcher: MangaDispatcher) {}

	ngOnInit() {
		const mangaId = 1;
		this.dispatcher.loadDescription(mangaId);
	}
}
