import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-trunk",
  templateUrl: "./trunk.component.html",
  styleUrls: ["./trunk.component.scss"],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
// export class TrunkComponent implements OnInit {
export class TrunkComponent {
  nazwaWWW: string = "Cisowscy.com";
  constructor() {}

  ngOnInit() {}
}
