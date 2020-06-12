import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddPresentationDialogComponent } from "../../dialogs/add-presentation-dialog/add-presentation-dialog.component";

@Component({
  selector: "app-presentation",
  templateUrl: "./presentation.page.html",
  styleUrls: ["./presentation.page.scss"],
})
export class PresentationPage implements OnInit {
  constructor(private _modalCtrl: ModalController) {}

  ngOnInit() {}

  addPresentation() {
    console.log("Agregar presentación");
    this.modalAddPresentation();
  }

  onBack() {
    console.log("Retroceder...");
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
