import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HumanresourceComponent } from '../humanresource/humanresource.component';
@Component({
  selector: 'app-humanresource-dialog',
  templateUrl: './humanresource-dialog.component.html',
  styleUrls: ['./humanresource-dialog.component.css']
})
export class HumanresourceDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(HumanresourceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
