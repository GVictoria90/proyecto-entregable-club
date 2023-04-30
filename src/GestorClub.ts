import fs from "fs";
import rls from "readline-sync";
import { Jugador } from "./Jugador";
export class GestorClub {
  private _path: string;
  constructor() {
    this._path = "src/socios.json";
  }

  //Metodo para escribir datos en archivo JSON
  private writeSociosData(socios: Jugador[]): void {
    let data = JSON.stringify(socios, null, 2);
    fs.writeFileSync(this._path, data);
  }

  //Metodo para leer datos de archivo JSON
  private readSociosData(): Jugador[] {
    let socios: Jugador[] = [];
    if (fs.existsSync(this._path)) {
      let sociosData = fs.readFileSync(this._path, "utf-8");
      socios = JSON.parse(sociosData);
    }
    return socios;
  }

  //Metodo para guardar socios ingresando datos manualmente
  public inputSocio(): void {
    let finish = false;
    while (!finish) {
      console.log('Ingrese los datos del nuevo socio');
      let socio = new Jugador(
        rls.question("Nombre:\n"),
        rls.question("Apellido:\n"),
        rls.question("Fecha de nacimiento:\n"),
        parseInt(rls.question("Documento:\n")),
        parseInt(rls.question("Telefono:\n")),
        rls.question("Fecha de ingreso:\n"),
        parseInt(
          rls.question(
            "Deporte que realiza:\n(futbol:0, basket:1, zumba:2, voley:3, natacion:4, gym:5):\n"
          )
        )
      );

      this.saveSocio(socio);
      finish = parseInt(rls.question("Ingrese 1 para ingresar mas socios, otro para salir.\n")) !== 1;

    }
  }


  //Metodo para persistir socio
  public saveSocio(newSocio: Jugador): void {
    let socios: Jugador[] = [];
    if (fs.existsSync(this._path)) {
      let sociosData = fs.readFileSync(this._path, "utf-8");
      socios = JSON.parse(sociosData);
    }
    socios.push(newSocio);
    this.writeSociosData(socios);
  }

  //Metodo para persistir socios
  public saveSocios(newSocios: Jugador[]): void {
    let socios: Jugador[] = [];
    if (fs.existsSync(this._path)) {
      let sociosData = fs.readFileSync(this._path, "utf-8");
      socios = JSON.parse(sociosData);
    }
    socios.push(...newSocios);
    this.writeSociosData(socios);
  }

  //Metodos para buscar
  public findByNombre(nombre: string): Jugador[] {
    let socios = this.readSociosData();
    let sociosList: Jugador[] = [];
    socios.forEach((socio) => {
      if (socio.nombre === nombre) {
        sociosList.push(socio);
      }
    });
    return sociosList;
  }

  public findByDeporte(deporte: string): Jugador[] {
    let socios = this.readSociosData();
    let sociosList: Jugador[] = [];
    socios.forEach((socio) => {
      if (socio.deporte === deporte) {
        sociosList.push(socio);
      }
    });
    return sociosList;
  }

  public findByDocumento(documento: number): Jugador {
    let socios = this.readSociosData();
    let socioFound: Jugador = new Jugador("", "", "", 0, 0, "", 0);
    socios.forEach((socio) => {
      if (socio.documento === documento) {
        socioFound = socio;
      }
    });
    return socioFound;
  }

  public findByTelefono(telefono: number): Jugador {
    let socios = this.readSociosData();
    let socioFound: Jugador = new Jugador("", "", "", 0, 0, "", 0);
    socios.forEach((socio) => {
      if (socio.telefono === telefono) {
        socioFound = socio;
      }
    });
    return socioFound;
  }

  public printSociosList(socios: Jugador[]): void {
    socios.forEach((value, index) => {
      console.log(value.toString());
      if (index !== socios.length) {
        console.log('\n');
      }
    });
  }
}
