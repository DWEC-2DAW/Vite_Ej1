/* 1.EJERCICIO 1: INCREMENTAR CONTADOR
Crea un módulo que implemente una función incrementar() que devuelva un número
empezando por 1 y que se vaya incrementando en cada llamada, y otra función reset() para
reinicializarlo.
Crea una página web que tenga un único <p> con el contenido inicial 0, un botón “Incrementar” y
otro botón “Reset”.
Crea otro módulo que implemente la funcionalidad necesaria para hacer que, al pulsar el botón, el
párrafo se incremente o se resetee a cero. */

// Path: src/counter.js

let contador = 0

export function incrementar() {

   contador++
    return contador
}

export function reset() {

   contador = 0
    return contador
}

