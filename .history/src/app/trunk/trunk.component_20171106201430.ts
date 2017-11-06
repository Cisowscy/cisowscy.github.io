import { Component, OnInit, ViewEncapsulation } from "@angular/core";


import { DialogsService } from "./dialogs/dialogs.service";

@Component({
  selector: "app-trunk",
  templateUrl: "./trunk.component.html",
  styleUrls: ["./trunk.component.scss"],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
// export class TrunkComponent implements OnInit {
export class TrunkComponent {
  nazwaWWW = "Cisowscy.com";
  public result: any;

  constructor(private dialogsService: DialogsService) {}

  // ngOnInit() {}

  public openDialogFotoPokaz() {
    this.dialogsService
      .confirm("Zatwierdz Dialog", "Czy jestes pewny ze chcesz to zrobic?")
      .subscribe(res => (this.result = res));
  }
}
