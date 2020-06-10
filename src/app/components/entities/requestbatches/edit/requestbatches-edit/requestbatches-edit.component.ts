import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequestbatchesService } from 'src/app/services/requestbatches.services';
import { RequestBatches } from 'src/app/model/requestbatches';
import swal from 'sweetalert';
import { Requeststate } from 'src/app/model/requeststatus';
import { Productions } from 'src/app/model/productions';
@Component({
  selector: 'app-requestbatches-edit',
  templateUrl: './requestbatches-edit.component.html',
  styleUrls: ['./requestbatches-edit.component.css'],
  providers: [RequestbatchesService]
})
export class RequestbatchesEditComponent implements OnInit {
  public status: String;
  public requestbatches: RequestBatches;
  liststaterequestbatches: Requeststate[] = [];
  listproduction: Productions[] = [];
  public page_title: String;
  public btn: String;
  public url: String;
  public date: Date;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _requestbatchesservice: RequestbatchesService
  ) { 
    this.requestbatches = new RequestBatches(null,"",null,null);
    this.page_title = 'Editar Solicitud Lotes'
    this.btn = 'Actualizar'
    this.url = Global.url
   }

  ngOnInit(): void {
    this.getrequestbatches();
    this.getAllstaterequeststate();
    this.getAllsProductions();
  }


  getAllstaterequeststate() {
    this._requestbatchesservice.getAllrequeststate().subscribe(
      data => {
        this.liststaterequestbatches = data;
      }
    );
  }

  getAllsProductions() {
    this._requestbatchesservice.getAllProductions().subscribe(
      data => {
        this.listproduction = data;
      }
    );
  }

  save(){
    swal({
      title: "Estas seguro que deseas Actualizarlo?",
      text: "cuidado estas apundo de actualizar un registro",
      icon: "info",
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Se Actualizo Correctamente", {
            icon: "success",
          });
          this._requestbatchesservice.updateRequestbatch(this.requestbatches.code, this.requestbatches).subscribe(response => {
            this.status = 'success';
            this.requestbatches = response.requestbatches;
            this._router.navigate(['/requestbatches'])
            
          })
        } else {
          swal("Tranquilo/a su registro no se ha Actualizado");
        }
      });
      console.log(this.requestbatches)
  }
  getrequestbatches() {
    this._route.params.subscribe(params => {
      let code = params['code'];
      this._requestbatchesservice.getRequestbatch(code).subscribe(
        response => {
          this.requestbatches = response;
        }, error => {
          console.log(error);

        }
      )
    })
  }

}
