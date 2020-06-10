import { Component, OnInit } from '@angular/core';
import { InfoShowComponent } from '../info-show/info-show.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-info-show-dialog',
  templateUrl: './info-show-dialog.component.html',
  styleUrls: ['./info-show-dialog.component.css']
})
export class InfoShowDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(InfoShowComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
