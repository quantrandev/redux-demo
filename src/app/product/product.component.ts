import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { ADD_PRODUCT } from './actions';
import { IAppState } from './../store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @select(s => s.product.products)
  products;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {}

  save(name, price) {
    this.ngRedux.dispatch<any>({
      type: ADD_PRODUCT,
      body: { name: name, price: price }
    });
  }
}
