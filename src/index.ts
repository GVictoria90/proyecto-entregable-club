//guardar 10 socios.

import { GestorClub } from "./GestorClub";
import { Jugador } from "./Jugador";


let jugador1 = new Jugador('Juan', 'Martinez', '1990-02-05', 35534089, 12312423, '2020-09-01', 1);
let jugador2 = new Jugador('Esteban', 'Suarez', '1995-06-25', 38544882, 45376423, '2021-11-01', 3);

let gc = new GestorClub();

gc.saveSocio(jugador1);
gc.saveSocio(jugador2);

gc.inputSocio();