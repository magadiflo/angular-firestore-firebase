import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { map } from 'rxjs';

import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection<Game>('goty').valueChanges()
      .pipe(
        map(resp => resp.map(({ name, votos }) => ({ name, value: votos }))) // Lo transformamos a {name, value} por que así se espera recibir en el componente grafico-barra-horizontal
      )
      .subscribe(resp => {
        console.log(resp);
      });
  }

}
