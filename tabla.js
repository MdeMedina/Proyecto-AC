class Cobertura {
    constructor(cBox, COD, Tarifa){
        this.cBox = cBox;
        this.COD = COD;
        this.Tarifa = Tarifa
    }

}




class Plan {
    constructor(n){
        this.name = n;
    }
    options()
    {
      opciones3.innerHTML += "<option value='" + this.name +"' id='" + this.name + "'>" + this.name+ "</option>";
    }

}
function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

const currency = function(number){
    return new Intl.NumberFormat('es-CL', {style: 'currency',currency: 'CLP', minimumFractionDigits: 2}).format(number);
};
class Emisivo {
    constructor(n){
        this.name = n;
    }
    options()
    {
      opciones5.innerHTML += "<option value='" + this.name +"' id='" + this.name + "'>" + this.name+ "</option>";
    }

}

function cantidadDeDias(f) {
    var aFecha1 = f.split('/');
    var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
    var fechaHoy = Date.now()
    var dif = fFecha1 - fechaHoy
    dias = Math.floor((dif / (1000*60*60*24) ) + 2)
    fechaexp()
}


function restarFechas(f1,f2)
 {
 var aFecha1 = f1.split('/');
 var aFecha2 = f2.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 dias = Math.floor((dif / (1000 * 60 * 60 * 24)) + 1);
 return dias;
 }


