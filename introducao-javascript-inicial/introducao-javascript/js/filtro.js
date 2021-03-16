var inputPacientes = document.querySelector("#filtro-pacientes");
var listaPacientes = document.querySelectorAll(".info-nome");
var expressao ;
inputPacientes.addEventListener("input", function (elemento) {
     expressao = new RegExp(this.value,"i");
    listaPacientes.forEach(function (nome) {
        var nomePaciente = nome.textContent;
        if (!expressao.test(nomePaciente)){
            nome.parentElement.classList.add("invisivel");
        }else{
            nome.parentElement.classList.remove("invisivel");

        }
    })
});
