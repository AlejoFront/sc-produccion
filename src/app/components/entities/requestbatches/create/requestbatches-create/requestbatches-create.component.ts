import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequestbatchesService } from 'src/app/services/requestbatches.services';
import { RequestBatches } from 'src/app/model/requestbatches';
import swal from 'sweetalert';
import { Requeststate } from 'src/app/model/requeststatus';
import { RequestAnalysisPK } from 'src/app/model/requestanalysis';
import { Productions } from 'src/app/model/productions';
@Component({
  selector: 'app-requestbatches-create',
  templateUrl: './requestbatches-create.component.html',
  styleUrls: ['./requestbatches-create.component.css']
})
export class RequestbatchesCreateComponent implements OnInit {

  public requestbatches: RequestBatches;
  liststaterequestpk: Requeststate[] = [];
  listproduction: Productions[] = [];
  public page_title: String;
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private requestbatchesservice: RequestbatchesService
    ) {
    this.requestbatches = new RequestBatches(null,"",null,null);
    this.page_title = 'Crear Sucursal';
    this.btn = 'Guardar';
   }

  ngOnInit(): void {
    this.getAllstaterequeststate();
    this.getAllsProductions();
  }


  getAllstaterequeststate() {
    this.requestbatchesservice.getAllrequeststate().subscribe(
      data => {
        this.liststaterequestpk = data;
      }
    );
  }

  getAllsProductions() {
    this.requestbatchesservice.getAllProductions().subscribe(
      data => {
        this.listproduction = data;
      }
    );
  }

  save(){
    
    this.requestbatchesservice.addRequestbatches(this.requestbatches).subscribe(response=>{
      if (this.status = 'success'){
        swal(
          'Sucursal creada!!',
          'La sucursal se ha creado correctamente',
          'success'
        );      
        this.requestbatches = response.requestbatches;
      }else{
        this.status = 'error';
        swal(
          'Sucursal creada!!',
          'La sucursal se ha creado correctamente',
          'error'
        );
      }
      location.reload(true);
    },error => {
      console.log(error);
      this.status = 'error'
    })
    console.log(this.requestbatches)
  }

}
