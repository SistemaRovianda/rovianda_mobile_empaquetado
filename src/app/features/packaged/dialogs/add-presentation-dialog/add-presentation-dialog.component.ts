import { Component, OnInit, ViewChild } from "@angular/core";
import { PresentationFormComponent } from "../../components/forms/presentation-form/presentation-form.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-add-presentation-dialog",
  templateUrl: "./add-presentation-dialog.component.html",
  styleUrls: ["./add-presentation-dialog.component.scss"],
})
export class AddPresentationDialogComponent implements OnInit {
  @ViewChild(PresentationFormComponent, { static: false })
  presentationForm: PresentationFormComponent;

  presentation;

  constructor(private _modalCtrl: ModalController) {}

  ngOnInit() {}

  onSubmit(form) {
    this.presentation = form;
    console.log("Presentación: ", form);
  }

  onCancel() {
    console.log("Cancelar presentación");
    this._modalCtrl.dismiss();
  }

  onAdd() {
    this.presentationForm.onSubmit();
    console.log("Agregar presentación");
    this._modalCtrl.dismiss();
  }
}
