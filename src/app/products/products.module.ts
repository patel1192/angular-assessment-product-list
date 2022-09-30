import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductsListComponent } from "./products-list/products-list.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PRODUCT_STATE_NAME } from "./state/products.selector";
import { productsReducer } from "./state/products.reducer";
import { ProductsEffects } from "./state/products.effects";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
];


@NgModule({
    declarations: [ProductsListComponent],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes),
      StoreModule.forFeature(PRODUCT_STATE_NAME, productsReducer),
      EffectsModule.forFeature([ProductsEffects]),
    ],
  })
  export class ProductsModule {}