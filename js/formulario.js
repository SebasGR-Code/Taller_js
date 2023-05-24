class Usuario{
    constructor(nombre, fechaNacimiento, salario, añosExperiencia){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.salario = salario;
        this.añosExperiencia = añosExperiencia;
    };

    calcularEdad(){
        let hoy = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

        return "La edad de "+this.nombre +" es "+edad;
    }

    calcularSalario(){
        let porcentaje = (this.salario * 10)/100;
        let total = this.salario - porcentaje;

        return "El salario es de "+total;
    }

    calcularExperiencia(){
        var fechaFin = new Date();
        var fechaInicio = new Date(fechaFin.setFullYear(fechaFin.getFullYear()-this.añosExperiencia));
        var fechaFin = new Date();
        
        var diff = fechaFin.getTime() - fechaInicio.getTime();
        var dias = diff / (1000 * 60 * 60 * 24);
        var horas = diff / (1000 * 60 * 60);

        return "Su experiencia es de "+dias+" dias o "+horas +" horas";
    }

};

class Doctor extends Usuario{
    constructor(nombre, fechaNacimiento, salario, añosExperiencia){
        super(nombre, fechaNacimiento, salario, añosExperiencia)
    };

    info(){
        return "El nombre del Doctor es "+this.nombre;
    }

    calcularPension(){
        let hoy = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

        var tiempo = 62 - edad;

        return "Le faltan "+tiempo+ " para la pension";
    }
};

class Abogado extends Usuario{
    constructor(nombre, fechaNacimiento, salario, añosExperiencia){
        super(nombre, fechaNacimiento, salario, añosExperiencia)
    };

    info(){
        return "El nombre del abogado es "+this.nombre;
    }

    calcularPension(){
        let hoy = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

        var tiempo = 62 - edad;

        return "Le faltan "+tiempo+ " para la pension";
    }
};

class Programador extends Usuario{
    constructor(nombre, fechaNacimiento, salario, añosExperiencia){
        super(nombre, fechaNacimiento, salario, añosExperiencia)
    };

    info(){
        return "El nombre del programador es "+this.nombre;
    }

    calcularPension(){
        let hoy = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

        var tiempo = 62 - edad;

        return "Le faltan "+tiempo+ " para la pension";
    }
};

class Profesor extends Usuario{
    constructor(nombre, fechaNacimiento, salario, añosExperiencia){
        super(nombre, fechaNacimiento, salario, añosExperiencia)
    };

    info(){
        return "El nombre del profesor es "+this.nombre;
    }

    calcularPension(){
        let hoy = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);

        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

        var tiempo = 62 - edad;

        return "Le faltan "+tiempo+ " años para la pension";
    }
};

var nombre = [];
var fechaNacimiento = [];
var salario = [];
var añosExperiencia = [];
var profesion = [];

function logSubmit(event) {
    event.preventDefault();
    nombre.push(document.getElementById("nombre").value);
    fechaNacimiento.push(document.getElementById("fechaNacimiento").value);
    salario.push(document.getElementById("salario").value);
    añosExperiencia.push(document.getElementById("añosExperiencia").value);
    profesion.push(document.getElementById("profesion").value);
    alert("Dato Añadido");
}

function processData() {
    for (let index = 0; index < nombre.length; index++) {
        if (profesion[index] == 'doctor') {
            let doctor = new Doctor(nombre[index],fechaNacimiento[index],salario[index],añosExperiencia[index]);
            alert(doctor.info()+"\n"+doctor.calcularEdad()+"\n"+doctor.calcularSalario()+"\n"+doctor.calcularExperiencia()+"\n"+doctor.calcularPension()); 
        }else if (profesion[index] == 'abogado') {
            let abogado = new Abogado(nombre[index],fechaNacimiento[index],salario[index],añosExperiencia[index]); 
            alert(abogado.info()+"\n"+abogado.calcularEdad()+"\n"+abogado.calcularSalario()+"\n"+abogado.calcularExperiencia()+"\n"+abogado.calcularPension());
        }else if (profesion[index] == 'programador') {
            let programador = new Programador(nombre[index],fechaNacimiento[index],salario[index],añosExperiencia[index]);
            alert(programador.info()+"\n"+programador.calcularEdad()+"\n"+programador.calcularSalario()+"\n"+programador.calcularExperiencia()+"\n"+programador.calcularPension()); 
        }else if (profesion[index] == 'profesor') {
            let profesor = new Profesor(nombre[index],fechaNacimiento[index],salario[index],añosExperiencia[index]);
            alert(profesor.info()+"\n"+profesor.calcularEdad()+"\n"+profesor.calcularSalario()+"\n"+profesor.calcularExperiencia()+"\n"+profesor.calcularPension()); 
        }
    }
}

const form = document.getElementById('dataForm');
form.addEventListener('submit', logSubmit);