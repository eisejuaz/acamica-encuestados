var modelo = new Modelo();

var vistaAdmin = new VistaAdministrador(modelo, new Controlador(modelo), {
  lista: $("#lista"),
  botonEditarPregunta: $("#editarPregunta"),
  botonBorrarPregunta: $("#borrarPregunta"),
  borrarTodo: $("#borrarTodo"),
  pregunta: $("#pregunta"),
  respuesta: $("#respuesta"),
  formulario: $("localStorageForm"),
  botonAgregarPregunta: $("#agregarPregunta"),
  muestraDeRespuestas: $(".panel-body")
});

vistaAdmin.inicializar();
var vistaUsuario = new VistaUsuario(modelo, new Controlador(modelo), {
  listaPreguntas: $("#preguntas"),
  botonAgregar: $("#agregarBoton"),
  nombreUsuario: $("#nombreUsuario"),
  graficosDeTorta: $("#graficosDeTorta")
});

vistaUsuario.inicializar();

$(document).ready(function() {
  var preguntasLocalStorage = localStorage.getItem("array");
  if (localStorage.length >= 0) {
    modelo.preguntas = JSON.parse(preguntasLocalStorage);
    modelo.preguntaAgregada.notificar();
  }
});
