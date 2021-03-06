$(document).ready(function () {
  $("#cpf_digitado").mask("000.000.000-00", { reverse: true });
  $("#data_digitada").mask("00/00/0000");
});

function validaCPF(cpf) {
  console.log(cpf.length);
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9);
    var digitos = cpf.substring(9);

    var soma = 0;

    // Multiplicar os 9 primeiros dígitos pela sequência decrescente de números de 10 a 2 e somar os resultados
    for (var i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
    }

    // Validação do primeiro dígito
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(0)) {
      return false;
    }

    soma = 0;
    numeros = cpf.substring(0, 10);

    // Multiplicar os 10 primeiros dígitos pela sequência decrescente de números de 11 a 2 e somar os resultados
    for (var k = 11; k > 1; k--) {
      soma += numeros.charAt(11 - k) * k;
    }

    // Validação do segundo dígito
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

    if (resultado != digitos.charAt(1)) {
      return false;
    }

    return true;
  }
}

function validacao() {
  console.log("Iniciando validação de CPF.");
  document.getElementById("success").style.display = "none";
  document.getElementById("error").style.display = "none";

  var cpf = document.getElementById("cpf_digitado").value;

  var resultadoValidacao = validaCPF(cpf);

  if (resultadoValidacao) {
    document.getElementById("success").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
