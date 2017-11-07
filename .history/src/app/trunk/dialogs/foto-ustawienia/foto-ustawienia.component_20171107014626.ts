import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-foto-ustawienia",
  templateUrl: "./foto-ustawienia.component.html",
  styleUrls: ["./foto-ustawienia.component.scss"]
})
export class FotoUstawieniaComponent {
  NAZWA_PANELU_UST_FOTO = "Panel Ustawień Foto Pokazu";
  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<FotoUstawieniaComponent>) {}
}
