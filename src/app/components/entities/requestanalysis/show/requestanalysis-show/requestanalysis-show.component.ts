import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Requestanalysis } from 'src/app/model/requestanalysis';
import { RequestanalysisService } from 'src/app/services/requestanalysis.services';
import swal from 'sweetalert';
@Component({
  selector: 'app-requestanalysis-show',
  templateUrl: './requestanalysis-show.component.html',
  styleUrls: ['./requestanalysis-show.component.css']
})
export class RequestanalysisShowComponent implements OnInit {

  public requestanalysis: Requestanalysis[];
  public title: String;
  constructor(
    private _requestanalysisService: RequestanalysisService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Request analysis'
  }

  ngOnInit(): void {
    this._requestanalysisService.getRequestanalysis().subscribe(response => {
      this.requestanalysis = response;
    })
  }

  deleterequestanalysis(code) {
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
          this._requestanalysisService.deleteRequestanalysis(code).subscribe(
            response => {
              this.ngOnInit();
            }
          )
        } else {
          swal("Tranquilo/a su registro no se ha borrado");
        }
      });
  }


  build(){
    swal("Lo sentimos! :(", "Estamos en construccion", "warning");
  }

}