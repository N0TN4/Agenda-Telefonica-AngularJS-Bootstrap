var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http, $log) 
{
	var url = 'http://localhost:3000/agenda/';

	$http.get(url).
	then(function(response){
		$scope.agenda = response.data;
		console.log(response.data);
		$log.info(response);
	}, function(reason){
		$scope.error= reason;
	});
		
	$scope.atualizarContatos = function ()
	{
	$http.get(url).
	then(function(response){
		$scope.agenda = response.data;
		console.log(response.data);
		$log.info(response);
	}, function(reason){
		$scope.error= reason;
	});// end $http get
}
	//Adicionar contato
	$scope.adicionarContato = function(contato){
		var data = {
	id: $scope.agenda.push(contato.id),
	//incrementar id
	nome: contato.nome,
	telefone: contato.telefone,
	email: contato.email
		};
		$http.post(url, data).then(function (response){
		if(response.data){
			$scope.msg = "Foi enviado";
		}
		})
	};//end adicionar contato
	
	$scope.removerContato = function(agenda){	
	var idUsuario = prompt("Digite o id do usuario que você deseja apagar");

	$http({
    method: 'DELETE',
    url: url + idUsuario,
    data: {
        id: idUsuario,
    },
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})
.then(function(response) {
    console.log(response.data);
}, function(rejection) {
    console.log(rejection.data);
});
	
	};//end remover

});
