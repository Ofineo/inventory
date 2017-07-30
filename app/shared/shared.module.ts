
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { StarComponent } from "./star.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        StarComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        CommonModule,
        StarComponent,
        FormsModule
    ]
})
export class SharedModule {}