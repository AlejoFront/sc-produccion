import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MachineryocupadaComponent } from '../machineryocupada/machineryocupada.component';
@Component({
  selector: 'app-machineryocupada-dialog',
  templateUrl: './machineryocupada-dialog.component.html',
  styleUrls: ['./machineryocupada-dialog.component.css']
})
export class MachineryocupadaDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(MachineryocupadaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
