import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PackagingService } from "src/app/shared/services/packaging.service";
import {
  loadPackaging,
  loadPackagingSuccess,
  loadPackagingError,
  packagingServiced,
} from "./packaging.actions";
import { exhaust, exhaustMap, switchMap, catchError } from "rxjs/operators";
import { Packaging } from "src/app/shared/models/packaging.interface";
import { of } from "rxjs";
import { ToastService } from "src/app/shared/services/toast.service";

@Injectable({
  providedIn: "root",
})
export class PackagingEffects {
  constructor(
    private actions$: Actions,
    private toastService: ToastService,
    private packagingService: PackagingService
  ) {}

  loadPackagingEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPackaging),
      exhaustMap((action) =>
        this.packagingService.getPackagings().pipe(
          switchMap((packaging: Packaging[]) => [
            loadPackagingSuccess({ packagingList: packaging }),
          ]),
          catchError((error) => of(loadPackagingError({ error: error })))
        )
      )
    )
  );

  packagingServicedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(packagingServiced),
      exhaustMap((action) =>
        this.packagingService.updatePackagingServiced(action.userId).pipe(
          switchMap((_) => {
            this.toastService.success();
            return [loadPackaging()];
          }),
          catchError((error) => {
            this.toastService.errorToast();
            return [];
          })
        )
      )
    )
  );
}
