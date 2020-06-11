import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PackagedRoutingModule } from "./packaged.routing";

const COMMON_IMPORTS = [CommonModule, PackagedRoutingModule];

@NgModule({
  imports: COMMON_IMPORTS,
})
export class PackagedModule {}
