
let rnd = Math.floor(Math.random() * 2) + 1;
let ptosJugador = 0;
let ptosMaquina = 0;
var app = angular.module('DemoApp',[]);
app.controller('DemoCtrl', function($scope){
	$scope.mano1 = function(e){
		//He acertado al pulsar
		if(rnd == 1){
			e.attr("src", "key.jpg")
			e.width(200)
			ptosJugador++;
			$scope.ptojugador.text("Puntos del jugador: " + $scope.ptosJugador);
			

		//He fallado al pulsar
		}else{
			e.attr("src", "left.png")
			e.width(150)
			$scope.ptosMaquina++;
			$scope.ptomaquina.text("Puntos de la maquina: " + $scope.ptosMaquina);
			setTimeout(function(){
				$scope.mano2.attr("src", "key.jpg")
				$scope.mano2.width(200)
			  }, 800);
		}
		rnd = Math.floor(Math.random() * 2) + 1;
		setTimeout(function(){
					
			e.attr("src", "closed1.png");			
			e.width(200)
			$scope.mano2.attr("src", "closed2.png");
			$scope.mano2.width(200)
					},1500)
	};


	$scope.mano2 =function(f){
		
		//He fallado al pulsar
		if(rnd == 1){
			f.attr("src", "right.png");
			f.width(150);
			ptosMaquina++;
			$scope.ptomaquina.text("Puntos de la maquina: " + $scope.ptosMaquina);
			setTimeout(function(){
				$scope.mano1.attr("src", "key.jpg")
				$scope.mano1.width(200)
			  }, 800);
			//He acertado al pulsar
		}else{
			$scope.ptosJugador++;
			$scope.ptojugador.text("Puntos del jugador: " + $scope.ptosJugador);
				f.attr("src", "key.jpg")
				f.width(200)
		}
		rnd = Math.floor(Math.random() * 2) + 1;
		setTimeout(function(){
					
			$scope.mano1.attr("src", "closed1.png");
			$scope.mano1.width(200)
			f.attr("src", "closed2.png");
			f.width(200)
		},1500)
	};

	$scope.pista = function(d){
		if(rnd == 1){
			d.text("Esta en la mano izquierda");
		}else{
			d.text("Esta en la mano derecha");
		}
	};

	$scope.reiniciar = function(){
		$scope.ptosJugador = 0;
		$scope.ptosjugador.text("Puntos del jugador: " + $scope.ptosJugador);
		$scope.ptosMaquina = 0;
		$scope.ptosmaquina.text("Puntos de la maquina: " + $scope.ptosMaquina);
	};
	
});
