/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var app = angular.module("ferreteConstruccion", []);

app.controller("controladorConstruccion",function($scope)
{
	$scope.largo = 0;
	$scope.ancho = 0;
	$scope.radio = 0;
	$scope.resultado = 0;

	$scope.rectangulo = function()
	{
		$scope.resultado = Number($scope.largo*2 + $scope.ancho*2)*Number(3);
		return $scope.resultado;
	}; 

	$scope.circulo = function()
	{
		$scope.resultado = Number(3.14 * $scope.radio * 2);

	};
	$scope.materiales = function()
	{};


});
