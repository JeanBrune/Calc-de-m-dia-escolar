function media() {
    //buscar as notas inseridas pelos inputs do html
    var bimestre1 = parseFloat(document.getElementById("nota01").value)
    var bimestre2 = parseFloat(document.getElementById("nota02").value)
    var bimestre3 = parseFloat(document.getElementById("nota03").value)
    var bimestre4 = parseFloat(document.getElementById("nota04").value)

    //se digitarem nota maior do que 10
    if (bimestre1 > 10) {
        bimestre1 = 10
    }
    if (bimestre2 > 10) {
        bimestre2 = 10
    } 
    if (bimestre3 > 10) {
        bimestre3 = 10
    }
    if (bimestre4 > 10) {
        bimestre4 = 10
    }

    //tirar a média simples das notas inseridas
    var media_anual = ((bimestre1 + bimestre2 + bimestre3 + bimestre4) / 4)
    console.log("1º bimestre: " + bimestre1 +
        "\n2º bimestre: " + bimestre2 +
        "\n3º bimestre: " + bimestre3 +
        "\n4º bimestre: " + bimestre4 +
        "\nmédia: " + media_anual
    )

    //veririficar se o aluno passou ou reprovou
    //se ele passou
    if (media_anual >= 7 && media_anual <= 10) {
        document.getElementById("resultado").innerHTML = "<p id='resultado'> Sua média é de " + media_anual.toFixed(2) + " pontos.</p>" + "<p>Você foi aprovado. Boas férias</p>"
    }
    //se ele reprovou
    else if (media_anual < 7) {
        document.getElementById("resultado").innerHTML = "<p id='resultado'> Sua média é de " + media_anual.toFixed(2) + " pontos.</p>" + "<p id='resultado'>Nos vemos na recuperação!</p>"
    }
    //hipotese de erro ou não inserção de todos os valores
    else {
        document.getElementById("resultado").innerHTML = "Erro. Preencha todos os campos e tente novamente."
    }
}

