const input = document.getElementById('ingresar-tarea');
const buton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

buton.addEventListener('click',agregarTarea);
input.addEventListener('keydown',(e)=>{
  //e.key es para saber cual de las teclas del evento fue presionada 
  if(e.key ==='Enter'){
    agregarTarea();
  }
});

function agregarTarea() {
  if(input.value){// verifica si hay algo en el input ya que por defecto es null o false 
    //se crea el div
    let tareaNueva =document.createElement('div');
    //se le asigna la clase
    tareaNueva.classList.add('tarea');

    //se crea elelmento parrafo
    let texto = document.createElement('p');
    //se le el value el texto que esta en el input
    texto.innerText= input.value;
    //appendChild(); agragar un nodo hijo al final del div
    tareaNueva.appendChild(texto);

    //se genera div icono
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    //iconos
    let completar =document.createElement('i');
    completar.classList.add('bi','bi-check-circle-fill','icono-completar');
    completar.addEventListener('click',completarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi','bi-trash3-fill','icono-eliminar');
    iconos.append(completar,eliminar);
    eliminar.addEventListener('click',eliminarTarea)

    //agrgar tarea a la lista
    listaDeTareas.appendChild(tareaNueva);
    console.log(input.value)

  }else{
    alert('ingresa tarea');
  }
};


function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');// sirve para altenar clases
  console.log(tarea)
  
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();// elimina la tarea
}




