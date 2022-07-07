
class Addon {
    constructor(n, p){
        this.name = n;
        this.precio = p;
    }
    options()
    { 
        if (this.name != '0'){
      opciones4.innerHTML += "<option value='" + this.name +"' id='" + this.name + "'>" + this.name+ "</option>";
        }
    }

}
var addones = [];
addones.push(new Addon('0', 0));
addones.push(new Addon('ADD ON COVID EXTRA COBERTURA (1.500 USD) precio por persona', 50));
addones.push(new Addon('ADD ON COVID EXTRA COBERTURA (3000 USD) precio por persona', 70));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 10.000 USD (Daily) precio por dia', 6));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 10.000 USD (MT) precio por persona', 75));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 10.000 USD (LSD) precio por dia', 2.5));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 10.000 USD (Daily) precio por persona', 500));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 60.000 USD (Daily) precio por persona', 100));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 60.000 USD (MT) precio por persona', 150));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 150.000 USD (Daily) precio por persona', 200));
addones.push(new Addon('ADD ON DE DEPORTES COBERTURA DE 150.000 USD (LSA) precio por persona', 300));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 15.000 USD (Daily) precio por dia', 5));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 15.000 USD (MT) precio por persona', 70));
addones.push(new Addon('ADD ON DE PREEXISTENCIA COBERTURA DE 15.000 USD (LSD) precio por persona', 70));
addones.push(new Addon('ADD ON DE MASCOTAS COBERTURA DE 1.000 USD (Daily) precio por dia', 2));
addones.push(new Addon('ADD ON DE MASCOTAS COBERTURA DE 1.000 USD (LSD) precio por persona', 80));
addones.push(new Addon('ADD ON DE MASCOTAS COBERTURA DE 1.000 USD (MT) precio por persona', 80));
addones.push(new Addon('ADD ON DE MASCOTAS COBERTURA DE 1.000 USD (LSA) precio por persona', 80));
addones.push(new Addon('ADD ON BOLSO PROTEGIDO LAS 24 Hrs / Todas las Modalidades', 300));
addones.push(new Addon('ADD ON EMBARAZO :  hasta la semana 32 inclusive/COBERTURA 10.000 USD', 100));