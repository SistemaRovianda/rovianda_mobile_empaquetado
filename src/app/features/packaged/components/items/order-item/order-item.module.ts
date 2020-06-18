import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderItemComponent } from "./order-item.component";
import { IonicModule } from "@ionic/angular";
import { OrderDialogModule } from "../../../dialogs/order-dialog/order-dialog.module";
import { ConfirmDialogModule } from "../../../dialogs/confirm-dialog/confirm-dialog.module";

const COMMON_DECLARATINS = [OrderItemComponent];

const COMMON_IMPORTS = [
  CommonModule,
  IonicModule,
  OrderDialogModule,
  ConfirmDialogModule,
];

@NgModule({
  declarations: COMMON_DECLARATINS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATINS,
})
export class OrderItemModule {}
