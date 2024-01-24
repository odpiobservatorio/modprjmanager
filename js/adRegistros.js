
async function crear() {
    // Guardar un objeto e imprimir su id automatico despues de guardar
    const docRef = GLOBAL.addRegistro(TempProject);
    verProyectos()
}

async function VerRegistro() {
    //const docRef=GLOBAL.viewRegistro("8SXC8PbUHv0Td0NhZKgL");
    verProyectos()
}

async function verProyectos() {
    const docRef = GLOBAL.viewProyects();
    CrearFichas(DataProyectos)
}

async function CrearFichas(datos) {

    document.getElementById("lstResGis").innerHTML = "";
    
    datos.forEach(proyecto => {
        //Crea un párrafo
        const inP = document.createElement("input");
        inP.classList.add("form-control");
        inP.value = proyecto.nProyecto;

        //Crea un entorno vinvulo
        const a = document.createElement("a");
        a.href = "#";
        //a.onclick = () => verCaso(registro);
        a.classList.add("list-group-item", "list-group-item-action", "text-white", "mb-1");
        a.setAttribute("style", "background-color:#AF7AC5;")
        

        //Crea un encabezado a la ficha
        const h6 = document.createElement("p");
        h6.textContent = "Proyecto";
        h6.classList.add("mb-1");

        const sm = document.createElement("small");
        sm.classList.add("text-white");
        sm.textContent = "Eliminar";
        sm.onclick = () => borrarProyecto(proyecto.id)

        const divA = document.createElement("div");
        divA.classList.add("d-flex", "w-100", "justify-content-between");

        divA.appendChild(h6);
        divA.appendChild(sm);
        a.appendChild(divA);

        a.appendChild(inP);

        // Agregar a la lista de resultados
        document.getElementById("lstResGis").appendChild(a);
    })
}

function borrarProyecto(id) {
    alert(id)
}
