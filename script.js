import hamburguerMenu from "./code/1uno.js";
import { digitalClock, alarm } from "./code/2alarm.js";
import { moveBall } from "./code/3teclado.js";
import countdown from "./code/4countdown.js";
import scrollTopButton from "./code/5scrollbutton.js";
import darkTheme from "./code/6darkmodebutton.js";
import responsiveMedia from "./code/7object_responsive.js";
import responsiveTester from "./code/8prueba_responsive.js";
import userDeviceInfo from "./code/9.deteccion_dispositivos.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Oct 13, 2024 00:05:00", "Happy Birthday");
  scrollTopButton(".scroll-top-btn");

  responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://youtu.be/2SetvwBV-SU?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="_blank" rel="noopener">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU?si=jU7Br6viC9p1dswO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
  responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://maps.app.goo.gl/yiBKBzV4BviQPrp36" target="_blank" rel="noopener">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97183.3193747869!2d-80.06290196755806!3d40.43146987091651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f16f48068503%3A0x8df915a15aa21b34!2sPittsburgh%2C%20PA%2C%20USA!5e0!3m2!1sen!2spe!4v1715123752758!5m2!1sen!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");

});

d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");