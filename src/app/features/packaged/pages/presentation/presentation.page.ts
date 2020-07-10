import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AddPresentationDialogComponent } from "../../dialogs/add-presentation-dialog/add-presentation-dialog.component";
import { Router } from "@angular/router";
import { AppState } from "src/app/shared/models/app-state.interface";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ProductPresentation } from "src/app/shared/models/packaged.interface";
import { productsPresentationSelector } from "../../store/products-presentation/products-presentation.selectors";

@Component({
  selector: "app-presentation",
  templateUrl: "./presentation.page.html",
  styleUrls: ["./presentation.page.scss"],
})
export class PresentationPage implements OnInit {
  productsPresentation$: Observable<ProductPresentation[]>;

  constructor(
    private _modalCtrl: ModalController,
    private _router: Router,
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    this.productsPresentation$ = this._store.select(
      productsPresentationSelector
    );
  }

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
