function passagem(origem,destino){
    var _origem = origem;
    var _destino = destino

    this.mostrarPassageiro = function(){
        return ("Você vai viajar de " + _origem  + _destino);
    }
}

var passageiro1 = new passagem("Pato branco", "São Paulo");
var passageiro2 = new passagem ("São Paulo", "Pato Branco");

console.log(passageiro1.mostrarPassageiro());