


function acrescentar() {
    var preco_item = document.getElementById('preco')
    var preco_item = Number(preco_item.value)
    itens.innerHTML += `${preco_item} | `
    
    return preco_item
    
}

var lista = []
lista.push(acrescentar())

function mostrar(lista) {
    calculando.innerHTML = `${lista}`
}


