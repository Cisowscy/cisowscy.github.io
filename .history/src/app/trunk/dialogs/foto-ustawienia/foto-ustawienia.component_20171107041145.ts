import { Component, ViewChild } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import {
  MatChipInputEvent,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from "@angular/material";
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

  displayedColumns = ["id", "name", "progress", "color"];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialogRef: MatDialogRef<FotoUstawieniaComponent>) {
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(createNewUser(i));
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  SetTagFoto = "uwzględnij zdjęcia z tagami";
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  FotoTags = [
    { name: "Buczacz" },
    { name: "Kopalino" },
    { name: "Vancouver Island" }
  ];

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

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}




/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
