var app = angular.module("myApp2", []);

app.controller("myCtrl2", function ($scope) {
  
  var caloriaGasta = $scope.caloriaGasta;
  $scope.calculoCal = function () {
    var caloriaGasta = 0;

    if ($scope.select == "treinoA") {
      caloriaGasta = $scope.peso * ($scope.tempo * 8.9);
    } else if ($scope.select == "treinoB") {
      caloriaGasta = $scope.peso * ($scope.tempo - 30) * 8.9 + 30 * 16;
    } else if ($scope.select == "treinoC") {
      caloriaGasta = $scope.peso * ($scope.tempo - 20) * 8.9 + 20 * 4.9;
    }

    $scope.caloriaGasta = caloriaGasta;
    };
    
});

/*

tempo * peso * atividade

treino A peso x (60 min * 8.9)

treino B peso X (tempo de treino - 30 minutos) *8.9 + ( 30 minutos * 16)

treino c peso x ( tempo de treino - 20 minutos) *8.9 + ( 20 minutos * 4.9)

*/
