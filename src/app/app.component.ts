import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [ListadoPeliculasComponent, MenuComponent, RatingComponent, RouterOutlet],
    standalone:true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {



}
