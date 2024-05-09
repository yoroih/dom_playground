const d = document;
const w = window;
const n = navigator;

export default function networkStatus(){
  const connection = () => {
    const $div = d.createElement("div");

    if(n.onLine){
      $div.textContent = "Conexión Restablecida";
      $div.classList.add("online");
      $div.classList.remove("offline");
    } else {
      $div.textContent = "Conexión Perdida";
      $div.classList.add("offline");
      $div.classList.remove("online");
    }

    d.body.insertAdjacentElement("afterbegin", $div);
    
    setTimeout(() => d.body.removeChild($div), 1000);

  };
  w.addEventListener("online", e => connection());
  w.addEventListener("offline", e => connection());
};


export function showConnection(id){
  const $id = d.getElementById(id);

  if(n.onLine){
    $id.innerHTML="<h4>Internet Access </h4>";
  } 
};