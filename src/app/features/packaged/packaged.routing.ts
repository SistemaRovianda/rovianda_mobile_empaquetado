import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrdersPage } from "./pages/orders/orders.page";
import { OrdersPageModule } from "./pages/orders/orders.module";
import { PackagingResolver } from "src/app/shared/resolvers/packaging.resolver";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "orders",
        resolve: {
          packaging: PackagingResolver,
        },
        component: OrdersPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), OrdersPageModule],
  exports: [RouterModule],
  providers: [PackagingResolver],
})
export class PackagedRoutingModule {}
