function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // NOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
