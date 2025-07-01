import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export const ResponseStatus = {
  value: () =>
    Question.about<number>('código de estado de la respuesta', actor =>
      LastResponse.status().answeredBy(actor)
    )
}; 