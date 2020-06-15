import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  signOut($event) {
    console.log("Cerrar sesión");
  }
}
