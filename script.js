import hamburguerMenu from "./code/1uno.js";
import { digitalClock, alarm } from "./code/2alarm.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

});

