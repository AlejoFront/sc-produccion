import { Component, OnInit, ViewChild } from '@angular/core';
import { InfomachineService } from 'src/app/services/infomachine.services';
import { Infomachine } from 'src/app/model/infomachine';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-machinerymto',
  templateUrl: './machinerymto.component.html',
  styleUrls: ['./machinerymto.component.css']
})
export class MachinerymtoComponent implements OnInit {

  listmachinemto= new  MatTableDataSource<Infomachine>();
  headermto: string [] = ['code', 'name', 'productionCapacity', 'reference'];
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
    this.machineryservice.getmachinemante().subscribe(response => {
      this.listmachinemto = new MatTableDataSource<Infomachine>(response);
      this.listmachinemto.sort = this.sort;
      this.listmachinemto.paginator = this.paginator;
    })
  }
  applyFilter(valueFilter: string){
    this.listmachinemto.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
