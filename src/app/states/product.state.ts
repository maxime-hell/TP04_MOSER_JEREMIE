import {Product} from '../product.model';
import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { ProductStateModel } from './product-state-model';
import { AddProduct, DelProduct } from '../actions/product-action';


@Injectable()
export class ProductState {
  IdPanier : number = 1;
  @Selector()
  static getProductCount(state: ProductStateModel) {
    console.log("1: ");
    console.log(state.products);
    return state.products.length;
  }

  @Selector()
  static getProductList(state: ProductStateModel) {
    console.log("2: ");
    console.log(state.products);
    return state.products;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    { productToAdd }: AddProduct
  ) {
    const state = getState();
    productToAdd.idpanier = this.IdPanier++;
    console.log("3: ");
    console.log(state.products);
    console.log("4: ");
    console.log(productToAdd);
    console.log("5: ");
    patchState({
      products: [...state.products, productToAdd],
    });
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<ProductStateModel>,
    { productToRemove }: DelProduct
  ) {
    const state = getState();
    patchState({
      products: state.products.filter(
        (x) => !(productToRemove.id == x.id && productToRemove.idpanier == x.idpanier)
      ),
    });
  }
}