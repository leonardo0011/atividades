function add_ola_mundo() {
    var textoatt1 = document.getElementById('texto1');
    textoatt1.innerText = "Olá Mundo";
}

function gerar_calc() {
    var num1 = parseInt(document.getElementById("num1_att2").value);
    var num2 = parseInt(document.getElementById("num2_att2").value);
    var res = document.getElementById("res_att2");
    var conta = num1 + num2;
    res.innerText = "O resultado é: " + conta;
}

function alt_id() {
    var ele1 = document.getElementById("alterarPorId");
    ele1.style.color = 'red';
}

function alt_name() {
    var ele2 = document.getElementsByName('alterarPorName');
    for (var i = 0; i < ele2.length; i++) {
        ele2[i].style.color = 'green';
    }
}


function alt_class() {
    var ele3 = document.getElementsByClassName('alterarPorClass');
    for (var i = 0; i < ele3.length; i++) {
        ele3[i].style.color = 'blue';
    }
}