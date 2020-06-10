import { Component, OnInit } from '@angular/core';
import { Requeststate } from 'src/app/model/requeststatus';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequeststateService } from 'src/app/services/requeststatus.services'
import { Machinestate } from 'src/app/model/machinestate';
import swal from 'sweetalert';
@Component({
  selector: 'app-requeststatus-show',
  templateUrl: './requeststatus-show.component.html',
  styleUrls: ['./requeststatus-show.component.css']
})
export class RequeststatusShowComponent implements OnInit {

  public requeststatus: Requeststate[];
  public title: String;
  constructor(
    private _requeststateService: RequeststateService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Request Status'

  }

  ngOnInit(): void {
    this._requeststateService.getRequestStates().subscribe(response => {
      this.requeststatus = response;
    })
  }

  deleterequeststate(code) {
    swal({
      title: "Estas seguro que deseas eliminarlo?",
      text: "cuidado estas apundo de eliminar un registro",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! su registro ha sido eliminado", {
            icon: "success",
          });
          this._requeststateService.deleteRequeststate(code).subscribe(
            response => {
              this.ngOnInit();
            }
          )
        } else {
          swal("Tranquilo/a su registro no se ha borrado");
        }
      });

  }

}
