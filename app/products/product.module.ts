import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProductListComponent } from "../products/product-list.component"
import { productFilterPipe } from "../products/products-filter.pipe";
import { ProductDetailComponent } from "../products/product-detail.component";
import { ProductDetailGuard } from "./product.guard.service";
import { ProductService } from "./product.service";
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        productFilterPipe,
        ProductDetailComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
        ]),
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]


    ]

})
export class ProductModule { }