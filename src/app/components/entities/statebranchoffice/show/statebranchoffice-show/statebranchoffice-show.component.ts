import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
import { StateBranchOfficeService } from 'src/app/services/statebranchoffice.services';
import swal from 'sweetalert';
@Component({
  selector: 'app-statebranchoffice-show',
  templateUrl: './statebranchoffice-show.component.html',
  styleUrls: ['./statebranchoffice-show.component.css']
})
export class StatebranchofficeShowComponent implements OnInit {

  public statebranchOffice: StateBranchOffice[];
  public title: String
  constructor(
    private _stateBranchOfficeService: StateBranchOfficeService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = 'Estado Sucursal'
  }

  ngOnInit(): void {
    this._stateBranchOfficeService.getStatesBranchOffice().subscribe(response => {
      this.statebranchOffice = response;
    })
  }

  deletestatebranchoffice(code) {
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
          this._stateBranchOfficeService.deleteStateBranchOffice(code).subscribe(
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
