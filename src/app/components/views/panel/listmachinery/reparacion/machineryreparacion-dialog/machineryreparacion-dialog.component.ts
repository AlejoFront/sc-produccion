import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MachineryreparacionComponent } from '../machineryreparacion/machineryreparacion.component';
@Component({
  selector: 'app-machineryreparacion-dialog',
  templateUrl: './machineryreparacion-dialog.component.html',
  styleUrls: ['./machineryreparacion-dialog.component.css']
})
export class MachineryreparacionDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MachineryreparacionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
