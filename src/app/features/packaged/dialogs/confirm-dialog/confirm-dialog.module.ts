import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmDialogComponent } from "./confirm-dialog.component";
import { IonicModule } from "@ionic/angular";

const COMMON_DECLARATIONS = [ConfirmDialogComponent];

const COMMON_IMPORTS = [CommonModule, IonicModule];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class ConfirmDialogModule {}
