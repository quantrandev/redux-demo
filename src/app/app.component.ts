import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { INCREMENT, DECREMENT } from './actions';
import { IAppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select('counter') counter;
  constructor(private ngRedux: NgRedux<IAppState>) {}
  increment() {
    this.ngRedux.dispatch<any>({ type: INCREMENT });
  }
  decrement() {
    this.ngRedux.dispatch<any>({ type: DECREMENT });
  }
}
