import hamburguerMenu from "./code/1uno.js";
import { digitalClock, alarm } from "./code/2alarm.js";
import { shortcuts } from "./code/3teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {

  hamburguerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

});

d.addEventListener("keydown", e => {
  shortcuts(e);
})

d.addEventListener("keyup", e => {
  shortcuts(e);
})

d.addEventListener("keypress", e => {
  shortcuts(e);
})
