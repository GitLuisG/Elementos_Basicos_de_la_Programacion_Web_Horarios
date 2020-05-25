

class DatosAlumno{
    constructor(Alumno, Matricula, mesinicio, mesfinal, Plan, year){
        this.nameAlumno = Alumno;
        this.matricula = Matricula;
        this.mesinicio = mesinicio;
        this.mesfinal = mesfinal;
        this.Plan = Plan;
        this.year = year;
        //document.write("Conectado");
        
    }
    GetAlumno(){
        return this.nameAlumno.value;
    }
    GetMatricula(){
        return this.matricula.value;
    }
    Getmesinicio(){
        return this.mesinicio.value;
    }
    GetmesFinal(){
        return this.mesfinal.value;
    }

    GetProAca(){
        return this.Plan.value +"-"+ this.year;
    }
}

btnEnviar.addEventListener('click', btnEnviar_click);
let inputs, i=0;
function btnEnviar_click(e) {
    const txtAlumno = document.getElementById('name');
    const txtMatricula = document.getElementById('Matricula');
    const txtinicio = new Date(document.getElementById('inicio').value);
    const txtfin = new Date(document.getElementById('fin').value);
    const txtYear = 2010;
    const txtPlan = document.getElementById('Plan');
    inputs = new DatosAlumno(txtAlumno, txtMatricula, txtinicio.getMonth(), txtfin.getMonth(),txtPlan,txtYear);
    document.getElementById('Panel').innerHTML =""; 
    btnCrearTabla_click();
    print();
    
}

const tablaDinamicaTbody = document.getElementById('tabla-dinamica-tbody');
//btnEnviar.addEventListener('click', btnCrearTabla_click);
DiasSemana= new Array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

Materias = ["[Materia][Profesor]","Grupo",
[
    ["[NEGOCIOS ELECTRÓNICOS]-[MARIO HUMBERTO RODRIGUEZ CHÁVEZ]"],
    ["[PROGRAMACIÓN WEB]-[LUIS ROBERTO FLORES DE LA FUENTE]"],
    ["[GRAFICACIÓN POR COMPUTADORA AVANZADA]-[MANUEL RUÍZ MÉNDEZ]"],
    ["[PROYECTOS DE TECNOLOGÍAS DE LA INFORMACIÓN]-[JOSÉ FIDENCIO LÓPEZ LUNA]"],
    ["[ADMINISTRACIÓN DE SISTEMAS INTEGRALES]-[ISRAEL PULIDO PICAZO]"],
    ["[MINERÍA DE DATOS APLICADA]-[MARIO ALBERTO GÓMEZ RODRÍGUEZ]"],
    ["[INGLÉS V]-[HOMAR GARCIA GALVAN]"],
],["ITI-07434","ITI-07435","ITI-07436","ITI-07437","ITI-07438","ITI-07439","ITI-07467"],
[
    ["Lunes      ","Martes     ","Miercoles  ","Jueves     ", "Viernes    ","Sabado"],
    ["13:00-13:54","Libre      ","14:00-14:54","13:00-13:54", "Libre      ","       "],
    ["           ","18:55-19:49","18:55-19:44","18:00-19:49", "Libre      ","       "],
    ["           ","14:55-16:44","15:50-16:44","15:50-16:44", "15:50-16:44","       "],
    ["15:50 16:44","Libre      ","14:55-15:49","14:55-15:49", "Libre      ","       "],
    ["18:00 18:54","18:00-18:54","18:00-18:54","Libre      ", "Libre      ","       "],
    ["14:00 15:49","Libre      ","Libre      ","14:00-14:54", "14:00 15:49","       "],
    ["16:45 17:39","16:45-17:39","16:45-17:39","16:45-17:39", "16:45 17:39","       "]
]
];

function btnCrearTabla_click(e) {
    let r = 8;
    let c = 9;
    let temp=0;
    let temp2=0;
    let temp3=0;
    let band = 0;
    if (r <= 0 || c <= 0) return;
    //tablaDinamicaTbody.innerHTML = '';  // borramos la tabla actual.
    let rowsFragment = document.createDocumentFragment();
    document.getElementById("alumno").innerHTML = "Alumno: "+inputs.GetAlumno();
    document.getElementById("matricula").innerHTML = "Matricula: "+inputs.GetMatricula();
    document.getElementById("proaca").innerHTML = "Programa Academico: INGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN";
    document.getElementById("plan").innerHTML = "Plan de estudio: "+inputs.GetProAca();
    document.getElementById("sede").innerHTML = "Sede: Victoria";
    for (let ir = 0; ir < r; ir++) {

        // Creamos un nodo tr (row) al cual vamos a agregar los nodos td.
        let tr = document.createElement('tr');

        // Creamos los nodos td y los agregamos al tr.
        for (let ic = 0; ic < c; ic++) {
            let td = document.createElement('td');
            td.id = 'td_' + ir + '_' + ic;
            td.classList.add('td-m');
            td.textContent = `[${ir}][${ic}]`;  // string interpolation
            if(band==ir && ic != 0 && ic != 1 && ic < 8){
                td.textContent = `${Materias[4][band][temp3]}`;
                temp3++;
            }
            if(ic==8) td.textContent = `    4`;
            
            if(ir == 0 && ic == 0){
                td.textContent = `[Materia] [Profesor]`;
            }
            if(ir == 0 && ic == 1){
                td.textContent = `Grupo`;
            }
            if(ir == 0 && ic != 0 && ic != 1 && i < DiasSemana.length){
                if(temp2 < 8){
                    td.textContent = `${Materias[4][0][temp2++]}`;
                }
            }
            if(ir==0 && ic==8){
                td.textContent = `Creditos`;
            }
            if(ic == 0 && ir != 0){
                td.textContent = Materias[2][temp];

            }
            if(ic == 1 && ir != 0){
                td.textContent = Materias[3][temp];
                temp++;
            }

            
            td.addEventListener('click', tablaDinamicaTd_click);  // click event
            tr.appendChild(td);
        }
        temp3=0;
        band++;
        // Agregamos el tr creado (que dentro tiene los td) al fragment.
        rowsFragment.appendChild(tr);

    }

    // Agregamos los nodos tr del fragment al tbody de la tabla dinámica.
    tablaDinamicaTbody.appendChild(rowsFragment);

}

function tablaDinamicaTd_click(e) {
    const td = this;
    td.style.backgroundColor = 'red';
    alert('Hizo click en ' + td.id);
}
