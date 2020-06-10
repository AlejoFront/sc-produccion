import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MachinerydisponibleComponent } from '../machinerydisponible/machinerydisponible.component';
@Component({
  selector: 'app-machinerydisponible-dialog',
  templateUrl: './machinerydisponible-dialog.component.html',
  styleUrls: ['./machinerydisponible-dialog.component.css']
})
export class MachinerydisponibleDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(MachinerydisponibleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
