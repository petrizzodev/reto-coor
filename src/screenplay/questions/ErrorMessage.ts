import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
import { GuiaErrorResponse } from '../../models/GuiaResponse';

export const ErrorMessage = {
  value: () =>
    Question.about<string>('mensaje de error de la respuesta', actor =>
      LastResponse.body<GuiaErrorResponse>()
        .answeredBy(actor)
        .then(response => response.cause || '')
    ),

  cause: () =>
    Question.about<string>('causa del error de la respuesta', actor =>
      LastResponse.body<GuiaErrorResponse>()
        .answeredBy(actor)
        .then(response => response.cause || '')
    )
}; 