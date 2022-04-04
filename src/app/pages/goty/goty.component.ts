import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe(juegos => {
        console.log(juegos);
        this.juegos = juegos;
      });
  }

  votarJuego(juego: Game) {
    this.gameService.votarJuego(juego.id)
      .subscribe(resp => {
        console.log(resp);
        if (resp.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: resp.mensaje,
            showConfirmButton: false,
            timer: 1500
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.mensaje,
          });
        }
      });
  }

}
