import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Packaging } from "../models/packaging.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Product } from "../models/product.interface";

@Injectable({
  providedIn: "root",
})
export class PackagingService {
  constructor(private http: HttpClient) {}

  getPackagings(): Observable<Packaging[]> {
    return this.http.get<Packaging[]>(`${environment.basePath}/packaging`);
  }

  getProductsByPackaging(userId: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${environment.basePath}/packaging/${userId}`
    );
  }

  updatePackagingServiced(userId: string): Observable<any> {
    return this.http.patch<any>(`${environment.basePath}/${userId}`, {});
  }
}
