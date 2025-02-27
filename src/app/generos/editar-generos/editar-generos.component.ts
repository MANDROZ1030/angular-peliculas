import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-editar-generos',
  standalone: true,
  imports: [FormularioGeneroComponent],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent {

  @Input({transform: numberAttribute})
  id!: number;
  
  
  guardarCambios(genero: GeneroCreacionDTO){
    console.log('Editando el género', genero);
  }
}
