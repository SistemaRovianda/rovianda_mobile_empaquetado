import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PackagingService } from "src/app/shared/services/packaging.service";
import {
  loadProductsByPackaging,
  loadProductsByPackagingSuccess,
  loadProductsByPackagingError,
} from "./products.actions";
import { exhaustMap, switchMap, catchError } from "rxjs/operators";
import { Product } from "src/app/shared/models/product.interface";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private packagingService: PackagingService
  ) {}

  loadProductsByPackagingEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductsByPackaging),
      exhaustMap((action) =>
        this.packagingService.getProductsByPackaging(action.userId).pipe(
          switchMap((products: Product[]) => [
            loadProductsByPackagingSuccess({ products: products }),
          ]),
          catchError((error) => of(loadProductsByPackagingError(error)))
        )
      )
    )
  );
}
