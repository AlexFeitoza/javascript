function carregar() {
var msg = window.document.getElementById('text')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/lindo-amanhecer-na-praia-sob-um-ceu-azul_181624-26939.avif'
        document.body.style.background = '#00BFFF'
    }else if(hora >= 12 && hora <= 18)  {
        //BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F4A460'
    }  else {
        // BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#696969'
    }
}
