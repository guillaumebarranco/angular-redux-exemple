import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { IAppState, initalState } from './store/state';
import { rootReducer } from './store/reducers';

import { AppComponent } from './app.component';
import { MangaComponent } from './manga/manga.component';
import { MangaService } from './manga/manga.service';

@NgModule({
  declarations: [
    AppComponent,
    MangaComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [MangaService],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, initalState, [ createLogger() ]);
  }
}
