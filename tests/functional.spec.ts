import { describe, it, beforeAll } from '@serenity-js/playwright-test';
import { actorCalled, configure } from '@serenity-js/core';
import { Ensure, equals } from '@serenity-js/assertions';
import { UsuarioSistema, CrearGuia, ResponseStatus, ErrorMessage } from '../src/screenplay';
import { TestData } from '../src/models/TestData';

describe('Pruebas Funcionales - Creación de Guías con Recaudo', () => {

  beforeAll(async () => {
    configure({
      actors: new UsuarioSistema(),
      crew: [
        '@serenity-js/console-reporter',
        '@serenity-js/serenity-bdd',
        [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],
      ]
    });
  });

  it('Caso 1: Valor válido (entre 1 y 16M) con referencia válida (1 a 30 caracteres) - Debe crear guía exitosamente', async () => {
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conDatos(TestData.getBaseGuiaRequest()),
      Ensure.that(ResponseStatus.value(), equals(200))
    );
  });

  it('Caso 2: Valor menor a $1 con referencia válida - Debe retornar error valor menor al mínimo', async () => {
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conValorRecaudar(0, TestData.getBaseGuiaRequest()),
      Ensure.that(ResponseStatus.value(), equals(400)),
      Ensure.that(ErrorMessage.value(), equals('El valor a recaudar debe estar entre $1 y $16.000.000'))
    );
  });

  it('Caso 3: Valor mayor a $16.000.000 con referencia válida - Debe retornar error valor mayor al permitido', async () => {
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conValorRecaudar(16000001, TestData.getBaseGuiaRequest()),
      Ensure.that(ResponseStatus.value(), equals(400)),
      Ensure.that(ErrorMessage.value(), equals('El valor a recaudar debe estar entre $1 y $16.000.000'))
    );
  });

  it('Caso 4: Valor nulo/no enviado con referencia válida - Debe retornar error valor obligatorio faltante', async () => {
    const datosConValorNulo = { ...TestData.getBaseGuiaRequest() };
    delete datosConValorNulo.valorRecaudar;
    
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conDatos(datosConValorNulo),
      Ensure.that(ResponseStatus.value(), equals(400)),
      Ensure.that(ErrorMessage.value(), equals('El campo valorRecaudar es requerido'))
    );
  });

  it('Caso 5: Valor válido con referencia vacía - Debe retornar error referencia obligatoria', async () => {
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conReferenciaRecaudo('', TestData.getBaseGuiaRequest()),
      Ensure.that(ResponseStatus.value(), equals(400)),
      Ensure.that(ErrorMessage.value(), equals('El campo referenciaRecaudo no puede estar vacío'))
    );
  });

  it('Caso 6: Valor válido con referencia nula/no enviada - Debe retornar error referencia requerida', async () => {
    const datosConReferenciaNull = { ...TestData.getBaseGuiaRequest() };
    delete datosConReferenciaNull.referenciaRecaudo;
    
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conDatos(datosConReferenciaNull),
      Ensure.that(ResponseStatus.value(), equals(400)),
      Ensure.that(ErrorMessage.value(), equals('El campo referenciaRecaudo es requerido'))
    );
  });

  it('Caso 7: Valor válido con referencia de más de 30 caracteres - Debe retornar error excede longitud permitida', async () => {
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conReferenciaRecaudo('a'.repeat(31), TestData.getBaseGuiaRequest()),
      Ensure.that(ResponseStatus.value(), equals(400)),
      Ensure.that(ErrorMessage.value(), equals('El campo referenciaRecaudo excede la cantidad de caracteres permitidos, 30'))
    );
  });

  it('Caso 8: Valor menor a $1 con referencia vacía - Debe retornar error 400', async () => {
    const datosInvalidos = { ...TestData.getBaseGuiaRequest() };
    datosInvalidos.valorRecaudar = 0;
    datosInvalidos.referenciaRecaudo = '';
    
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conDatos(datosInvalidos),
      Ensure.that(ResponseStatus.value(), equals(400))
    );
  });

  it('Caso 9: Valor nulo con referencia nula - Debe retornar error 400', async () => {
    const datosSinCamposObligatorios = { ...TestData.getBaseGuiaRequest() };
    delete datosSinCamposObligatorios.valorRecaudar;
    delete datosSinCamposObligatorios.referenciaRecaudo;
    
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conDatos(datosSinCamposObligatorios),
      Ensure.that(ResponseStatus.value(), equals(400))
    );
  });

  it('Caso 10: Valor mayor a $16.000.000 con referencia de más de 30 caracteres - Debe retornar error 400', async () => {
    const datosAmbosInvalidos = { ...TestData.getBaseGuiaRequest() };
    datosAmbosInvalidos.valorRecaudar = 16000001;
    datosAmbosInvalidos.referenciaRecaudo = 'a'.repeat(31);
    
    await actorCalled('Usuario del Sistema').attemptsTo(
      CrearGuia.conDatos(datosAmbosInvalidos),
      Ensure.that(ResponseStatus.value(), equals(400))
    );
  });

}); 