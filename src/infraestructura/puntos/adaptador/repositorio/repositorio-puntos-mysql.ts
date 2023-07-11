import { RepositorioPuntos } from "src/dominio/puntos/puerto/repositorio/repositorio-puntos";

export class repositorioPuntosMysl implements RepositorioPuntos {
    async guardar(datosPuntos: number, idUsuario: string) {
        return {datosPuntos, idUsuario}
    }
}