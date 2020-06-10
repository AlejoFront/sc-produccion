import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OtherinformationService } from 'src/app/services/otherinformation.services';
import { Infoemployee } from 'src/app/model/infoenployee';

@Component({
  selector: 'app-humanresource',
  templateUrl: './humanresource.component.html',
  styleUrls: ['./humanresource.component.css']
})
export class HumanresourceComponent implements OnInit {

  listemployee= new  MatTableDataSource<Infoemployee>();
  headeremployee: string [] = ['code', 'dni', 'name', 'workShift'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private humanresourceservice: OtherinformationService
  ) { 
    this.humanresourceservice.list().subscribe(
      (a: string) =>{
        this.showemploye();
      }
    );
   }

  ngOnInit(): void {
    this.showemploye();
  }

  showemploye(){
    this.humanresourceservice.getemployee().subscribe(response => {
      this.listemployee = new MatTableDataSource<Infoemployee>(response);
      this.listemployee.sort = this.sort;
      this.listemployee.paginator = this.paginator;
    })
  }
  applyFilter(valueFilter: string){
    this.listemployee.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
