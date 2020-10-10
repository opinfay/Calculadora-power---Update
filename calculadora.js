
//começo das variaveis em javascript

var valor;
var soma;
var resultado;
var percent; 
var valor1;
var valor2; 
function botao(num){ //funções que cada botão precisa ter ao ser clicado
try { // apenas uma forma de ver se o programa esta funcionando, caso contrario ele retornar uma mensagem de erro

    valor = document.calc.visor.value += num; //valor recebe o documento externo das variaveis anteriores contatenando o num
   
  
} catch (valor) {
    console.error("Syntaxe Error");
}
    

}

    function reseta(){ // onde o botao C apagará tudo que foi digitado

        document.calc.visor.value = " "; 
    }
    function visor(){
        document.calc.visor.value = setEditable(false);
    }

    function calcula(value){ // aqui onde será calculado as operações recebidas

        resultado = eval(valor);
     
        // resultado recebera o mesmo valor que foi calculado
        document.calc.visor.value = resultado.toLocaleString('pt-br');


    }
    