import hamburguerMenu from "./code/1uno.js";
import { digitalClock, alarm } from "./code/2alarm.js";
import { moveBall } from "./code/3teclado.js";
import countdown from "./code/4countdown.js";
import scrollTopButton from "./code/5scrollbutton.js";



const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

  hamburguerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");

  countdown("countdown", "Oct 13, 2024 00:05:00", "Happy Birthday");

  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});