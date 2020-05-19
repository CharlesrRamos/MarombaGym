//Calculo IMC
angular.module("myApp", [])
.controller("myCtrl", function ($scope) {
  var message = 'preencha os dados';
  $scope.calculoIMC = function () {
    var IMC = $scope.peso / ($scope.altura * $scope.altura);
    if (IMC < 18.5) {
      message = "Seu Imc é " + IMC + ", Abaixo do ideal";
    } else if (IMC >= 18.5 && IMC <= 24.5) {
      message = "Seu Imc " + IMC + ", está no ideal";
    } else if (IMC >= 25 && IMC <= 29.9) {
      message = "Seu Imc é " + IMC + ", você está com sobrepeso";
    } else if (IMC >= 30 && IMC <= 39.9) {
      message = "Seu Imc é " + IMC + ", você está com obesidade";
    } else if (IMC >= 40) {
      message = "Seu Imc é " + IMC + ", você está com obesidade grave";
    }
    $scope.msg = message;
  }
  $scope.msg = message;
});
// fim imc

document.getElementById("bt1").addEventListener("click", function () {
  document.querySelector(".form").classList.toggle("hide");  
});

document.getElementById("bt2").addEventListener("click", function () {
document.querySelector(".form2").classList.toggle("hide");
});

