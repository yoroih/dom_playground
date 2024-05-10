const d = document;
const n = navigator;

export default function getGeolocation(id){
  const $id = d.getElementById(id);
  const options = {
    enableHighAccuracy: true,
    Timeout: 1000,
    maximumAge: 0
  };

  const succes = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = ` 
      <p>Tu posición actual es:</p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b> </li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precisión: <b>${Math.floor(coords.accuracy)}</b> metros</li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en GOOGLE MAPS</a>
    `
  };

  const error = (err) => {
    $id.innerHTML = `<p><b>Error ${err.code}</b>: ${err.message}</p>`
    console.log(`Error: ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(succes, error, options);

  //WatchPosition()
};