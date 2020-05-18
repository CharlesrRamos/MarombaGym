document.querySelector("header button").addEventListener("click", function () {
document.querySelector(".form").classList.toggle("hide");
});

var btn = document.getElementById("bt2");
var form = document.getElementById("formTreino");

btn.addEventListener("click", function () {
  if (form.style.display != "block") {
    form.style.display = "block";
    return;
  }
  form.style.display = "none";
});

//Calculo IMC ----------------------------------------------------

var app = angular.module("minhaApp", []);

app.controller("meuCtrl", function ($scope) {
  var calculoIMC = $scope.calculoIMC;
  $scope.calculoIMC = function () {
    var IMC = $scope.peso / ($scope.altura * $scope.altura);

    if (IMC < 18.5) {
      document.write("Seu Imc é " + IMC + "Abaixo do ideal");
    } else if (IMC >= 18.5 && IMC <= 24.5) {
      document.write("Seu Imc " + IMC + "está no ideal");
    } else if (IMC >= 25 && IMC <= 29.9) {
      document.write("Seu Imc é " + IMC + "você está com sobrepeso");
    } else if (IMC >= 30 && IMC <= 39.9) {
      document.write("Seu Imc é " + IMC + "você está com obesidade");
    } else if (IMC >= 40) {
      document.write("Seu Imc é " + IMC + "você está com obesidade grave");
    }

    $scope.IMC = IMC;
  };
});

// fim da função ------------------------------------------------------------
