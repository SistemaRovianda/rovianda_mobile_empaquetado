import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderDialogComponent } from "./order-dialog.component";
import { IonicModule } from "@ionic/angular";
import { MatDialogModule } from '@angular/material';

const COMMON_DECLARATIONS = [OrderDialogComponent];

const COMMON_IMPORTS = [CommonModule, IonicModule,MatDialogModule];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
  entryComponents: COMMON_DECLARATIONS,
})
export class OrderDialogModule {}
