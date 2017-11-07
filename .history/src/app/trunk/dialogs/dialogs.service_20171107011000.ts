import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { MatDialogRef, MatDialog } from "@angular/material";

import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { FotoUstawieniaComponent } from "./foto-ustawienia/foto-ustawienia.component";


@Injectable()
export class DialogsService {
  constructor(private dialog: MatDialog) {}

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogFotoSet: MatDialogRef<ConfirmDialogComponent>;
    //let dialogRef: MatDialogRef<FotoUstawieniaComponent>;

    dialogFotoSet = this.dialog.open(ConfirmDialogComponent);
    //dialogRef = this.dialog.open(FotoUstawieniaComponent);

    dialogFotoSet.componentInstance.title = title;
    dialogFotoSet.componentInstance.message = message;

    return dialogFotoSet.afterClosed();
  }
}
