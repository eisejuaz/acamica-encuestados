/*
 * Controlador
 */
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
    this.modelo.agregarPregunta(pregunta, respuestas);
  },

  borrarPregunta: function(id) {
    modelo.borrarPregunta(id);
  },

  editarPregunta: function(id) {
    let nuevaPregunta = prompt("Por favor, escriba su nueva pregunta: ");
    modelo.editarPregunta(id, nuevaPregunta);
  },

  borrarTodas: function() {
    this.modelo.borrarTodas();
  },

  agregarVoto: function(nombrePregunta, respuestaSeleccionada) {
    this.modelo.sumarVoto(nombrePregunta, respuestaSeleccionada);
  }
};
