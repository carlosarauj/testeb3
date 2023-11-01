function criaPessoa(nome, sobrenome){
    return{
    nome, 
    sobrenome,

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }
}
}

let p1 = criaPessoa('Carlos', 'Araújo')

console.log(p1.nomeCompleto)