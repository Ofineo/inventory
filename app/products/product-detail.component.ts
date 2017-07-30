
import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = "Product Details";
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router){
    }

    ngOnInit(): void{
        //let i sfrom IES2015 to make a variable 
        let id= +this._route.snapshot.params['id'];//+ a shortcut to convert a string to a number
        this.pageTitle += `: ${id}`; //IES2015 backticks to define a template string and desplay the id
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
    



}