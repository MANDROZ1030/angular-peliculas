import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-listado-peliculas',
    imports: [DatePipe, CurrencyPipe, MatButtonModule, MatIconModule],
    templateUrl: './listado-peliculas.component.html',
    standalone:true,
    styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent  {



  @Input({required:true})
  peliculas!:any[];


}
