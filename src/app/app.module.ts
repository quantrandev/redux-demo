import { PRODUCT_INITIAL_STATE } from './product/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import {
  NgRedux,
  NgReduxModule,
  DevToolsExtension
} from '@angular-redux/store';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, MessageComponent],
  imports: [BrowserModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancer = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
  }
}
