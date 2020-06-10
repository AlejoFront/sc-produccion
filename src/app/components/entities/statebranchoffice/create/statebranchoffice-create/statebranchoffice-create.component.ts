import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateBranchOffice } from 'src/app/model/stateBranchOffice';
import { StateBranchOfficeService } from 'src/app/services/statebranchoffice.services';
import swal from 'sweetalert';
@Component({
  selector: 'app-statebranchoffice-create',
  templateUrl: './statebranchoffice-create.component.html',
  styleUrls: ['./statebranchoffice-create.component.css']
})
export class StatebranchofficeCreateComponent implements OnInit {

  public statebranchoffice: StateBranchOffice;
  public page_title: String
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private statebranchofficeService: StateBranchOfficeService
  ) {
    this.statebranchoffice = new StateBranchOffice(null, "");
    this.page_title = 'Crear Estado Sucursal'
    this.btn = 'Guardar'
  }

  ngOnInit(): void {
  }

  save() {
    this.statebranchofficeService.addStateBranchOffice(this.statebranchoffice).subscribe(response => {
      if (this.status = 'success') {
        swal(
          'Estado de la maquina creada!!',
          'El estado de la maquina se ha creado correctamente',
          'successs'
        );
        this.status = 'success';
        location.reload(true);
        this.statebranchoffice = response.statebranchoffice;
        this.router.navigate(['/StateBranchOffice']);
      } else {
        this.status = 'error';
        swal(
          'Estado de la maquina creada!!',
          'El estado de la maquina no se ha creado correctamente :(',
          'error'
        );
      } location.reload(true);
    })
  }
}