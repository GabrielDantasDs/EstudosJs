var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);
    var erro = [];
    var listaErros = document.querySelector("#mensagens-erro");
   try {
       listaErros.removeChild(listaErros.lastChild);
  
    } catch (error) {
        
    }
    if(!ValidadePaciente(validaPeso(paciente.peso),validaAltura(paciente.altura))){
        if(validaAltura(paciente.altura) == false && validaPeso(paciente.peso)== false){
            alert("Os valores no campo altura e no campo peso são invalidos");
            erro.push("Os valores no campo altura e no campo peso são invalidos");
        } else if(validaAltura(paciente.altura) == false){
            alert("O valor no campo altura é invalido");
            erro.push("O valor no campo altura é invalido");
        } else
            if(validaPeso(paciente.peso)==false){
                alert("O valor no campo peso é invalido");
                erro.push("O valor no campo peso é invalido");
            }
            var ul_erro = document.createElement("li");
            listaErros.appendChild(ul_erro);  
            erro.forEach(function(erro){
                ul_erro.textContent = ul_erro.textContent + erro;
            })
            while(erro.length){
                erro.pop();
            }
        return;
    }

    adicionaPaciente(paciente);
    form.reset();


});

function obtemPacienteFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)


    }

    return paciente;


}
function adicionaPaciente(paciente){
    var pacienteTr = montaTr(paciente);
    document.querySelector("tbody").appendChild(pacienteTr);
}


function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(calculaImc(paciente.peso,paciente.altura),"info-imc"));

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    return pacienteTr;

}

function montaTd(dado,classe){
    var pacienteTd = document.createElement("td");
    pacienteTd.textContent = dado;
    pacienteTd.classList.add(classe);
    return pacienteTd;
}

function ValidadePaciente(validadePeso, validadeAltura){
    var validadePaciente = false;
    if(validadeAltura && validadePeso){
        return validadePaciente = true;

    }

}