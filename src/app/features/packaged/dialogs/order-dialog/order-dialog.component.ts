import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Product } from "src/app/shared/models/product.interface";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { products_selector } from "../../store/products/products.selector";
import { clearProductsByPackaging } from "../../store/products/products.actions";

@Component({
  selector: "app-order-dialog",
  templateUrl: "./order-dialog.component.html",
  styleUrls: ["./order-dialog.component.scss"],
})
export class OrderDialogComponent implements OnInit {
  products: any[] = new Array(25);

  products$: Observable<Product[]>;

  constructor(
    private _modalCtrl: ModalController,
    private _store: Store<AppState>
  ) {}

  ngOnInit() {
    this.products$ = this._store.select(products_selector);
  }

  onAccept() {
    this._store.dispatch(clearProductsByPackaging());
    this._modalCtrl.dismiss();
  }
}
