
angular.module("myApp", [])
.controller("myCtrl", function ($scope) {
  /**
   * Calculo IMC
   */
  var message = 'Preencha os dados';
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
    $scope.caloriaGasta = caloriaGasta;
    
    var data = getDateNow();
    var dadosRelatorios = {
      nome: $scope.nome,
      data: data,
      caloriasGastas: caloriaGasta,
      treinoUtilizado: $scope.select,
      tempoTotal: $scope.tempo
    };
    
    setLocalStoraged(dadosRelatorios); 

    };

    /**
     * Relatorio
     */
    $scope.relatorio = function(){
      var index = JSON.parse(localStorage.getItem('index'));
      for(var i = 0; i < index.length; i++){
        if(index != null){
          var local = JSON.parse(localStorage.getItem(index[i]));
          dataTablet.innerHTML = JSON.stringify(local.data); 
          treinoTablet.innerHTML = JSON.stringify(local.treinoUtilizado); 
          caloriaGastaTablet.innerHTML = JSON.stringify(local.caloriasGastas); 
          tempoTotalTablet.innerHTML = JSON.stringify(local.tempoTotal); 
        }
      }
    };
});

function setLocalStoraged(dadosRelatorios){
  var localIndex = JSON.parse(localStorage.getItem('index'));
  var novo;
  if(localIndex == null) {
    localStorage.setItem('index', '[0]');
    novo = 0;
  } else {
    novo = localIndex.length;
    localIndex.push(novo);
    localStorage.setItem('index', JSON.stringify(localIndex));
  }
  localStorage.setItem(novo, JSON.stringify(dadosRelatorios));
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