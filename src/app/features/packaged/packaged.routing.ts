import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuPage } from "./pages/menu/menu.page";
import { MenuPageModule } from "./pages/menu/menu.module";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "menu",
        component: MenuPage,
      },
      {
        path: "register",
      },
      {
        path: "peticiones",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MenuPageModule],
  exports: [RouterModule],
})
export class PackagedRoutingModule {}
