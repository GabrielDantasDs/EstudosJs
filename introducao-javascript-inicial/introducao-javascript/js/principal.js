
titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll(".paciente");
var imc = 0;
var validadePeso = true;
var validadeAltura = true;

for(var i=0; i < pacientes.length ; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var imcPaciente = paciente.querySelector(".info-imc");
    validadePeso = validaPeso(peso);
    validadeAltura = validaAltura(altura);
    if(!validaAltura){
        validaAltura = false;
        imcPaciente.textContent = "Altura inválida";
        alert("Altura inválida no paciente: "+ paciente.querySelector(".info-nome").textContent);
        paciente.classList.add("paciente-invalido");

    }
    if(!validadeAltura){
        validaAltura = false;
        imcPaciente.textContent = "Peso inválido";
        alert("Peso inválido no paciente: "+ paciente.querySelector(".info-nome").textContent);
        paciente.classList.add("paciente-invalido");
    }
    if(validaPeso && validaAltura) {
        imc = calculaImc(peso,altura);
        imcPaciente.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso>=0 && peso<1000 )
        return true;
    else 
        return false;
}
function validaAltura(altura){
    if(altura>0 && altura<=3)
        return true;
    else
        return false;


}

function calculaImc(peso,altura){
    var imc = peso/(altura * altura);

    return imc.toFixed(2);


}







 