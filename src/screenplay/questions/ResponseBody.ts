import { Question } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';

export const ResponseBody = {
  value: () =>
    Question.about<any>('cuerpo de la respuesta', actor =>
      LastResponse.body().answeredBy(actor)
    )
}; 