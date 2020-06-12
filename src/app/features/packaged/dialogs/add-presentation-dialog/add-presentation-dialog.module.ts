import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddPresentationDialogComponent } from "./add-presentation-dialog.component";
import { IonicModule } from "@ionic/angular";
import { PresentationFormModule } from "../../components/forms/presentation-form/presentation-form.module";

const COMMON_DECLARATIONS = [AddPresentationDialogComponent];

const COMMON_IMPORTS = [CommonModule, IonicModule, PresentationFormModule];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class AddPresentationDialogModule {}
