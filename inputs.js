class Inputs{
    constructor(Alumno, Matricula, mesinicio, mesfinal, ProAca){
        this.nameAlumno = Alumno;
        this.matricula = Matricula;
        this.mesinicio = mesinicio;
        this.mesfinal = mesfinal;
        this.ProAca = ProAca;
        document.write("Conectado");
    }
    
    mostrarDatos(){
        document.write(this.nameAlumno.value);
        document.write(this.matricula.value);
        document.write(this.mesinicio.value);
        document.write(this.mesfinal.value);
        document.write(this.ProAca.value);
    }
}

btnEnviar.addEventListener('click', btnEnviar_click);

function btnEnviar_click(e) {
    const txtAlumno = document.getElementById('name');
    const txtMatricula = document.getElementById('Matricula');
    const txtinicio = document.getElementById('inicio');
    const txtfin = document.getElementById('fin');
    const txtProAca = document.getElementById('ProAca');
    let inputs = new Inputs(txtAlumno, txtMatricula, txtinicio, txtfin, txtProAca);
}