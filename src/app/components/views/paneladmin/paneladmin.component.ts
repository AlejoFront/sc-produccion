import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-paneladmin',
  templateUrl: './paneladmin.component.html',
  styleUrls: ['./paneladmin.component.css']
})
export class PaneladminComponent implements OnInit {

  public title_one: String
  public title_two: String
  public title_three: String

  constructor(
  ) { 
    
    
    this.title_one = 'Sucursales'
    this.title_two = 'Maquinaria'
    this.title_three = 'Solicitud lotes'
  }
  
  ngOnInit(): void {
    
  }

  



}
