import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Lot } from "../models/lot.interface";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";

@Injectable({
  providedIn: "root",
})
export class LotsService {
  constructor(
    private _http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getLots(productId: string): Observable<Lot[]> {
    return of([]);
  }
}
