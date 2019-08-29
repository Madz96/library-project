import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [MyLibComponent, NavbarComponent],
  imports: [
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
