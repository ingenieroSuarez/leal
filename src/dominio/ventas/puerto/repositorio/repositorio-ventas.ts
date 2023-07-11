import { ComandoProcesarVenta  } from "src/aplicacion/ventas/comando/procesar-venta.comando";

export abstract class RepositorioVentas {
    abstract registrar(datosVenta: ComandoProcesarVenta);
  }