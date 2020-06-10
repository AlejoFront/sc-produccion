import { Component, OnInit } from '@angular/core';
import {MachinstateCreateComponent} from '../machinstate-create/machinstate-create.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-machinstate-dialog',
  templateUrl: './machinstate-dialog.component.html',
  styleUrls: ['./machinstate-dialog.component.css']
})
export class MachinstateDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(MachinstateCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
