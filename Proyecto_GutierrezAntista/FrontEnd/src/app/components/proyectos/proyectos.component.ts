import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/Model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyecto: Proyectos[] = [];

  constructor(private proyectoS: ProyectosService, private tokenService: TokenService) { }
  isLogged = false;


  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void{
    this.proyectoS.lista().subscribe({next:(data)=>{
        this.proyecto = data;
      }})
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectoS.delete(id).subscribe({next:(data) => {
          this.cargarProyectos();
        },error:(err) => {
          alert("No se pudo eliminar");
        }})
    }
  }
}