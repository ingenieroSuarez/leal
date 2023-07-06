import { RepositorioCampaña } from "src/dominio/comercio/puerto/repositorio/repositorio-campaña";
import { ServicioRegistrarCampaña } from "src/dominio/comercio/servicio/ServicioRegistrarCampaña";

describe('ServicioRegistrarCampaña', () => {
    let servicio: ServicioRegistrarCampaña;
    let repositorioMock: RepositorioCampaña;
    beforeEach(() => {
        repositorioMock = {
            registrar: jest.fn(),
        };
        servicio = new ServicioRegistrarCampaña(repositorioMock);
    });
    it('Si el multiplicador de cashback es cero, debe guardarlo como null', async () => {
        const datosCampaña = {
            multiplicadorCashback: 0,
            multiplicadorPuntosLeal: 2,
            idComercio: 1,
            idSucursal: 1,
            valorCompra: 50000,
            fechaInicio: new Date("2023-07-06T15:39:15.418Z"),
            fechaFin: new Date("2023-07-06T15:39:15.418Z")
          };
          await servicio.ejecutar(datosCampaña);
          const datosCampañaEsperados = {
            multiplicadorCashback: null,
            multiplicadorPuntosLeal: 2,
            idComercio: 1,
            idSucursal: 1,
            valorCompra: 50000,
            fechaInicio: new Date("2023-07-06T15:39:15.418Z"),
            fechaFin: new Date("2023-07-06T15:39:15.418Z")
        };
        expect(repositorioMock.registrar).toHaveBeenCalledWith(datosCampañaEsperados);
    })
    it('Si el multiplicador de puntos es cero, debe guardarlo como null', async () => {
        const datosCampaña = {
            multiplicadorCashback: 2,
            multiplicadorPuntosLeal: 0,
            idComercio: 1,
            idSucursal: 1,
            valorCompra: 50000,
            fechaInicio: new Date("2023-07-06T15:39:15.418Z"),
            fechaFin: new Date("2023-07-06T15:39:15.418Z")
          };
          await servicio.ejecutar(datosCampaña);
          const datosCampañaEsperados = {
            multiplicadorCashback: 2,
            multiplicadorPuntosLeal: null,
            idComercio: 1,
            idSucursal: 1,
            valorCompra: 50000,
            fechaInicio: new Date("2023-07-06T15:39:15.418Z"),
            fechaFin: new Date("2023-07-06T15:39:15.418Z")
        };
        expect(repositorioMock.registrar).toHaveBeenCalledWith(datosCampañaEsperados);
    })
});