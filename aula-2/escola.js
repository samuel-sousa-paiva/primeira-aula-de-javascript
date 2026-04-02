function calcularMedia() {
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");

    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);

    if (nome === "" || isNaN(nota1) || isNaN(nota2)) {
        alert("Informe o nome e duas notas válidas.");
        inNome.focus();
        return;
    }

    var media = (nota1 + nota2) / 2;
    outMedia.textContent = "A média das notas é: " + media.toFixed(1);

    if (media >= 5) {
        outSituacao.textContent = "Parabéns, " + nome + ". Você está aprovado(a) 🎉";
        outSituacao.style.color = "blue";
    } else {
        outSituacao.textContent = "Ops! " + nome + " infelizmente você foi reprovado(a) 👎";
        outSituacao.style.color = "red";
    }
}

var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);

