function apagar(id) {
    document.getElementById(id).value = ""
    console.log("campo " + id + " selecionado e apagado")
    
}

//função de onInput pra limitar os numeros inseridos por teclado.
function algarismo() {
    //buscar as notas inseridas pelos inputs do html
    let bimestre1 = parseFloat(document.getElementById("nota01").value)
    let bimestre2 = parseFloat(document.getElementById("nota02").value)
    let bimestre3 = parseFloat(document.getElementById("nota03").value)
    let bimestre4 = parseFloat(document.getElementById("nota04").value)

    //caso digitem numero maior do que 10
    if (bimestre1 > 10) {
        document.getElementById("nota01").value = 10
        console.log(bimestre1 + " convertido para a nota máxima (nota 10)")
    }

    if (bimestre2 > 10) {
        document.getElementById("nota02").value = 10
        console.log(bimestre2 + " convertido para a nota máxima (nota 10)")
    }

    if (bimestre3 > 10) {
        document.getElementById("nota03").value = 10
        console.log(bimestre3 + " convertido para a nota máxima (nota 10)")
    }

    if (bimestre4 > 10) {
        document.getElementById("nota04").value = 10
        console.log(bimestre4 + " convertido para a nota máxima (nota 10)")
    }
}

function media() {
    let bimestre1 = parseFloat(document.getElementById("nota01").value)
    let bimestre2 = parseFloat(document.getElementById("nota02").value)
    let bimestre3 = parseFloat(document.getElementById("nota03").value)
    let bimestre4 = parseFloat(document.getElementById("nota04").value)
    //tirar a média simples das notas inseridas
    let media_anual = ((bimestre1 + bimestre2 + bimestre3 + bimestre4) / 4)
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
