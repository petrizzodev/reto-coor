import { Actor, Cast } from '@serenity-js/core';
import { CallAnApi } from '@serenity-js/rest';

export class UsuarioSistema implements Cast {
  prepare(actor: Actor): Actor {
    return actor.whoCan(
      CallAnApi.at('https://apiv2-test.coordinadora.com')
    );
  }
} 