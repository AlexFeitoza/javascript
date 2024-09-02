function adicionar(){
    let num = document.getElementById('txtn')
    let analzdor = document.getElementById('selanl')

    if(num.value.length == 0 || num.value.length > 100 ) {
            window.alert('[ERRO] numero invalido!')
    } else {
        let n = Number(num.value)
      let c = 1

      analzdor.innerHTML = ''
    }

}  