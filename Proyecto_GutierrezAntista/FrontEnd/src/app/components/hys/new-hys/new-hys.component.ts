import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HysService } from 'src/app/service/hys-service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent {
  nombre: string;
  porcentaje: number;

  constructor(private hys: HysService, private router: Router) { }

  ngOnInit(): void {
  }
}
