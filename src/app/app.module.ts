import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension  } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { IAppState, initialState } from './store/state';
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
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTools: DevToolsExtension) {

    let enhancers = [];
    // ... add whatever other enhancers you want.

    // You probably only want to expose this tool in devMode.
    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }

    this.ngRedux.configureStore(
      rootReducer,
      initialState,
      [],
      enhancers);
  }
}
