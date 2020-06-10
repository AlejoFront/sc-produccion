import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeremainingService } from 'src/app/services/timeremaining.services';
import { Timeremaining } from 'src/app/model/timeremaining';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-timeremaining',
  templateUrl: './timeremaining.component.html',
  styleUrls: ['./timeremaining.component.css']
})
export class TimeremainingComponent implements OnInit {

  listtimeremaining= new  MatTableDataSource<Timeremaining>();
  headertimeremaining: string [] = ['code', 'data'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private timeremainingservice: TimeremainingService
  ) { 
    this.timeremainingservice.listremainintimes().subscribe(
      (a: string) =>{
        this.showtimeremaining();
      }
    );
   }

  ngOnInit(): void {
   this.showtimeremaining();
  }

  showtimeremaining(){
    this.timeremainingservice.getTimeRemaining().subscribe(response => {
      this.listtimeremaining = new MatTableDataSource<Timeremaining>(response);
      this.listtimeremaining.sort = this.sort;
      this.listtimeremaining.paginator = this.paginator;
    })
  }
  



  applyFiltertimeremaining(valueFilter: string){
    this.listtimeremaining.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
