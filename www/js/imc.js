
angular.module("myApp", [])
.controller("myCtrl", function ($scope) {
  /**
   * Calculo IMC
   */
  $scope.msg = 'Preencha os dados'
  $scope.calculoIMC = function () {
    var message;
    var IMC = parseFloat($scope.peso / ($scope.altura * $scope.altura));
    dadosRelatorios.valorImc = IMC;
    if (IMC < 18.5) {
      message = "Seu Imc é < 18.5, Abaixo do ideal";
    } else if (IMC >= 18.5 && IMC <= 24.5) {
      message = "Seu Imc 18.5 a 24.5, está no ideal";
    } else if (IMC >= 25 && IMC <= 29.9) {
      message = "Seu Imc é 25 a 29.9, você está com sobrepeso";
    } else if (IMC >= 30 && IMC <= 39.9) {
      message = "Seu Imc é 30 a 39.9, você está com obesidade";
    } else if (IMC >= 40) {
      message = "Seu Imc é < 40, você está com obesidade grave";
    }
    $scope.msg = message;
  }
  /**
   * Calculo calorias
   */
  $scope.caloriagasta = 'Preencha os dados'
  $scope.calculoCaloria = function () {
    var caloriaPorExercicio = {
      musculacao: 8.9,
      esteira: 16,
      bicicleta: 4.9
    }
    var caloriaGasta;
    if ($scope.select == "treino A") {
      caloriaGasta = $scope.pesoCal * ($scope.tempo * caloriaPorExercicio.musculacao);
    } else if ($scope.select == "treino B") {
      caloriaGasta = $scope.pesoCal * ($scope.tempo - 30) * caloriaPorExercicio.musculacao + (30 * caloriaPorExercicio.esteira); 
    } else if ($scope.select == "treino C") {
      caloriaGasta = $scope.pesoCal * ($scope.tempo - 20) * caloriaPorExercicio.musculacao + (20 * caloriaPorExercicio.bicicleta);
    }
    $scope.caloriagasta = caloriaGasta;
    
    var dadosRelatorios = {

    };
    dadosRelatorios.nome = $scope.nome;
    dadosRelatorios.data = getDateNow();
    dadosRelatorios.caloriasGastas = caloriaGasta;
    dadosRelatorios.treinoUtilizado = $scope.select;
    dadosRelatorios.tempoTotal = $scope.tempo;
    var novo = getIndex(); 
    localStorage.setItem(novo, JSON.stringify(dadosRelatorios));
  };

  /**
   * Relatorio
   */
  $scope.relatorio = function(){
    var index = JSON.parse(localStorage.getItem('index'));
    for(var i = 0; i < index.length; i++){
      if(index != null){
        var local = JSON.parse(localStorage.getItem(index[i]));
        nomeTablet.innerHTML = JSON.stringify(local.nome);
        dataTablet.innerHTML = JSON.stringify(local.data); 
        treinoTablet.innerHTML = JSON.stringify(local.treinoUtilizado); 
        caloriaGastaTablet.innerHTML = JSON.stringify(local.caloriasGastas) + ' kcal'; 
        tempoTotalTablet.innerHTML = JSON.stringify(local.tempoTotal) + ' minutos';
      }
    }
  };
});

function getIndex(){
  var index = JSON.parse(localStorage.getItem('index'));
  var novo;
  if(index == null) {
    localStorage.setItem('index', '[0]');
    novo = 0;
  } else {
    novo = index.length;
    index.push(novo);
    localStorage.setItem('index', JSON.stringify(index));
  }
  return novo;
}

function getDateNow(){
  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + " "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
  return datetime;
}