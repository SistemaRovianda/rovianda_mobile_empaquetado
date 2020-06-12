import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuPage } from "./pages/menu/menu.page";
import { MenuPageModule } from "./pages/menu/menu.module";
import { AddRegisterPage } from "./pages/add-register/add-register.page";
import { AddRegisterPageModule } from "./pages/add-register/add-register.module";
import { PresentationPage } from "./pages/presentation/presentation.page";
import { PresentationPageModule } from "./pages/presentation/presentation.module";

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
        component: AddRegisterPage,
      },
      {
        path: "presentation",
        component: PresentationPage,
      },
      {
        path: "peticiones",
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MenuPageModule,
    AddRegisterPageModule,
    PresentationPageModule,
  ],
  exports: [RouterModule],
})
export class PackagedRoutingModule {}
