import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../models/app-state.interface";
import { loadPackaging } from "src/app/features/packaged/store/packaging/packaging.actions";

@Injectable({
  providedIn: "root",
})
export class PackagingResolver implements Resolve<boolean> {
  constructor(private _store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
    this._store.dispatch(loadPackaging());
    return true;
  }
}
