import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { OrderDialogComponent } from "../../../dialogs/order-dialog/order-dialog.component";
import { ConfirmDialogComponent } from "../../../dialogs/confirm-dialog/confirm-dialog.component";
import { Packaging } from "src/app/shared/models/packaging.interface";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/shared/models/app-state.interface";
import { loadProductsByPackaging } from "../../../store/products/products.actions";
import { MatDialog } from '@angular/material';

@Component({
  selector: "app-order-item",
  templateUrl: "./order-item.component.html",
  styleUrls: ["./order-item.component.scss"],
})
export class OrderItemComponent implements OnInit {
  @Input() packaging: Packaging;

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit() {}

  openDialog(packaging: Packaging) {
    this.openModal(packaging);
  }

  async openModal(packaging: Packaging) {
    const modal = await this.dialog.open(
      OrderDialogComponent,{
      data:{
        packaging
      },
      panelClass:"modal-orders"
    }
      );
  }
}
