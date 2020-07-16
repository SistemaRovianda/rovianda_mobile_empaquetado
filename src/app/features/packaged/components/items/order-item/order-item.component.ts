import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { OrderDialogComponent } from "../../../dialogs/order-dialog/order-dialog.component";
import { ConfirmDialogComponent } from "../../../dialogs/confirm-dialog/confirm-dialog.component";
import { Packaging } from "src/app/shared/models/packaging.interface";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { loadProductsByPackaging } from "../../../store/products/products.actions";

@Component({
  selector: "app-order-item",
  templateUrl: "./order-item.component.html",
  styleUrls: ["./order-item.component.scss"],
})
export class OrderItemComponent implements OnInit {
  @Input() packaging: Packaging;

  constructor(
    private modalCtrl: ModalController,
    private _store: Store<AppState>
  ) {}

  ngOnInit() {}

  openDialog(userId: string) {
    this.openModal(userId);
  }

  async openModal(userId?: string) {
    this._store.dispatch(loadProductsByPackaging({ userId: userId }));
    const modal = await this.modalCtrl.create({
      component: OrderDialogComponent,
      cssClass: "modal-orders",
      // componentProps: {
      //   orderId: userId,
      // },
    });

    return await modal.present();
  }

  closeOrder(userId: string) {
    this.confirmDialog(userId);
  }

  async confirmDialog(userId: string) {
    const modal = await this.modalCtrl.create({
      component: ConfirmDialogComponent,
      cssClass: "modal-confirm",
      componentProps: {
        userId: userId,
        typeConfirm: "closeOrder",
        message:
          "Al atender la orden no se volverá a mostrar, ¿Deseas cerrar la orden?",
      },
    });

    return await modal.present();
  }
}
