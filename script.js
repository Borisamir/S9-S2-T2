document.addEventListener("DOMContentLoaded" , () =>{

    let ul=document.getElementById("lista")
    

    function agregarTarea(){0

        let li=document.createElement("li")
        li.className="elemento"
        let input=document.getElementById("tarea").value
        li.contentEditable="True"
        li.innerText=input
        ul.appendChild(li)
    }

    document.getElementById("agregarTarea").addEventListener("click" , agregarTarea)

    function eliminarTarea(){
        document.querySelector(".elemento").remove()
    }

    document.getElementById("eliminar-tarea").addEventListener("click" , eliminarTarea)


})