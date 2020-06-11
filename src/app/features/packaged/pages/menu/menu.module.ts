import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MenuPage } from "./menu.page";
import { Routes, RouterModule } from "@angular/router";
import { OptionMenuModule } from "../../components/buttons/option-menu/option-menu.module";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, OptionMenuModule],
  declarations: [MenuPage],
  exports: [MenuPage],
})
export class MenuPageModule {}
