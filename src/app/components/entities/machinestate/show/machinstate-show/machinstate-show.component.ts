import { Component, OnInit } from '@angular/core';
import { MachinestateService } from 'src/app/services/machinestate.services'
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Machinestate } from 'src/app/model/machinestate';
import swal from 'sweetalert';
@Component({
  selector: 'app-machinstate-show',
  templateUrl: './machinstate-show.component.html',
  styleUrls: ['./machinstate-show.component.css']
})
export class MachinstateShowComponent implements OnInit {
  public machinstates: Machinestate[];
  public title = "Datos Machine State";
  constructor(
    private _machinestateService: MachinestateService,
    private _route: ActivatedRoute,
    private _router: Router 
  ) { }

  ngOnInit(): void {
    this._machinestateService.getMachineStates().subscribe(response=>{
      this.machinstates=response;
    })
  }

  deletemachinestate(code){

    swal({
      title: "Estas seguro que deseas eliminarlo?",
      text: "cuidado estas apundo de eliminar un registro",
      icon: "warning",
      buttons: [true,true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! su registro ha sido eliminado", {
          icon: "success",
        });
        this._machinestateService.deleteMachine(code).subscribe(
          response =>{
            this.ngOnInit();
          }
        )
      } else {
        swal("Tranquilo/a su registro no se ha borrado");
      }
    });
  }

}
