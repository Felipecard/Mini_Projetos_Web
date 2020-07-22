
function tabuada() {
    var num = document.getElementById('n')
    var resultado = document.getElementById('resultado')

    var num = Number(num.value)

    if(num == '') {
        window.alert('[ERRO] Coloque um número!')
    } else {
        resultado.innerHTML = `................Tabuada de ${num} ............<br>` // Com só um (=), vc limpa e o codigo nao repete 
        for(var c = 0; c <= 10; c++) {                                             // no site ou fazer : resultado.innerHTML = ''
            resultado.innerHTML += `${num} x ${c} = ${num * c} <br>`
        }
    }
}