import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { RequeststateService } from 'src/app/services/requeststatus.services';
import { Requeststate } from 'src/app/model/requeststatus';
import swal from 'sweetalert';
@Component({
  selector: 'app-requeststatus-edit',
  templateUrl: './requeststatus-edit.component.html',
  styleUrls: ['./requeststatus-edit.component.css'],
  providers: [RequeststateService]
})
export class RequeststatusEditComponent implements OnInit {
  public status: String;
  public requeststate: Requeststate;
  public page_title: String;
  public btn: String;
  public url: String;
  constructor(
    private _requestStateService: RequeststateService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
      this.requeststate = new Requeststate(null,"");
      this.page_title = 'Editar Request estado'
      this.btn = 'Actualizar'
      this.url = Global.url 
  }

  ngOnInit(): void {
    this.getrequeststate();
  }

  save(){
    swal({
      title: "Estas seguro que deseas Actualizarlo?",
      text: "cuidado estas apundo de actualizar un registro",
      icon: "info",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Se Actualizo Correctamente", {
          icon: "success",
        });
      this._requestStateService.updateRequestState(this.requeststate.code,this.requeststate).subscribe(response=>{
        this.status = 'success';
        this.requeststate = response.requeststate;
        this._router.navigate(['/requeststatus'])
    })
  } else {
    swal("Tranquilo/a su registro no se ha Actualizado");
  }
});
  }

  getrequeststate(){
    this._route.params.subscribe(params=>{
      let code = params['code'];
      this._requestStateService.getRequestState(code).subscribe(
        response => {
          this.requeststate = response;
        },error =>{
          console.log(error);
          
        }
      )
    })
  }

}
