const d = document;
const w = window;

export default function smartVideo(){
  const $videos = d.querySelectorAll("video[smart-data-video]");

  const cb = entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.play();
      }else{
        entry.target.pause();
      }
    });
  }

  const observer = new IntersectionObserver(cb, {threshold: 0.5});

  $videos.forEach(el => observer.observe(el));
};