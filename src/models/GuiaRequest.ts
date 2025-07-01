export interface DetalleItem {
  codigoPaquete: string;
  nombrePaquete: string;
  valorDeclarado: number;
  pesoReal: number;
  largo: number;
  alto: number;
  ancho: number;
  referencia: string;
  unidades: number;
  ubl: number;
  idContenido: number;
}

export interface DatosRemitente {
  identificacionRemitente: string;
  nombreRemitente: string;
  celularRemitente: string;
  divisionRemitente: string;
  tipoDocumentoRemitente: number;
  detalleRemitente: string;
  tipoViaRemitente: string;
  viaRemitente: string;
  numeroRemitente: string;
  codigoCiudadRemitente: string;
  otraDireccionRemitente: string;
  descripcionTipoViaRemitente: string;
  direccionRemitente: string;
}

export interface DatosDestinatario {
  identificacionDestinatario: string;
  divisionDestinatario: string;
  tipoDocumentoDestinatario: number;
  codigoPostalDestinatario: string;
  detalleDestinatario: string;
  tipoViaDestinatario: string;
  viaDestinatario: string;
  numeroDestinatario: string;
  codigoCiudadDestinatario: string;
  otraDireccionDestinatario: string;
  descripcionTipoViaDestinatario: string;
  direccionDestinatario: string;
  nombreDestinatario: string;
  indicativoDestinatario: string;
  celularDestinatario: string;
  correoDestinatario: string;
}

export interface GuiaRequest {
  identificacion: string;
  divisionCliente: string;
  idProceso: number;
  valorRecaudar: number;
  referenciaRecaudo: string;
  valoracion: number;
  tipoCuenta: number;
  contenido?: string;
  nivelServicio: number;
  referenciaGuia: string;
  usuario: string;
  observaciones?: string;
  fuente: string;
  codigoPais: number;
  tipoProducto: string;
  tipoEnvioEspecial: boolean;
  quienPagaEnvio: string;
  tipoGuia: number;
  codigoRemision: string;
  codigoProducto: number;
  detalle?: DetalleItem[];
  datosRemitente: DatosRemitente;
  datosDestinatario: DatosDestinatario;
} 