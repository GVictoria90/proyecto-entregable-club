import { Persona } from "./PersonaInterface";
// Clase abstracta MiembroClub que implementa la interfaz Persona
export abstract class MiembroClub implements Persona {
  private _nombre: string;
  private _apellido: string;
  private _fechaNacimiento: string;
  private _documento: number;
  private _telefono: number;
  private _miembroDesde: string;

  //Constructor
  constructor(
    nombre: string,
    apellido: string,
    fechaNacimiento: string,
    documento: number,
    telefono: number,
    miembroDesde: string
  ) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._fechaNacimiento = fechaNacimiento;
    this._documento = documento;
    this._telefono = telefono;
    this._miembroDesde = miembroDesde;
  }
  //Getters y Setters
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get apellido(): string {
    return this._apellido;
  }
  public set apellido(value: string) {
    this._apellido = value;
  }
  public get fechaNacimiento(): string {
    return this._fechaNacimiento;
  }
  public set fechaNacimiento(value: string) {
    this._fechaNacimiento = value;
  }
  public get documento(): number {
    return this._documento;
  }
  public set documento(value: number) {
    this._documento = value;
  }
  public get telefono(): number {
    return this._telefono;
  }
  public set telefono(value: number) {
    this._telefono = value;
  }
  public get miembroDesde(): string {
    return this._miembroDesde;
  }
  public set miembroDesde(value: string) {
    this._miembroDesde = value;
  }
}
