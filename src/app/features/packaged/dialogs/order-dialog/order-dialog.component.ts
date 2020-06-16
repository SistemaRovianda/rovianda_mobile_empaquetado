import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-order-dialog",
  templateUrl: "./order-dialog.component.html",
  styleUrls: ["./order-dialog.component.scss"],
})
export class OrderDialogComponent implements OnInit {
  products: any[] = new Array(25);

  constructor(private _modalCtrl: ModalController) {}

  ngOnInit() {}

  onAccept() {
    this._modalCtrl.dismiss();
  }
}
