Feature: Creación de guía con servicio Recaudo Contra Entrega
  Como usuario del sistema de gestión de guías de envío
  Quiero crear una guía utilizando el servicio "Recaudo Contra Entrega"
  Para asegurar que el valor acordado con el destinatario sea cobrado al momento de la entrega

  Background:
    Given que soy un usuario autenticado

  Scenario: Creación exitosa con datos válidos
    Given Ingreso un valorRecaudar de 10000
    And Ingreso una referenciaRecaudo "Pedido1"
    When envío una solicitud de creación con nivelServicio 22
    Then el sistema debe responder con código 200 OK
    And debe almacenar correctamente la guía
    And debe incluir el codigo_remision en la respuesta

  Scenario: Creación con valor mínimo permitido
    Given Ingreso un valorRecaudar de 1
    And Ingreso una referenciaRecaudo "Pago1"
    When envío una solicitud de creación con nivelServicio 22
    Then el sistema debe responder con código 200 OK
    And debe almacenar correctamente la guía
    And debe incluir el codigo_remision en la respuesta

  Scenario: Creación con valor máximo permitido
    Given Ingreso un valorRecaudar de 16000000
    And Ingreso una referenciaRecaudo de "PagoTope"
    When envío una solicitud de creación con nivelServicio 22
    Then el sistema debe responder con código 200 OK
    And debe almacenar correctamente la guía
    And debe incluir el codigo_remision en la respuesta

  Scenario: Creación con caracteres especiales en referenciaRecaudo
    Given Ingreso un valorRecaudar de 5000
    And Ingreso una referenciaRecaudo con caracteres especiales "#Pedido-123_Cliente!QA"
    When envío una solicitud de creación con nivelServicio 22
    Then el sistema debe responder con código 200 OK
    And debe almacenar correctamente la guía
    And debe incluir el codigo_remision en la respuesta

  Scenario: Creación con máximos caracteres en referenciaRecaudo
    Given Ingreso un valorRecaudar de 500
    And tengo una referenciaRecaudo de 30 caracteres "123456789012345678901234567890"
    When envío una solicitud de creación con nivelServicio 22
    Then el sistema debe responder con código 200 OK
    And debe almacenar correctamente la guía
    And debe incluir el codigo_remision en la respuesta

  Scenario: Error por valorRecaudar menor al mínimo permitido
    Given Ingreso un valorRecaudar de 0
    And Ingreso una referenciaRecaudo "Pago0"
    When envío una solicitud de creación con nivelServicio 22
    Then el sistema debe responder con código 400
    And el mensaje de error debe indicar "El campo valorRecaudar debe tener un valor entre 1 y 16000000 (inclusive)"

  Scenario: Error por valorRecaudar mayor al máximo permitido
    Given Ingreso un valorRecaudar de 20000000
    And Ingreso una referenciaRecaudo "PagoFueraRango"
    When envío una solicitud de creación con nivelServicio 22
    Then el sistema debe rechazarla con error 400
    And el mensaje de error debe indicar "El campo valorRecaudar debe tener un valor entre 1 y 16000000 (inclusive)"

  Scenario: Error por referenciaRecaudo vacía
    Given Ingreso un valorRecaudar de 500
    And envío la referenciaRecaudo como cadena vacía
    When envío una solicitud de creación con nivelServicio 22
    Then debe responder con código 400
    And debe indicar "El campo referenciaRecaudo no puede estar vacío"

  Scenario: Error por valorRecaudar no enviado
    Given omito el campo valorRecaudar
    And Ingreso una referenciaRecaudo "PedidoSinRecaudo"
    When envío una solicitud de creación con nivelServicio 22
    Then debe responder con error 400
    And mostrar "El campo valorRecaudar no puede estar vacío"

  Scenario: Error por longitud excedida en referenciaRecaudo
    Given Ingreso un valorRecaudar de 500
    And Ingreso una referenciaRecaudo de más de 30 caracteres "1234567890123456789012345678901"
    When envío una solicitud de creación con nivelServicio 22
    Then debe responder con error 400
    And el mensaje debe ser "El campo referenciaRecaudo excede la cantidad de caracteres permitidos, 30" 