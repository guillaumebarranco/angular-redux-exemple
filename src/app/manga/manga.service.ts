import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class MangaService {

  constructor() {}

  loadMangaDescription(mangaId): Observable<{description: string}> {

	return Observable.of({
		description: 'Ceci est la description du manga chargée en asynchrone'
	});
  }
}
