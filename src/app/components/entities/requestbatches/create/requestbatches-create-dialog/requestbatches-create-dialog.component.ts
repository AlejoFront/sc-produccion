import { Component, OnInit } from '@angular/core';
import {RequestbatchesCreateComponent} from '../requestbatches-create/requestbatches-create.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-requestbatches-create-dialog',
  templateUrl: './requestbatches-create-dialog.component.html',
  styleUrls: ['./requestbatches-create-dialog.component.css']
})
export class RequestbatchesCreateDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RequestbatchesCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
