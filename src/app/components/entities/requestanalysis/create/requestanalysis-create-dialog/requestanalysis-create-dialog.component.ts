import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { RequestanalysisCreateComponent } from '../requestanalysis-create/requestanalysis-create.component';
@Component({
  selector: 'app-requestanalysis-create-dialog',
  templateUrl: './requestanalysis-create-dialog.component.html',
  styleUrls: ['./requestanalysis-create-dialog.component.css']
})
export class RequestanalysisCreateDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RequestanalysisCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
