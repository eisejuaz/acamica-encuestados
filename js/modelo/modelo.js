/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaEliminada = new Evento(this);
  this.votoSumado = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    let mayorId = this.ultimoId;
    this.preguntas.forEach(pregunta => {
      if (pregunta.id > mayorId) {
        mayorId = pregunta.id;
      }
    });
    this.ultimoId = mayorId;
    return this.ultimoId;
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    let id = this.obtenerUltimoId();
    id++;
    let nuevaPregunta = {
      textoPregunta: nombre,
      id: id,
      cantidadPorRespuesta: respuestas
    };
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  borrarPregunta: function(id) {
    this.preguntas = this.preguntas.filter(pregunta => pregunta.id != id);
    this.guardar();
    this.preguntaEliminada.notificar();
  },

  // obtengo el id de las preguntas que preciso
  obtenerPreguntaPorID: function(id) {
    let pregunta = this.preguntas.filter(pregunta => pregunta.id === id);
    return pregunta[0];
  },

  editarPregunta: function(id, nuevaPregunta) {
    let pregunta = this.obtenerPreguntaPorID(id);
    pregunta.textoPregunta = nuevaPregunta;
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  borrarTodas: function() {
    this.preguntas = [];
    this.guardar();
    this.preguntaEliminada.notificar();
  },

  sumarVoto: function(nombrePregunta,respuestaSeleccionada) {
    let preguntaVotada = this.preguntas.find(pregunta => pregunta.textoPregunta === nombrePregunta);
    let respuestaElegida = preguntaVotada.cantidadPorRespuesta.find(respuesta => respuesta.textoRespuesta === respuestaSeleccionada);
    respuestaElegida.cantidad++;
    this.guardar();
    this.votoSumado.notificar();
  },

  //se guardan las preguntas
  guardar: function() {
    //localstorage
    localStorage.setItem("array", JSON.stringify(this.preguntas));
  }
};
