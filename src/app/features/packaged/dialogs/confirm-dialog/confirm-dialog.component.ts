import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() reprocessing;

  constructor(private _modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this._modalCtrl.dismiss();
  }

  onAccept() {
    console.log("[confirmDialog] Aceptar: ", this.reprocessing);
    this._modalCtrl.dismiss();
  }
}
