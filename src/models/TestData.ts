import { GuiaRequest } from './GuiaRequest';

export class TestData {
  static getBaseGuiaRequest(): GuiaRequest {
    return {
      identificacion: "890904713",
      divisionCliente: "00",
      idProceso: 100001,
      valorRecaudar: 1000,
      referenciaRecaudo: "REF001",
      valoracion: 20000,
      tipoCuenta: 1,
      contenido: "Zapatos",
      nivelServicio: 22,
      referenciaGuia: "Guia QA 001",
      usuario: "coordinadora@coordinadora.com",
      observaciones: "Cuidado fragil",
      fuente: "envios",
      codigoPais: 170,
      tipoProducto: "4",
      tipoEnvioEspecial: false,
      quienPagaEnvio: "1",
      tipoGuia: 1,
      codigoRemision: "28888391110",
      codigoProducto: 1,
      detalle: [
        {
          codigoPaquete: "1992",
          nombrePaquete: "Paquete Zapatos",
          valorDeclarado: 20000,
          pesoReal: 20,
          largo: 30,
          alto: 15,
          ancho: 20,
          referencia: "",
          unidades: 5,
          ubl: 1,
          idContenido: 2933
        }
      ],
      datosRemitente: {
        identificacionRemitente: "8289830",
        nombreRemitente: "Pedro Paramo",
        celularRemitente: "3100000000",
        divisionRemitente: "01",
        tipoDocumentoRemitente: 13,
        detalleRemitente: "Casa gris",
        tipoViaRemitente: "12",
        viaRemitente: "21",
        numeroRemitente: "55 E 45",
        codigoCiudadRemitente: "10029000",
        otraDireccionRemitente: "Calle 55 C",
        descripcionTipoViaRemitente: "Calle",
        direccionRemitente: "Carrera 21 casa marron"
      },
      datosDestinatario: {
        identificacionDestinatario: "1098765432",
        divisionDestinatario: "01",
        tipoDocumentoDestinatario: 13,
        codigoPostalDestinatario: "",
        detalleDestinatario: "Apartamento 301",
        tipoViaDestinatario: "11",
        viaDestinatario: "10",
        numeroDestinatario: "33 B 21",
        codigoCiudadDestinatario: "10030000",
        otraDireccionDestinatario: "Carrera 10 A",
        descripcionTipoViaDestinatario: "Carrera",
        direccionDestinatario: "Carrera 10 A #33B-21",
        nombreDestinatario: "Cliente QA",
        indicativoDestinatario: "57",
        celularDestinatario: "3101234567",
        correoDestinatario: "clienteqa@correo.com"
      }
    };
  }

  static getMinimalGuiaRequest(): GuiaRequest {
    const base = this.getBaseGuiaRequest();
    delete base.contenido;
    delete base.observaciones;
    delete base.detalle;
    return base;
  }
} 