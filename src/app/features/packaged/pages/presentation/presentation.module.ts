import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PresentationPage } from "./presentation.page";
import { AddPresentationDialogModule } from "../../dialogs/add-presentation-dialog/add-presentation-dialog.module";
import { PresentationCardModule } from "../../components/cards/presentation-card/presentation-card.module";
import { StepModule } from "src/app/shared/components/step/step.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPresentationDialogModule,
    PresentationCardModule,
    StepModule,
  ],
  declarations: [PresentationPage],
})
export class PresentationPageModule {}
