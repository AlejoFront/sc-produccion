import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { StatebranchofficeCreateComponent } from '../statebranchoffice-create/statebranchoffice-create.component';
@Component({
  selector: 'app-statebranchoffice-create-dialog',
  templateUrl: './statebranchoffice-create-dialog.component.html',
  styleUrls: ['./statebranchoffice-create-dialog.component.css']
})
export class StatebranchofficeCreateDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(StatebranchofficeCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
