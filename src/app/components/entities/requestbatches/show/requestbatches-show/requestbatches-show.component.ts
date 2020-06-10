import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { RequestbatchesService } from 'src/app/services/requestbatches.services'
import { RequestBatches } from 'src/app/model/requestbatches';
import swal from 'sweetalert';
@Component({
  selector: 'app-requestbatches-show',
  templateUrl: './requestbatches-show.component.html',
  styleUrls: ['./requestbatches-show.component.css']
})
export class RequestbatchesShowComponent implements OnInit {

  public requestbatches: RequestBatches[];
  public title: String;
  constructor(
    private _requestbatchesService: RequestbatchesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.title = 'Request batches'
   }

  ngOnInit(): void {
    this._requestbatchesService.getRequestbatches().subscribe(response => {
      this.requestbatches = response;
    })
  }


  deleterequestbatches(code){
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
          this._requestbatchesService.deleteRequestbatch(code).subscribe(
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