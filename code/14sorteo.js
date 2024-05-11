const d = document;

export default function draw (btn, selector){
  //función para selección random por medio de html  
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector);
    const random = Math.floor(Math.random()*$players.length);
    const winner = $players[random];
      // console.log(`Lista: ${$players}, Número: ${random}, Winner: ${winner}`)
      // console.log($players, random, winner);
      return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", e => {
    if(e.target.matches(btn)){
      let result = getWinner(selector);
      alert(result);
    }
  });
};