function nPasajeros (p) {
    opciones2.innerHTML += "<option value='" + p +"' id='" + p + "'>" + p + "</option>";
}
function pintar(){
    formatM = [];
    multic = [];
    suma = [];
    coberturas = [];
    fTs = '';
    fAdprecio = 0
    var pasaj = parseInt(opciones2.value)
    coberturas.push(new Cobertura(cBox1.checked, COD1.value, precio1.value));
    coberturas.push(new Cobertura(cBox2.checked, COD2.value, precio2.value));
    coberturas.push(new Cobertura(cBox3.checked, COD3.value, precio3.value));
    coberturas.push(new Cobertura(cBox4.checked, COD4.value, precio4.value));
    coberturas.push(new Cobertura(cBox5.checked, COD5.value, precio5.value));
    coberturas.push(new Cobertura(cBox6.checked, COD6.value, precio6.value));
    var ecode = opciones.value
    c30();
    c60();
    c150();
    c250();
    c1000();
    c3000();
    var il = items.length + 1
if (ecode == 0 || !tCambiaria.value || !inicio.value || !exp.value || opciones5.value == 0 || opciones3.value == 0 || opciones2.value == 0 || !op1 || !op2 || !op3 || !op4 || !op5 || !op6 ) {
    tablas.innerHTML = '<h1>Por favor rellene todos los campos!<h1>'
}else{
    for (var i of coberturas){
        i.Tarifa = parseFloat(i.Tarifa)
    }

    restarFechas(inicio.value, exp.value)
 for (var i of empresas) {
    if (ecode == 0 && tCambiaria == ''){
        tablas.innerHTML = "<hr><h1>Porfavor rellene todos los campos!<h1>"
    }else if (ecode == i.eCode){
        tablas.innerHTML = '<br><table class="tg"><thead><tr><th class="tg-6f5y" colspan="2" rowspan="2"><span style="font-weight:bold">Código del Emisor</span></th><th class="tg-6f5y" colspan="3" rowspan="2"><span style="font-weight:bold">Nombre de la compañía</span></th><th class="tg-6f5y" rowspan="2"><span style="font-weight:bold">Tarifa </span><br><span style="font-weight:bold">Cambiaria</span></th><th class="tg-6f5y" rowspan="2"><span style="font-weight:bold">Fecha de Inicio</span></th><th class="tg-6f5y" rowspan="2"><span style="font-weight:bold">Fecha de expira</span><th class="tg-6f5y" rowspan="2"><span style="font-weight:bold">Cantidad de días</span></th></th></tr><tr></tr></thead><tbody><tr><td class="tg-ifsj" colspan="2">'+ ecode +'</td><td class="tg-ifsj" colspan="3">'+ i.name +'</td><td class="tg-ifsj">$'+tCambiaria.value+'</td><td class="tg-ifsj">'+inicio.value+'</td><td class="tg-ifsj">'+exp.value+'</td><td class="tg-ifsj">'+dias+'</td></tr></tbody></table>'
    }

 }

 for (var m in items){
 for (var i of addones) {
    if (i.name == items[m]) {
        for(var x = 0; x < 4; x++){
        if (px[x] == i.precio){
            adPrecio = i.precio
            adPrecio1 = adPrecio * pasaj * dias

        } else if (px[0] != i.precio && px[1] != i.precio && px[2] != i.precio && px[3] != i.precio) {
        adPrecio = i.precio
        adPrecio1 = adPrecio * pasaj
        }
        }
        fAdprecio = fAdprecio + adPrecio1
        eTs = '<tr><td class="tg-k576 r1" colspan="2">'+i.name+'</td><td class="tg-k576 r1">$'+adPrecio+'</td><td class="tg-dvpl 30 r1">$'+adPrecio1+'</td> <td class="tg-dvpl 60 r1">$'+adPrecio1+'</td> <td class="tg-dvpl 100 r1">$'+adPrecio1+'</td> <td class="tg-dvpl 250 r1">$'+adPrecio1+'</td><td class="tg-dvpl 1000 r1">$'+adPrecio1+'</td><td class="tg-dvpl 3000 r1">$'+adPrecio1+'</td></tr>'
        fTs += eTs 
    }
 }}



 for (var i in coberturas){
    var num = coberturas[i].Tarifa + fAdprecio;
    num = roundToTwo(num)
    suma.push(num) 
    
}

for (var i in suma){
    var num = suma[i] * tCambiaria.value;
    num = roundToTwo(num)
    multic.push(num)
}

for (var i in multic){
    formatM.push(currency(multic[i]))
}


console.log(multic)

 tablas.innerHTML += '<br><br><table class="tg"><thead><tr><th class="tg-2a7i" colspan="2" rowspan="3"><span style="color:#FFF">Cantidad de pasajeros</span></th><th class="tg-q00o" colspan="3" rowspan="3">'+opciones5.value+'</th><th class="tg-lybg 30" rowspan="2"><span style="color:#FFF">Cobertura </span><br><span style="color:#FFF">35.000$</span></th><th class="tg-lybg 60" rowspan="2"><span style="color:#FFF">Cobertura </span><br><span style="color:#FFF">60.000$</span></th><th class="tg-lybg 100" rowspan="2"><span style="color:#FFF">Cobertura </span><br><span style="color:#FFF">150.000$</span></th><th class="tg-lybg 250" rowspan="2"><span style="color:#FFF">Cobertura </span><br><span style="color:#FFF">250.000$</span></th><th class="tg-lybg 1000" rowspan="2"><span style="color:#FFF">Cobertura </span><br><span style="color:#FFF">1.000.000$</span></th><th class="tg-lybg 3000" rowspan="2"><span style="color:#FFF">Cobertura </span><br><span style="color:#FFF">3.000.000$</span></th></tr><tr></tr><tr><th class="tg-g1fj 30">'+ coberturas[0].COD +'</th><th class="tg-g1fj 60">'+ coberturas[1].COD +'</th><th class="tg-g1fj 100">'+ coberturas[2].COD +'</th><th class="tg-g1fj 250">'+ coberturas[3].COD +'</th><th class="tg-g1fj 1000">'+ coberturas[4].COD +'</th><th class="tg-g1fj 3000">'+ coberturas[5].COD +'</th></tr></thead><tbody><tr><td class="tg-5pgg" colspan="2" rowspan="'+il+'">'+opciones2.value+'</td><td class="tg-k576" colspan="3">'+opciones3.value+'</td><td class="tg-dvpl 30">$'+coberturas[0].Tarifa+'</td><td class="tg-dvpl 60">$'+coberturas[1].Tarifa+'</td><td class="tg-dvpl 100">$'+coberturas[2].Tarifa+'</td><td class="tg-gkml 250">$'+coberturas[3].Tarifa+'</td><td class="tg-gkml 1000">$'+coberturas[4].Tarifa+'</td><td class="tg-gkml 3000">$'+coberturas[5].Tarifa+'</td></tr>'+fTs+'<tr><td class="tg-7btt" colspan="5">Total Presupuesto en Dolares:</td><td class="tg-dvpl 30">$'+suma[0]+'</td><td class="tg-dvpl 60">$'+suma[1]+'</td><td class="tg-dvpl 100">$'+suma[2]+'</td><td class="tg-dvpl 250">$'+suma[3]+'</td><td class="tg-dvpl 1000">$'+suma[4]+'</td><td class="tg-dvpl 3000">$'+suma[5]+'</td></tr><tr><td class="tg-7btt" colspan="5">Total Presupuesto en pesos chilenos</td><td class="tg-6ic8 30">'+formatM[0]+'</td><td class="tg-6ic8 60">'+formatM[1]+'</td><td class="tg-6ic8 100">'+formatM[2]+'</td><td class="tg-6ic8 250">'+formatM[3]+'</td><td class="tg-6ic8 1000">'+formatM[4]+'</td><td class="tg-n7df 3000">'+formatM[5]+'</td></tr></tbody></table>';

 for (var i in coberturas){
        var elems = document.getElementsByClassName(cxp[i])
        console.log(elems.length)
        for (var e = 0; e < elems.length; e++){
        if (coberturas[i].cBox == false){
        elems[e].style.display = 'none';
        }
        }

 }

 if (adPrecio == 0){
    for (var i in R1){
        R1[i].style.display = 'none'
    }
 }
}

}

