import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { OrderDialogComponent } from "../../../dialogs/order-dialog/order-dialog.component";

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
}
