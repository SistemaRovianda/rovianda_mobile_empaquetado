import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddRegisterPage } from "./add-register.page";
import { ProductFormModule } from "../../components/forms/product-form/product-form.module";
import { StepModule } from "src/app/shared/components/step/step.module";
import { HeaderModule } from "../../../../shared/components/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductFormModule,
    HeaderModule,
    StepModule,
  ],
  declarations: [AddRegisterPage],
})
export class AddRegisterPageModule {}
