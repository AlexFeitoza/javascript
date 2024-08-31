
let valores = [4, 8, 0, 5, 2, 7]
/*
OS DOIS CODIGOS SAO A MESMA COISA E OS DOIS ESTAO CORRETOS

console.log(valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    */

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 