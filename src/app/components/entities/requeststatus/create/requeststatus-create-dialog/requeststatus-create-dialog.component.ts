import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequeststatusCreateComponent } from '../requeststatus-create/requeststatus-create.component';
@Component({
  selector: 'app-requeststatus-create-dialog',
  templateUrl: './requeststatus-create-dialog.component.html',
  styleUrls: ['./requeststatus-create-dialog.component.css']
})
export class RequeststatusCreateDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(RequeststatusCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
