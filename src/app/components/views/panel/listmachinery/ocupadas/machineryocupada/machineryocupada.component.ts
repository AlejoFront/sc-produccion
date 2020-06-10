import { Component, OnInit, ViewChild } from '@angular/core';
import { InfomachineService } from 'src/app/services/infomachine.services';
import { Infomachine } from 'src/app/model/infomachine';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-machineryocupada',
  templateUrl: './machineryocupada.component.html',
  styleUrls: ['./machineryocupada.component.css']
})
export class MachineryocupadaComponent implements OnInit {

  listmachineocup= new  MatTableDataSource<Infomachine>();
  headerocup: string [] = ['code', 'name', 'productionCapacity', 'reference'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private machineryservice: InfomachineService
  ) { 
    this.machineryservice.list().subscribe(
      (a: string) =>{
        this.showdis();
      }
    );
   }

  ngOnInit(): void {
    this.showdis();
  }

  showdis(){
    this.machineryservice.getmachineocupadas().subscribe(response => {
      this.listmachineocup = new MatTableDataSource<Infomachine>(response);
      this.listmachineocup.sort = this.sort;
      this.listmachineocup.paginator = this.paginator;
    })
  }
  applyFilter(valueFilter: string){
    this.listmachineocup.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
