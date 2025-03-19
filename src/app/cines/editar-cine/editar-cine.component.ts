import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
    selector: 'app-editar-cine',
    imports: [FormularioCinesComponent],
    standalone : true,
    templateUrl: './editar-cine.component.html',
    styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {

  @Input({transform: numberAttribute})
  id!: number;

  cine : CineDTO ={id:1,nombre :'Acrópolis' , latitud: 1.615848927737581 , longitud : -75.6045141056025};


  guardarCambios(cine : CineCreacionDTO){
    console.log('editar cine', cine);
  }

}
