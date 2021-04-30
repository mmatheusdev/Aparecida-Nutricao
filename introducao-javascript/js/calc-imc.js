var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdimc = paciente.querySelector(".info-imc")
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if(!pesoEhValido){
        console.log("Peso Inválido!");
        pesoEhValido = false;
        tdimc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido")
    }
    
    if(!alturaEhValida){
        console.log("Altura Inválida!");
        alturaEhValida = false;
        tdimc.textContent = "Altura Inválida";
        paciente.style.backgroundColor = "lightcoral";
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdimc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

