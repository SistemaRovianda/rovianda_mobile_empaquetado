import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ReprocessingFormComponent } from "../../components/forms/reprocessing-form/reprocessing-form.component";
import { ModalController } from "@ionic/angular";
import { ConfirmDialogComponent } from "../../dialogs/confirm-dialog/confirm-dialog.component";

import * as moment from "moment";

@Component({
  selector: "app-reprocessing",
  templateUrl: "./reprocessing.page.html",
  styleUrls: ["./reprocessing.page.scss"],
})
export class ReprocessingPage implements OnInit {
  @ViewChild(ReprocessingFormComponent, { static: false })
  reprocessingForm: ReprocessingFormComponent;

  reprocessingData;

  constructor(private _router: Router, private _modalCtrl: ModalController) {}

  ngOnInit() {}

  onBack($event) {
    console.log("Regresar");
    this._router.navigate(["/packaged-layout/presentation"]);
  }

  onSubmit(evt) {
    console.log("Reproceso: ", evt);
    const data = {
      ...evt,
      date: moment(new Date()).format("YYYY-MM-DD"),
    };
    this.reprocessingData = data;
  }

  onSave() {
    this.reprocessingForm.onSubmit();
    this.modalConfirm();
  }

  async modalConfirm() {
    const modal = await this._modalCtrl.create({
      component: ConfirmDialogComponent,
      cssClass: "modal-confirm",
      componentProps: {
        reprocessing: this.reprocessingData,
      },
    });

    return await modal.present();
  }
}
