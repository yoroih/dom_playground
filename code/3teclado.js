const d = document;

let x=0, y=0;

export function moveBall(e, ball, stage){
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  console.log(e.keyCode);
  console.log(e.key)
  console.log(limitsBall, limitsStage);

  switch (e.keyCode) {
    case 37:
      e.preventDefault();
      if(limitsBall.left > limitsStage.left) x--;
      break;

    case 38:
      e.preventDefault();
      if(limitsBall.top > limitsStage.top) y--;
      break;

    case 39:
      e.preventDefault();
      if(limitsBall.right < limitsStage.right) x++;
      break;

    case 40:
      e.preventDefault();
      if(limitsBall.bottom < limitsStage.bottom) y++;
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x*10}px, ${y*10}px)`
};

