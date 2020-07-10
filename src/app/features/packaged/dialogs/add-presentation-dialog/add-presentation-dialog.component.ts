import { Component, OnInit, ViewChild } from "@angular/core";
import { PresentationFormComponent } from "../../components/forms/presentation-form/presentation-form.component";
import { ModalController } from "@ionic/angular";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { addProductPresentation } from "../../store/products-presentation/products-presentation.actions";

@Component({
  selector: "app-add-presentation-dialog",
  templateUrl: "./add-presentation-dialog.component.html",
  styleUrls: ["./add-presentation-dialog.component.scss"],
})
export class AddPresentationDialogComponent implements OnInit {
  @ViewChild(PresentationFormComponent, { static: false })
  presentationForm: PresentationFormComponent;

  presentation;

  constructor(
    private _modalCtrl: ModalController,
    private _store: Store<AppState>
  ) {}

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
    this._store.dispatch(
      addProductPresentation({ productPresentation: this.presentation })
    );
    this._modalCtrl.dismiss();
  }
}
