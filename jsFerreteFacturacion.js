/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var app = angular.module("ferreteFacturacion", []);

app.controller("controladorFacturacion",function($scope){
	$scope.precioUno = 0;
	$scope.precioDos = 0;
	$scope.precioTres = 0;
	$scope.resultado;

	$scope.sumar = function(){
		$scope.resultado = (parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres));
		return (parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres));

	};

	$scope.promedio = function(){
		$scope.resultado = Number(Number(parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres))/Number(3.0));
		return Number(Number(parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres))/Number(3.0));;

	};
	$scope.precioFinal = function(){
		$scope.resultado = Number(parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres))*Number(1.21);
		return Number(parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres))*Number(1.21);

	};
});