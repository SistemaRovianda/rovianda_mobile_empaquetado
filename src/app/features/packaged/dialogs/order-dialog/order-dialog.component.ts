import { Component, OnInit, Input, Inject } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Product } from "src/app/shared/models/product.interface";
import { Observable } from "rxjs";
import { Packaging } from 'src/app/shared/models/packaging.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material"
@Component({
  selector: "app-order-dialog",
  templateUrl: "./order-dialog.component.html",
  styleUrls: ["./order-dialog.component.scss"],
})
export class OrderDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{packaging:Packaging}
  ) {}

  ngOnInit() {
    
  }

  onAccept() {
    
    this.dialogRef.close();
  }
}
