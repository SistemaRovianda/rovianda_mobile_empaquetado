import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductFormComponent } from "./product-form.component";
import { IonicModule } from "@ionic/angular";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const COMMON_DECLARATIONS = [ProductFormComponent];

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class ProductFormModule {}
