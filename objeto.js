
//Aqui estou criando uma variavel e acessando o objeto dentro da função pessoa, para eu poder criar funcionarios usando a estrutura do pessoa varias vezes
var funcionario = new Pessoa ("maria","peixoto");


//Aqui estou criando a função para todas as vezes que eu precisar criar um funcionario novo ele vai usar a função e estrutura do Pessoa. Depois estou criando a função para ele falar o nome do funcionario que foi criado

/*
Protegendo uma propriedade ou método
Dentro de uma função construtora o que não for precedido por this será privado e não poderá ser acessado através do objeto.

Propriedades
Começando pelas propriedades, para impedir o acesso a uma delas é bem simples, basta usar a palavra var (Código 3), criando assim uma variável local dentro da função construtora.
Desta forma estamos protegendo essa propriedade e não conseguiremos acessar o seu valor

https://www.devmedia.com.br/view/viewaula.php?idcomp=40569
*/


function Pessoa (nome, sobrenome){
    var nome = nome;
    var sobrenome = sobrenome;
    
    //this.nome = nome;
    //this.sobrenome = sobrenome;
    this.falar = function(){
        return ("meu nome é " + this.nome+ " " + this.sobrenome);
    }
}


//Aqui estou executando as funções para ver se os objetos forma colocados de forma correta dentro da variavel funcionario
funcionario.nome;
funcionario.sobrenome;
funcionario.falar();