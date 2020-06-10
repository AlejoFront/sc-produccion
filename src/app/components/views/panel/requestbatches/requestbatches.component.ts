import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestbatchesService } from 'src/app/services/requestbatches.services'
import { RequestBatches } from 'src/app/model/requestbatches';
import {MatTableDataSource} from '@angular/material/table'; 
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-requestbatches',
  templateUrl: './requestbatches.component.html',
  styleUrls: ['./requestbatches.component.css']
})
export class RequestbatchesComponent implements OnInit {


  listrequestbatches = new  MatTableDataSource<RequestBatches>();
  headerequestbatches: string [] = ['code', 'requestDate', 
                                    'production', 'startproduc', 
                                    'endtproduc', 'state'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    private _requestbatchesService: RequestbatchesService
    ) {
    this._requestbatchesService.listabatches().subscribe(
      (d: string) =>{
        this.showbatch();
      }
    );
   }

  ngOnInit(): void {
    this.showbatch();
    
  }


  showbatch(){
    this._requestbatchesService.getRequestbatches().subscribe(response => {
      this.listrequestbatches = new MatTableDataSource<RequestBatches>(response);
      this.listrequestbatches.sort = this.sort;
      this.listrequestbatches.paginator = this.paginator;
    })
  }

  applyFilterbatch(valueFilter: string){
    this.listrequestbatches.filter = valueFilter.trim().toLocaleLowerCase();
  }

}
