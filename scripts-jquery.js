$(document).ready(function(){
    $('#mibuscador').select2({});
    $('#mibuscador').on('select2:select', function () {
        for (var e of empresas){
            console.log(e)
            if (e.eCode == opciones.value ){
              Nempresa.innerHTML = "<p id='nande'>Empresa: '" + e.name + "'</p>"
            }}
    });
});


$(document).ready(function(){
    $('#mibuscador2').select2();                        
});

$(document).ready(function(){
    $('#mibuscador3').select2();
});

$(document).ready(function(){
    $('#mibuscador4').select2({});
});
$(document).ready(function(){
    $('#mibuscador5').select2();
});

$.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
   $(function () {
   $("#campofecha").datepicker({
    minDate: 0, 
    onSelect: function (date) {
        if (date != "") {
            cantidadDeDias(date)
        }
    }});
   });

   var cp2 = document.getElementById('cp2')
   function fechaexp () {
    cp2.innerHTML = '<label for="Inicio"><span class="ast">*</span> Fecha de expiracion: </label> <input type="text" id="campofecha2" autocomplete="off">'
   $.datepicker.regional['es'] = {
    closeText: 'Cerrar',
    prevText: '< Ant',
    nextText: 'Sig >',
    currentText: 'Hoy',
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
    dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
    weekHeader: 'Sm',
    dateFormat: 'dd/mm/yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
   $(function () {
   $("#campofecha2").datepicker({minDate: dias,     onSelect: function (date) {
    if (date != "") {
       exp.value = date
    }
}});
   });
}
$("#mibuscador4").on("select2:select select2:unselect", function (e) {

    //this returns all the selected item
    items= $(this).val();       



})
fechaexp()

   