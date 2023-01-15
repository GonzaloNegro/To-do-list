const ingresos = [

];

let loadApp = async () => {
    ingresoStorage = localStorage.getItem("ingresos")
    if (ingresoStorage){
        const ingresosJson = JSON.parse(ingresoStorage);
        ingresosJson.forEach(ingreso => {
            ingresos.push(new Ingreso(ingreso._title, ingreso._date, ingreso._description));
        });
    }
    loadIngresos();
}

const loadIngresos = () => {
    let ingresosHTML = "";
    for (let ingreso of ingresos) {
        ingresosHTML += createIngreso(ingreso);
    }
    document.getElementById("main_sec_info").innerHTML = ingresosHTML;
}

const createIngreso = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento">
        <div class="elemento_title">
            <div>
                <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline" onclick="deleteIngreso(${ingreso.id})" ></ion-icon>
                </button>
            </div>
            <div>
                <h3>${ingreso.title}</h3>
            </div>
        </div>
        <div class="elemento_contenido">
            <div class="elemento_contenido_date">Fecha: 
                ${ingreso.date}
            </div>
            <div class="elemento_contenido_description">
                ${ingreso.description}
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const deleteIngreso = (id)=>{
    let indiceEliminar =  ingresos.findIndex( ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
/*     loadHeader(); */
    loadIngresos();
}


const addDato = ()=>{
    let form = document.forms["form"];
    let title = form["title"];
    let date = form["date"];
    let description = form["description"];
    if(title.value !== "" && description.value !== ""){
        ingresos.push(new Ingreso(title.value, date.value, description.value));
        localStorage.setItem("ingresos", JSON.stringify(ingresos));

        loadIngresos();
    }
}

window.onload = function(){
    var fecha = new Date();
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate();
    var ano = fecha.getFullYear();
    if(dia<10)
      dia='0'+dia;
    if(mes<10)
      mes='0'+mes
      let formato1 = `${dia}-${mes}-${ano}`;
    document.getElementById('date').value=ano+"-"+mes+"-"+dia;
  }