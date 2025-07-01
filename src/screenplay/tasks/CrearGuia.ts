import { Task } from '@serenity-js/core';
import { Send, PostRequest } from '@serenity-js/rest';
import { GuiaRequest } from '../../models/GuiaRequest';

export const CrearGuia = {
  conDatos: (datos: GuiaRequest) =>
    Task.where(`#actor crea guía con los datos proporcionados`,
      Send.a(PostRequest.to('/guias/cm-guias-ms/guia').with(datos))
    ),

  conValorRecaudar: (valorRecaudar: number, baseDatos: GuiaRequest) => {
    const datos = { ...baseDatos, valorRecaudar };
    return Task.where(`#actor crea guía con valor recaudar de ${valorRecaudar}`,
      Send.a(PostRequest.to('/guias/cm-guias-ms/guia').with(datos))
    );
  },

  conReferenciaRecaudo: (referenciaRecaudo: string, baseDatos: GuiaRequest) => {
    const datos = { ...baseDatos, referenciaRecaudo };
    return Task.where(`#actor crea guía con referencia recaudo ${referenciaRecaudo}`,
      Send.a(PostRequest.to('/guias/cm-guias-ms/guia').with(datos))
    );
  },

  conDatosPersonalizados: (customData: Partial<GuiaRequest>) =>
    Task.where(`#actor crea guía con datos personalizados`,
      Send.a(PostRequest.to('/guias/cm-guias-ms/guia').with(customData))
    )
}; 