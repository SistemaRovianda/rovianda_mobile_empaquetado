import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { Observable, of } from "rxjs";
import { Presentation } from "../models/presentation.interface";

@Injectable({
  providedIn: "root",
})
export class PresentationsService {
  constructor(
    private _http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getPresentationsByProductId(productId: string): Observable<Presentation[]> {
    return this._http.get<Presentation[]>(
      `${this.endpoint}/packaging/products/presentations/${productId}`
    );
  }
}
