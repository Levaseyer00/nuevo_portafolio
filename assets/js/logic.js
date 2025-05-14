const { createApp } = Vue;

createApp({
  data() {
    return {
      mensaje: "¡Hola! Bienvenido a mi portafolio",
      descripcion: "Soy desarrollador frontend y uso Vue.js"
    };
  },
  methods: {
    cambiarMensaje() {
      this.mensaje = "¡Gracias por visitar!";
    }
  }
}).mount("#app");
