function calcularHorafuso(){
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");

    // obtém e converte o conteúdo do campo inHoraBrasil
    var horaBrasil = Number(inHoraBrasil.value);

    // se não preencheu ou não é número
    if (inHoraBrasil.value === "" || isNaN(horaBrasil)){
        alert("Informe a hora no Brasil corretamente!");
        inHoraBrasil.focus();
        return;
    }

    var horaFranca = horaBrasil + 5;
    // se passar de 24h na França...
    if (horaFranca >= 24){
        horaFranca = horaFranca - 24;
    }

    // exibe resposta (altera o elemento outHoraFranca)
    outHoraFranca.textContent = "A hora na França é: " + horaFranca + "h";
}

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", calcularHorafuso);
