const d = document;
const w = window;
const n = navigator;

export default function networkStatus(){
  w.addEventListener("online", e => console.log(n.onLine));
  w.addEventListener("offline", e => console.log(n.onLine));
};
