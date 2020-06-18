import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { OrderDialogComponent } from "../../../dialogs/order-dialog/order-dialog.component";
import { ConfirmDialogComponent } from "../../../dialogs/confirm-dialog/confirm-dialog.component";

@Component({
  selector: "app-order-item",
  templateUrl: "./order-item.component.html",
  styleUrls: ["./order-item.component.scss"],
})
export class OrderItemComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  openDialog() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: OrderDialogComponent,
      cssClass: "modal-orders",
      componentProps: {
        orderId: 1,
      },
    });

    return await modal.present();
  }

  closeOrder() {
    this.confirmDialog();
  }

  async confirmDialog() {
    const modal = await this.modalCtrl.create({
      component: ConfirmDialogComponent,
      cssClass: "modal-confirm",
      componentProps: {
        typeConfirm: "closeOrder",
        message:
          "Al atender la orden no se volverá a mostrar, ¿Deseas cerrar la orden?",
      },
    });

    return await modal.present();
  }
}
