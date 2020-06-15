import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReprocessingPage } from "./reprocessing.page";
import { HeaderModule } from "src/app/shared/components/header/header.module";
import { ReprocessingFormModule } from "../../components/forms/reprocessing-form/reprocessing.module";
import { ConfirmDialogModule } from "../../dialogs/confirm-dialog/confirm-dialog.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ReprocessingFormModule,
    ConfirmDialogModule,
  ],
  declarations: [ReprocessingPage],
})
export class ReprocessingPageModule {}
