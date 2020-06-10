import { Component, OnInit } from '@angular/core';
import { Machinestate } from 'src/app/model/machinestate';
import { Router } from '@angular/router';
import { MachinestateService } from 'src/app/services/machinestate.services';
import swal from 'sweetalert';
@Component({
  selector: 'app-machinstate-create',
  templateUrl: './machinstate-create.component.html',
  styleUrls: ['./machinstate-create.component.css']
})
export class MachinstateCreateComponent implements OnInit {
  public machinestate: Machinestate;
  public page_title: String
  public status: String;
  public btn: String;
  constructor(
    private router: Router,
    private machinestateService: MachinestateService
  ) {
    this.machinestate = new Machinestate(null,"");
    this.page_title = 'Crear Machine State'
    this.btn = 'Guardar'
   }

  ngOnInit(): void {
  }
  save(){
    this.machinestateService.addMachineState(this.machinestate).subscribe(response=>{
      if (this.status = 'success'){
        swal(
          'Estado de la maquina creada!!',
          'El estado de la maquina se ha creado correctamente',
          'success'
        );
      location.reload(true);
      this.machinestate = response.machinestate;
      this.router.navigate(['/MachineState'])
      }else{
        this.status = 'error';
        swal(
          'Estado de la maquina creada!!',
          'El estado de la maquina no se ha creado correctamente :(',
          'error'
        );
      }location.reload(true);
    })
  }
}
