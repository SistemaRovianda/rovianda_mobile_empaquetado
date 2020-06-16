import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuPage } from "./pages/menu/menu.page";
import { MenuPageModule } from "./pages/menu/menu.module";
import { AddRegisterPage } from "./pages/add-register/add-register.page";
import { AddRegisterPageModule } from "./pages/add-register/add-register.module";
import { PresentationPage } from "./pages/presentation/presentation.page";
import { PresentationPageModule } from "./pages/presentation/presentation.module";
import { ReprocessingPage } from "./pages/reprocessing/reprocessing.page";
import { ReprocessingPageModule } from "./pages/reprocessing/reprocessing.module";
import { OrdersPage } from "./pages/orders/orders.page";
import { OrdersPageModule } from "./pages/orders/orders.module";

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
        path: "reprocessing",
        component: ReprocessingPage,
      },
      {
        path: "orders",
        component: OrdersPage,
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
    ReprocessingPageModule,
    OrdersPageModule,
    PresentationPageModule,
  ],
  exports: [RouterModule],
})
export class PackagedRoutingModule {}
