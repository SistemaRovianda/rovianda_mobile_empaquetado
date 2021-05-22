import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { Observable } from "rxjs";
import { Packaging } from "src/app/shared/models/packaging.interface";
import { packagingSelect } from "../../store/packaging/packaging.selectors";
import { signOut } from "src/app/features/landing/store/login/login.action";
import { loadPackaging } from '../../store/packaging/packaging.actions';

@Component({
  selector: "app-orders",
  templateUrl: "./orders.page.html",
  styleUrls: ["./orders.page.scss"],
})
export class OrdersPage implements OnInit {
  orders: any[] = new Array(20);

  packagings:Packaging[]=[];
  constructor(private _store: Store<AppState>) {}
  doRefresh(event) {
    this.packagings=[];
    this._store.dispatch(loadPackaging());
    setTimeout(() => {
      console.log('Actualizando...');
      event.target.complete();
    }, 2000);
  }
  ngOnInit() {
    this._store.select(packagingSelect).subscribe(packagings=>{
      this.packagings=packagings;
    });
  }

  onBack(evt) {
    this._store.dispatch(signOut());
  }
}
