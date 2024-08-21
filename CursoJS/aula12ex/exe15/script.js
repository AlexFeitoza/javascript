function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
          gênero = 'Homem'
               if (idade >= 0 && idade < 12) {
                    //Criança
                    img.setAttribute('src', 'boy.jpg')
               } else if (idade <= 24) {
                    //Jovem
                    
                    img.setAttribute('src', 'young-man.jpg')
               } else if(idade < 60) {
                    //Adulto
                    img.setAttribute('src', 'homem-adulto.jpg')
               } else {
                    //Idoso
                    img.setAttribute('src', 'old-man.jpg')
               }
        } else if (fsex[1].checked) {
          gênero = 'Mulher'
               if (idade >= 0 && idade < 12) {
                    //Criança
                    img.setAttribute('src', 'girl.jpg')
               } else if (idade < 30) {
                    //Jovem
                    img.setAttribute('src', 'woman.jpg')
               } else if (idade < 60) {
                    //Adulto
                    img.setAttribute('src', 'mulher-adulta.jpg')
               } else {
                    //Idoso
                    img.setAttribute('src', 'old-woman.jpg')
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com idade de ${idade} anos.`
        res.appendChild(img)
    }
}