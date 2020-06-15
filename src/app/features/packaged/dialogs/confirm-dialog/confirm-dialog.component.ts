import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() reprocessing;

  constructor() {}

  ngOnInit() {
    console.log("Confirmación: ", this.reprocessing);
  }
}
