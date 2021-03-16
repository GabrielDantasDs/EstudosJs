var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function () {
    var requisicao = new XMLHttpRequest();
    requisicao.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    requisicao.addEventListener("load", function () {
        if(requisicao.status == 200) {
        var resposta = requisicao.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(pacientes);
        pacientes.forEach( function(paciente) {
            adicionaPaciente(paciente);    
        });
    }else{
       alert("Erro " + requisicao.status + " de requisição, pacientes não adicionados");
    }

});

    requisicao.send();
});