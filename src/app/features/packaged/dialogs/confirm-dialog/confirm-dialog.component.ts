import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() reprocessing;

  @Input() typeConfirm;

  @Input() message;

  constructor(private _modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this._modalCtrl.dismiss();
  }

  onAccept() {
    this._modalCtrl.dismiss();
    if (this.typeConfirm == "reprocessing") {
      console.log("[confirmDialog] Aceptar Reprocesing: ", this.reprocessing);
    } else {
      console.log("[confirmDialog] Aceptar cierre de orden: ");
    }
  }
}
