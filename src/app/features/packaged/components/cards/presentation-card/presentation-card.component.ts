import { Component, OnInit, Input } from "@angular/core";
import { ProductPresentation } from "src/app/shared/models/packaged.interface";

@Component({
  selector: "app-presentation-card",
  templateUrl: "./presentation-card.component.html",
  styleUrls: ["./presentation-card.component.scss"],
})
export class PresentationCardComponent implements OnInit {
  @Input() productPresentation: ProductPresentation;

  constructor() {}

  ngOnInit() {}
}
