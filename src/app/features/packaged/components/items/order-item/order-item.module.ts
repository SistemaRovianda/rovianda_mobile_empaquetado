import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OrderItemComponent } from "./order-item.component";
import { IonicModule } from "@ionic/angular";

const COMMON_DECLARATINS = [OrderItemComponent];

const COMMON_IMPORTS = [CommonModule, IonicModule];

@NgModule({
  declarations: COMMON_DECLARATINS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATINS,
})
export class OrderItemModule {}
