import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { OrdersPage } from "./orders.page";
import { OrderItemModule } from "../../components/items/order-item/order-item.module";
import { HeaderModule } from "src/app/shared/components/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderItemModule,
    HeaderModule,
  ],
  declarations: [OrdersPage],
})
export class OrdersPageModule {}
