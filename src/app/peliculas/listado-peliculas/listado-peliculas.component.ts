import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe,CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent  {

  
  
  @Input({required:true})
  peliculas!:any[];
    
  agregarPelicula(){
    this.peliculas.push({
      titulo: 'Inception',
      fechaLanzamiento: new Date('2012-07-03'),
      precio: 500
    })
  }

  remover(pelicula:any){
    const indice = this.peliculas.findIndex((pelicuLaActual : any) => pelicuLaActual.titulo === pelicula.titulo);
    this.peliculas.splice(indice,1);
  }
}
