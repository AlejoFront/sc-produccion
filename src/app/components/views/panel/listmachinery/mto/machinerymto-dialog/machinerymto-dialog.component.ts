import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MachinerymtoComponent } from '../machinerymto/machinerymto.component';
@Component({
  selector: 'app-machinerymto-dialog',
  templateUrl: './machinerymto-dialog.component.html',
  styleUrls: ['./machinerymto-dialog.component.css']
})
export class MachinerymtoDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(MachinerymtoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
