const d=document;

export function shortcuts (e) {

  if(e.key === "a" && e.altKey){
    alert("Lanzaste una alerta con el teclado")
  }

  if(e.key === "c" && e.altKey){
    alert("Lanzaste una confirmación con el teclado")
  }

  if(e.key === "p" && e.altKey){
    alert("Lanzaste un aviso con el teclado")
  }



};

