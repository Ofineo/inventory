"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_list_component_1 = require("../products/product-list.component");
var products_filter_pipe_1 = require("../products/products-filter.pipe");
var star_component_1 = require("../shared/star.component");
var product_detail_component_1 = require("../products/product-detail.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var product_guard_service_1 = require("./product.guard.service");
var product_service_1 = require("./product.service");
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        declarations: [
            product_list_component_1.ProductListComponent,
            products_filter_pipe_1.productFilterPipe,
            product_detail_component_1.ProductDetailComponent,
            star_component_1.StarComponent
        ],
        imports: [
            forms_1.FormsModule,
            common_1.CommonModule,
            router_1.RouterModule.forChild([
                { path: 'products', component: product_list_component_1.ProductListComponent },
                { path: 'product/:id', canActivate: [product_guard_service_1.ProductDetailGuard], component: product_detail_component_1.ProductDetailComponent },
            ]),
        ],
        providers: [
            product_service_1.ProductService,
            product_guard_service_1.ProductDetailGuard
        ]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=prodcut.module.js.map