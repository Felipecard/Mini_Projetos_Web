function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('resultado')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO, Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando... <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0) {
            // Quando o passo for 0
            window.alert('Passo inválido! Irei considerar passo = 1 ')
            p = 1
        }
        if(i < f) {
            // Contagem Crescente
            for(var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} 👉 `
            }
        } else {
            // Contagem Regressiva
            for(var c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} 👉 `
            }
        }
        resultado.innerHTML += '🏁'
    }    
}