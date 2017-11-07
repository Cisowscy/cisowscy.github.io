import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

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

  SetTagFoto="uwzględnij zdjęcia z tagami";
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  FotoTags = [{ name: "Lemon" }, { name: "Lime" }, { name: "Apple" }];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || "").trim()) {
      this.FotoTags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(fruit: any): void {
    let index = this.FotoTags.indexOf(fruit);

    if (index >= 0) {
      this.FotoTags.splice(index, 1);
    }
  }
}
