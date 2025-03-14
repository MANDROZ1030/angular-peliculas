import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-indice-generos',
    imports: [RouterLink, MatButtonModule],
    standalone:true,
    templateUrl: './indice-generos.component.html',
    styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {

}