var fAdprecio = 0;
var fTs = '';
var dias = 0;
var op1=true;
var op2=true;
var op3=true;
var op4=true;
var op5=true;
var op6=true;
var formatM;
var adPrecio1 
var items = [];
var multic = [];
var adPrecio;
var suma = [];
var eTs;
var tablas = document.getElementById('tablas')
var opciones = document.getElementById('mibuscador')
var opciones2 = document.getElementById('mibuscador2')
var opciones3 = document.getElementById('mibuscador3')
var opciones4 = document.getElementById('mibuscador4')
var tks = document.getElementById('select2-mibuscador4-container')
var opciones5 = document.getElementById('mibuscador5')
var tCambiaria = document.getElementById('tarifa')
var inicio = document.getElementById('campofecha')
var exp = document.getElementById('campofecha2')
var cBox1 = document.getElementById('cbox1')
var COD1 = document.getElementById('COD1')
var precio1 = document.getElementById('precio1')
var cBox2 = document.getElementById('cbox2')
var COD2 = document.getElementById('COD2')
var precio2 = document.getElementById('precio2')
var cBox3 = document.getElementById('cbox3')
var COD3 = document.getElementById('COD3')
var precio3 = document.getElementById('precio3')
var cBox4 = document.getElementById('cbox4')
var COD4 = document.getElementById('COD4')
var precio4 = document.getElementById('precio4')
var cBox5 = document.getElementById('cbox5')
var COD5 = document.getElementById('COD5')
var precio5 = document.getElementById('precio5')
var cBox6 = document.getElementById('cbox6')
var COD6 = document.getElementById('COD6')
var precio6 = document.getElementById('precio6')

var cxp = ['30', '60', '100', '250', '1000', '3000'];

var coberturas = [];

var pasajeros = [];
for (var i = 0; i < 20; i++){
    pasajeros.push(i+1)
    nPasajeros(pasajeros[i])
}

var emisivos = [];
emisivos.push(new Emisivo('PRODUCTO INTERNACIONAL CORPORATIVO'))
emisivos.push(new Emisivo('PRODUCTO INTERNACIONAL'))
emisivos.push(new Emisivo('PRODUCTO RECEPTIVO'))
emisivos.push(new Emisivo('PRODUCTO RECEPTIVO CORPORATIVO'))
emisivos.push(new Emisivo('PRODUCTO NACIONAL- DOMESTICO'))



var planes = [];
planes.push(new Plan('DIARIO'));
planes.push(new Plan('LARGA ESTADÍA '));
planes.push(new Plan('ANUAL MÚLTIPLES VIAJES DE 30 DÍAS CONSECUTIVOS POR VIAJE'));
planes.push(new Plan('ANUAL MÚLTIPLES VIAJES DE 60 DÍAS CONSECUTIVOS POR VIAJE'));
planes.push(new Plan('ANUAL MÚLTIPLES VIAJES DE 90 DÍAS CONSECUTIVOS POR VIAJE'));

var px = [6, 2.5, 5, 2]



for (var e of emisivos){
    e.options();
}
for (var p of planes){
    p.options();
}
for (var a of addones){
    a.options();
}
for (var e of empresas) {
    e.options();
} 



var boton = document.getElementById('enviar')
boton.addEventListener('click', pintar);
document.getElementById('body').addEventListener('keyup', function(event) {
        if (event.code === 'Enter')
        {
            event.preventDefault(); 
            pintar();
        }
    });

