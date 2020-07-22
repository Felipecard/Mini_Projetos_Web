function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img') // Carregando a imagem dinamicamente pelo JS
       img.setAttribute('id', 'foto') 

       if (fsex[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade < 14) {
               // crianca
               img.setAttribute('src', 'criancaH.jpg')
           } else if (idade < 24) {
               // jovem
               img.setAttribute('src', 'jovemH.png')
           } else if (idade < 60) {
               // adulto
               img.setAttribute('src', 'adultoH.jpg')
           } else {
               // velho
               img.setAttribute('src', 'velhoH.jpg')
           }
       } else if (fsex[1].checked) {
           genero = 'Mulher'
           if (idade >= 0 && idade < 14) {
                // crianca
                img.setAttribute('src', 'criancaM.jpg')
            } else if (idade < 24) {
                // jovem
                img.setAttribute('src', 'jovemM.jpg')
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'adultoM.jpg')
            } else {
                // velho
                img.setAttribute('src', 'velhoM.jpg')
            }
       }
       res.style.textAlign = 'center'              //Centralizando o txt pelo JS
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // Imprimindo o texto
       res.appendChild(img)                        // Carregando a imagem dinamicamente pelo JS
    }   
}