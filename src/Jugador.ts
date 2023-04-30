import { MiembroClub } from "./AbstractMiembroClub";
// Clase abstracta Jugador que extiende la interfaz MiembroClub
export class Jugador extends MiembroClub {
  private _deporte: string;
  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: string,
    documento: number,
    telefono: number,
    miembroDesde: string,
    deporte: number
  ) {
    super(nombre, apellido, fechaNacimiento, documento, telefono, miembroDesde);
    this._deporte = Deporte[deporte];
  }
  public get deporte(): string {
    return this._deporte;
  }
  public set deporte(value: string) {
    this._deporte = value;
  }

  public toString(): string {
    return (
      "" +
      this.nombre +
      ", " +
      this.apellido +
      ", " +
      this.fechaNacimiento +
      ", " +
      this.documento +
      ", " +
      this.telefono +
      ", " +
      this.miembroDesde +
      ", " +
      this.deporte
    );
  }
}

export enum Deporte {
  "futbol",
  "basket",
  "zumba",
  "voley",
  "natacion",
  "gym",
}
