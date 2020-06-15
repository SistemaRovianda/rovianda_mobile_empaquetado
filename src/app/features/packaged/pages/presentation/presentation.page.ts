import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddPresentationDialogComponent } from "../../dialogs/add-presentation-dialog/add-presentation-dialog.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-presentation",
  templateUrl: "./presentation.page.html",
  styleUrls: ["./presentation.page.scss"],
})
export class PresentationPage implements OnInit {
  constructor(private _modalCtrl: ModalController, private _router: Router) {}

  ngOnInit() {}

  addPresentation() {
    console.log("Agregar presentación");
    this.modalAddPresentation();
  }

  onBack(evt) {
    this._router.navigate(["/packaged-layout/register"]);
  }

  onSave() {
    console.log("Guardar...");
  }

  async modalAddPresentation() {
    const modal = await this._modalCtrl.create({
      component: AddPresentationDialogComponent,
      cssClass: "modal-form",
    });

    return await modal.present();
  }
}
