
angular.module("myApp", [])
.controller("myCtrl", function ($scope) {
  /**
   * Calculo IMC
   */
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

  /**
   * Calculo calorias
   */
    $scope.calculoCal = function () {
      var caloriaPorExercicio = {
        musculacao: 8.9,
        esteira: 16,
        bicicleta: 4.9
      }
      var caloriaGasta;
      if ($scope.select == "treinoA") {
        caloriaGasta = $scope.pesoCal * ($scope.tempo * caloriaPorExercicio.musculacao);
      } else if ($scope.select == "treinoB") {
        caloriaGasta = $scope.pesoCal * ($scope.tempo - 30) * caloriaPorExercicio.musculacao + (30 * caloriaPorExercicio.esteira); 
      } else if ($scope.select == "treinoC") {
        caloriaGasta = $scope.pesoCal * ($scope.tempo - 20) * treino.caloria + (20 * caloriaPorExercicio.bicicleta);
      }

      $scope.caloriaGasta = caloriaGasta;
      };
});
