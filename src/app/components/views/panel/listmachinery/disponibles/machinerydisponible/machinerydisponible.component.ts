import { Component, OnInit, ViewChild } from '@angular/core';
import { InfomachineService } from 'src/app/services/infomachine.services';
import { Infomachine } from 'src/app/model/infomachine';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-machinerydisponible',
  templateUrl: './machinerydisponible.component.html',
  styleUrls: ['./machinerydisponible.component.css']
})
export class MachinerydisponibleComponent implements OnInit {


  listmachinedispo= new  MatTableDataSource<Infomachine>();
  headerdis: string [] = ['code', 'name', 'productionCapacity', 'reference'];
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
    this.machineryservice.getmachinedis().subscribe(response => {
      this.listmachinedispo = new MatTableDataSource<Infomachine>(response);
      this.listmachinedispo.sort = this.sort;
      this.listmachinedispo.paginator = this.paginator;
    })
  }
  applyFilter(valueFilter: string){
    this.listmachinedispo.filter = valueFilter.trim().toLocaleLowerCase();
  }
}
