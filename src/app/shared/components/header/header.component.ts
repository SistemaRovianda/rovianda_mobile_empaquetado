import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  @Input() titlePath: string;

  @Output("onBack") onBack = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log("click");
    this.onBack.emit(this.titlePath);
  }
}
