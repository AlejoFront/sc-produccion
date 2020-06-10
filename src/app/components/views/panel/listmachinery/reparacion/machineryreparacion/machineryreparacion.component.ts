import { Component, OnInit, ViewChild } from '@angular/core';
import { InfomachineService } from 'src/app/services/infomachine.services';
import { Infomachine } from 'src/app/model/infomachine';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-machineryreparacion',
  templateUrl: './machineryreparacion.component.html',
  styleUrls: ['./machineryreparacion.component.css']
})
export class MachineryreparacionComponent implements OnInit {

  listmachinerepa= new  MatTableDataSource<Infomachine>();
  headerrep: string [] = ['code', 'name', 'productionCapacity', 'reference'];
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
    this.machineryservice.getmachinerepa().subscribe(response => {
      this.listmachinerepa = new MatTableDataSource<Infomachine>(response);
      this.listmachinerepa.sort = this.sort;
      this.listmachinerepa.paginator = this.paginator;
    })
  }
  applyFilter(valueFilter: string){
    this.listmachinerepa.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
