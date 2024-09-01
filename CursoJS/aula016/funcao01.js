function parImp (n) {
    if( n%2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}

const res = parImp(10)
console.log(res)

// PODE SER EXECUTADO DAS DUAS FORMAS NESTE EXEMPLO

// console.log(parImp(5))