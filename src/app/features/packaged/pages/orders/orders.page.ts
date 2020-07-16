import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { Observable } from "rxjs";
import { Packaging } from "src/app/shared/models/packaging.interface";
import { packagingSelect } from "../../store/packaging/packaging.selectors";
import { signOut } from "src/app/features/landing/store/login/login.action";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  orders: any[] = new Array(20);

  packaging$: Observable<Packaging[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.packaging$ = this._store.select(packagingSelect);
  }

  onBack(evt) {
    this._store.dispatch(signOut());
  }
}
