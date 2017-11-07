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

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [{ name: "Lemon" }, { name: "Lime" }, { name: "Apple" }];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our person
    if ((value || "").trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
