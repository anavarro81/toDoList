const taskName  = document.querySelector('input')
const addButton = document.querySelector('button')
const task_list = document.querySelector('ul')

addButton.addEventListener("click", (e) => {
    // Evita recargar el formulario cada vez que se pulse el botón. 
    e.preventDefault();

    const text = taskName.value;
    console.log(text)
    
    


// Creamos un elemento un nuevo elemento <li> para la lista de tareas. 
task_item = document.createElement('li')
// Creamos un párrafo que contendrá el nombre de la tarea agregada. 
p = document.createElement('p')

// Le asigamos el texto introducido 
p.textContent = text;


// Al elemento de lista le agregamos el párrafo. 
task_item.appendChild(p)

// A la lista le agregamos el elemeto. 
task_list.appendChild(task_item)

taskName.value = ""

});