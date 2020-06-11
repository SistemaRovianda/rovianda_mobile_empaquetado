import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StepComponent } from "./step.component";
import { IonicModule } from "@ionic/angular";

const COMMON_DECLARATION = [StepComponent];

const COMMON_IMPORTS = [CommonModule, IonicModule];

@NgModule({
  declarations: COMMON_DECLARATION,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATION,
})
export class StepModule {}
