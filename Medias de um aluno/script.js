


var nota1 = document.getElementById('nota1')
var nota2 = document.getElementById('nota2')

function calcul_media(nota1, nota2) {
    
    var nota1 = Number(nota1.value)
    var nota2 = Number(nota2.value)

    var media = (nota1 + nota2) / 2

    if(nota1 == '' || nota2 == '' || nota1 > 10 || nota2 > 10) {
        window.alert('[ERRO] ao colocar as notas')
    } else {
        media_final.innerHTML = `A média do aluno é: ${media} <br>`
        if(media >= 6 && media <= 10) {
            media_final.innerHTML += `Situacão: APROVADO`
        } else if(media >= 4 && media < 6) {
            media_final.innerHTML += `Situacão: RECUPERACÃO`
        } else {
            media_final.innerHTML += `Situacão: REPROVADO`
        }
    } 
}