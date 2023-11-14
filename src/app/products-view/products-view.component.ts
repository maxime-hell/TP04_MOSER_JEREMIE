import { Component, Input} from '@angular/core';
import { HTTPExchangeService } from '../httpexchange.service';
import {Product} from '../product.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import {AddProduct} from '../actions/product-action'

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent {

  @Input() filters: any;
  // products: Product[] = [];
  products$: Observable<Product[]>| undefined;

  constructor(private httpExchangeService: HTTPExchangeService, private store: Store) { }
  ngOnInit() {
    this.products$ = this.httpExchangeService.getProducts();
  }
  addProduct(product: Product) {
console.log(product);
this.store.dispatch(new AddProduct(product));
}
}
