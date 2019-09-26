import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "ml-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent implements OnInit {
  @Input() input;

  constructor() {}

  ngOnInit() {
    console.log(this.input);
  }
}
