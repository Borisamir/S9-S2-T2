document.addEventListener("DOMContentLoaded" , () =>{

    let ul=document.getElementById("lista")

    function agregarTarea(){
        let li=document.createElement("li")
        li.className="elemento"
        li.contentEditable="True"
        ul.appendChild(li)
    }

    document.getElementById("agregarTarea").addEventListener("click" , agregarTarea)

    function eliminarTarea(){
        document.querySelector(".elemento").remove()
    }

    document.getElementById("eliminar-tarea").addEventListener("click" , eliminarTarea)


})