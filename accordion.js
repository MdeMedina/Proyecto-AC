function c30() {
    if (!COD1.value && cBox1.checked|| !precio1.value && cBox1.checked){
        op1 = false
    } else {
        op1 = true
    }
    if (cBox1.checked == true){
        D1[0].style.display = 'block';

    }else if(cBox1.checked == false) {
        D1[0].style.display = 'none';
    }
}

function c60() {
        if (!COD2.value && cBox2.checked|| !precio2.value && cBox2.checked){
        op2 = false
    } else {
        op2 = true
    }
    if (cBox2.checked == true){
        D2[0].style.display = 'block';
    }else if(cBox2.checked == false) {
        D2[0].style.display = 'none';
    }
}
function c150() {
    if (!COD3.value && cBox3.checked|| !precio3.value && cBox3.checked){
        op3 = false
    } else {
        op3 = true
    }
    if (cBox3.checked == true){
        D3[0].style.display = 'block';
    }else if(cBox3.checked == false) {
        D3[0].style.display = 'none';
    }
}
function c250() {
    if (!COD4.value && cBox4.checked|| !precio4.value && cBox4.checked){
        op4 = false
    } else {
        op4 = true
    }
    if (cBox4.checked == true){
        D4[0].style.display = 'block';
    }else if(cBox4.checked == false) {
        D4[0].style.display = 'none';
    }
}
function c1000() {
        if (!COD5.value && cBox5.checked|| !precio5.value && cBox5.checked){
        op5 = false
    } else {
        op5 = true
    }
    if (cBox5.checked == true){
        D5[0].style.display = 'block';
  
    }else if(cBox5.checked == false) {
        D5[0].style.display = 'none';
    }
}
function c3000() {
    if (!COD6.value && cBox6.checked || !precio6.value && cBox6.checked){
        op6 = false
    } else {
        op6 = true
    }
    if (cBox6.checked == true){
        D6[0].style.display = 'block';
    }else if(cBox6.checked == false) {
        D6[0].style.display = 'none';
    }
}

cBox1.addEventListener('click', c30);
cBox2.addEventListener('click', c60);
cBox3.addEventListener('click', c150);
cBox4.addEventListener('click', c250);
cBox5.addEventListener('click', c1000);
cBox6.addEventListener('click', c3000);
var D1 = document.getElementsByClassName('D1')
var R1 = document.getElementsByClassName('r1')
var D2 = document.getElementsByClassName('D2')
var D3 = document.getElementsByClassName('D3')
var D4 = document.getElementsByClassName('D4')
var D5 = document.getElementsByClassName('D5')
var D6 = document.getElementsByClassName('D6')

