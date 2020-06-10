import { Component, OnInit } from '@angular/core';
import {BranchofficeCreateComponent} from '../branchoffice-create/branchoffice-create.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-branchoffice-create-dialog',
  templateUrl: './branchoffice-create-dialog.component.html',
  styleUrls: ['./branchoffice-create-dialog.component.css']
})
export class BranchofficeCreateDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(BranchofficeCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
