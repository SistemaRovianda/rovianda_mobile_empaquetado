import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-option-menu",
  templateUrl: "./option-menu.component.html",
  styleUrls: ["./option-menu.component.scss"],
})
export class OptionMenuComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}