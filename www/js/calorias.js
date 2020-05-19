angular.module("myApp", [])
.controller("myCtrl2", function ($scope) {
  
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
