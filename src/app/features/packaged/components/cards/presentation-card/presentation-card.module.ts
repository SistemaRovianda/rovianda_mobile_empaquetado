import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PresentationCardComponent } from "./presentation-card.component";
import { IonicModule } from "@ionic/angular";

const COMMON_DECLARATIONS = [PresentationCardComponent];

const COMMON_IMPORTS = [CommonModule, IonicModule];

@NgModule({
  declarations: COMMON_DECLARATIONS,
  imports: COMMON_IMPORTS,
  exports: COMMON_DECLARATIONS,
})
export class PresentationCardModule {}
