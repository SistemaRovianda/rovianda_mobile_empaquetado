import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { Observable, of } from "rxjs";
import { Lot } from "../models/lot.interface";
import { Product } from "../models/product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(
    private _http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`${this.endpoint}/products-rovianda`);
  }
}
