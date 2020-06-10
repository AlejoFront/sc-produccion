import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from 'src/app/services/global';
import { BranchofficeService } from 'src/app/services/branchoffice.services'
import { Branchoffice } from 'src/app/model/branchoffice';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
import swal from 'sweetalert';
@Component({
  selector: 'app-branchoffice-edit',
  templateUrl: './branchoffice-edit.component.html',
  styleUrls: ['./branchoffice-edit.component.css'],
  providers: [BranchofficeService]
})
export class BranchofficeEditComponent implements OnInit {
  public status: String;
  public branchoffice: Branchoffice;
  liststateBranchOffice: StateBranchOffice[] = [];
  public page_title: String;
  public btn: String;
  public url: String;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _branchofficeService: BranchofficeService
  ) {
    this.branchoffice = new Branchoffice(null, "", "", null);
    this.page_title = 'Editar Sucursal'
    this.btn = 'Actualizar'
    this.url = Global.url
  }

  ngOnInit(): void {
    this.getBranchoffice();
    this.getAllstateBranch();
  }


  getAllstateBranch() {
    this._branchofficeService.getAllStateBranch().subscribe(
      data => {
        this.liststateBranchOffice = data;
      }
    );
  }

  save() {
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
          this._branchofficeService.updateBranchoffice(this.branchoffice.code, this.branchoffice).subscribe(response => {
            this.status = 'success';
            this.branchoffice = response.branchoffice;
            this._router.navigate(['/branchoffice'])
          })
        } else {
          swal("Tranquilo/a su registro no se ha Actualizado");
        }
      });
  }

  getBranchoffice() {
    this._route.params.subscribe(params => {
      let code = params['code'];
      this._branchofficeService.getBranchoffice(code).subscribe(
        response => {
          this.branchoffice = response;
        }, error => {
          console.log(error);

        }
      )
    })
  }

}
