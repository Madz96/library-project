import { NgModule } from "@angular/core";

import { MyLibComponent } from "./my-lib.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [MyLibComponent, NavbarComponent, ButtonComponent],
  imports: [],
  exports: [MyLibComponent, NavbarComponent, ButtonComponent]
})
export class MyLibModule {}
