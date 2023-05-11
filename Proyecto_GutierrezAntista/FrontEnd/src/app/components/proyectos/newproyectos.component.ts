import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Model/proyectos.model';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewProyectosComponent implements OnInit{
  nombreP: string;
  descripcionP: string;

  constructor(private proyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP);
    this.proyectoS.save(proyectos).subscribe({next:(data) =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, error:(err) =>{
        alert("falló");
        this.router.navigate(['']);
      }})
  }
}