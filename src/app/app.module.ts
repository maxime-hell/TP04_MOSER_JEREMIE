import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { HTTPExchangeService } from './httpexchange.service';
import { Product } from './product.model';
import { AppComponent } from './app.component';
import { ProductsViewComponent } from './products-view/products-view.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ProductState } from './states/product.state';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    ProductsViewComponent,
    SearchBarComponent,
    PanierComponent
  ],
  imports: [
    NgxsModule.forRoot([ProductState]),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
