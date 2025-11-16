/**** Escreva o código abaixo 👇******/
function somar(a, b){
    return a+b
  }

function multiplicar (a, b){
  return a*b
}

function subtrair (a, b){
  return a-b
}

function dividir (a, b){
  if (b === 0){
    throw new Error("Erro: divisão por zero");
     "Erro: divisão por zero"
  } else {
    return a/b
  }
}

function calcularMedia (nota1, nota2, nota3, nota4){
  let somadeNotas = nota1+nota2+nota3+nota4;
  let quantidadedeNotas = 4;
  
  let media = dividir (somadeNotas, quantidadedeNotas);
    return media;
}

function elevarPotencia (base, expoente){
  let resultado = Math.pow(base, expoente);
  return resultado;
}

function calcularAreaRetangulo (largura, altura){
  let area = multiplicar(largura, altura);
  return area;
}

function verificarParOuImpar (numero){
 if(numero %2===0){
   return "par"
  }else{
    return "ímpar"
  }
}

function calcularRaizQuadrada (numero){
  return Math.sqrt(numero)
}

function calcularHipotenusa (cateto1, cateto2){
  let cateto1aoQuadrado = elevarPotencia(cateto1, 2);
  let cateto2aoQuadrado = elevarPotencia(cateto2, 2);

  let soma_dos_Quadrados = somar(cateto1aoQuadrado, cateto2aoQuadrado);

  let hipotenusa = calcularRaizQuadrada(soma_dos_Quadrados);

  return hipotenusa
}


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
