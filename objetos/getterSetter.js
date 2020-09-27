const getValue = 
{
   _numero: 50,
    _nome: "não sei",

    get numero(){
        return this._numero++;
    },
    set numero(valor){
        this._numero = valor;
    },
    get nome(){
        return this._nome;
    },
    set nome( nome ){
        this._nome = nome;
    }
}

console.log(getValue.nome, getValue.numero)

getValue.numero = 1000;

console.log(getValue.numero)