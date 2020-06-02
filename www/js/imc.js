
angular.module("myApp", [])
.controller("myCtrl", function ($scope) {
  /**
   * Calculo IMC
   */
  var dadosRelatorios = {};
  $scope.msg = 'Preencha os dados'
  $scope.calculoIMC = function () {
    var IMC = $scope.peso/($scope.altura * $scope.altura);
    if (IMC < 18.5) {
      $scope.msg = "Seu Imc é < 18.5, Abaixo do ideal";
    } else if (IMC >= 18.5 && IMC <= 24.5) {
      $scope.msg = "Seu Imc 18.5 a 24.5, está no ideal";
    } else if (IMC >= 25 && IMC <= 29.9) {
      $scope.msg = "Seu Imc é 25 a 29.9, você está com sobrepeso";
    } else if (IMC >= 30 && IMC <= 39.9) {
      $scope.msg = "Seu Imc é 30 a 39.9, você está com obesidade";
    } else if (IMC >= 40) {
      $scope.msg = "Seu Imc é < 40, você está com obesidade grave";
    }
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
      console.log($scope.pesoCal, $scope.tempo, caloriaPorExercicio.musculacao, caloriaPorExercicio.esteira, caloriaPorExercicio.bicicleta );
    } else if ($scope.select == "treino B") {
      caloriaGasta = $scope.pesoCal * ($scope.tempo - 30) * caloriaPorExercicio.musculacao + (30 * caloriaPorExercicio.esteira); 
    } else if ($scope.select == "treino C") {
      caloriaGasta = $scope.pesoCal * ($scope.tempo - 20) * caloriaPorExercicio.musculacao + (20 * caloriaPorExercicio.bicicleta);
    }
    $scope.caloriagasta = caloriaGasta / 1000;
    
    var dadosRelatorios = {
      nome: $scope.nome,
      data: getDateNow(),
      caloriasGastas: caloriaGasta,
      treinoUtilizado: $scope.select,
      tempoTotal: $scope.tempo
    };
    
    var index = setLocalStoraged(); 
    localStorage.setItem(index, JSON.stringify(dadosRelatorios));
  };

  /**
   * Relatorio
   */
  $scope.relatorio = function(){
    var index = JSON.parse(localStorage.getItem('index'));
    var lista = '<tr>'
    for(var i = 0; i <= index.length; i++){
      var local = JSON.parse(localStorage.getItem(index[i])); 
      lista = lista + '<th scope="row">' + local.data + '</th><td>' + local.nome + '</td><td>' + local.treinoUtilizado + '</td><td>' + local.caloriasGastas + '</td><td>' + local.tempoTotal + '</td>';
      lista = lista + '</tr>'
      tableId.innerHTML = lista;
    }    
  };
});

function setLocalStoraged(){
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