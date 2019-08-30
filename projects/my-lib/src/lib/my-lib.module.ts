import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MyLibComponent } from "./my-lib.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ButtonComponent } from "./button/button.component";

@NgModule({
  declarations: [MyLibComponent, NavbarComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [MyLibComponent, NavbarComponent, ButtonComponent]
})
export class MyLibModule {}
