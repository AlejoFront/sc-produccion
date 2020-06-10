import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requeststate } from 'src/app/model/requeststatus';
import { RequeststateService } from 'src/app/services/requeststatus.services';
import swal from 'sweetalert';
@Component({
  selector: 'app-requeststatus-create',
  templateUrl: './requeststatus-create.component.html',
  styleUrls: ['./requeststatus-create.component.css']
})
export class RequeststatusCreateComponent implements OnInit {
  public requeststatus: Requeststate
  public page_title: String
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private requestateService: RequeststateService
  ) {
    this.requeststatus = new Requeststate(null, "");
    this.page_title = 'Crear Request Status'
    this.btn = 'Guardar'
  }

  ngOnInit(): void {
  }

  save() {
    this.requestateService.addRequestStates(this.requeststatus).subscribe(response => {
      if (this.status = 'success') {
        swal(
          'Estado de la maquina creada!!',
          'El estado de la maquina se ha creado correctamente',
          'success'
        );
        this.requeststatus = response.requeststatus;
        this.router.navigate(['/Requeststatus']);
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
