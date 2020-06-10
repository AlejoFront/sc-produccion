import { Component, OnInit } from '@angular/core';
import { InfomachineService } from 'src/app/services/infomachine.services';
@Component({
  selector: 'app-infomachinery',
  templateUrl: './infomachinery.component.html',
  styleUrls: ['./infomachinery.component.css']
})
export class InfomachineryComponent implements OnInit {

  public listinfomachineryall: number
  public listinfomachinarydispo: number
  public listinfomachinaryocu: number
  public listinfomachinarymto: number
  public listinfomachinaryrep: number
  constructor(
    private infomachineservice: InfomachineService
  ) { }

  ngOnInit(): void {
    this.getAllmachinery();
    this.getdispmachinary();
    this.getocumachinary();
    this.getmtomachinary();
    this.getrepmachinary();
  }

  getAllmachinery(){
    this.infomachineservice.getmachineall().subscribe(response => {
      this.listinfomachineryall = response;
    })
  }
  getdispmachinary(){
    this.infomachineservice.getmachinedisponibles().subscribe(response => {
      this.listinfomachinarydispo = response;
    })
  }

  getocumachinary(){
    this.infomachineservice.getmachineocupas().subscribe(response => {
      this.listinfomachinaryocu = response;
    })
  }

  getmtomachinary(){
    this.infomachineservice.getmachinemto().subscribe(response => {
      this.listinfomachinarymto = response;
    })
  }

  getrepmachinary(){
    this.infomachineservice.getmachinerep().subscribe(response => {
      this.listinfomachinaryrep = response;
    })
  }
}
