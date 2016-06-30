function config($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		.state('index',{
			url  : '/index',
			templateUrl : './loading.html'
		})
		/*.state('index',{
			url  : '/index',
			templateUrl : '.views/loading.html'
		})*/
		.state('sex',{
			url  : '/sex',
			templateUrl : './views/sex.html'
		})
		.state('food',{
			url:"/food",
			templateUrl:"./views/food.html"
		})
		.state('dislike',{
			url:"/dislike",
			templateUrl:"./views/dislike.html"
		})
		.state('test',{
			url:"/test",
			templateUrl:"./views/test.html"
		})
		.state('choose',{
			url:"/choose",
			templateUrl:"./views/choose.html"
		})
		.state('result',{
			url:"/result",
			templateUrl:"./views/result.html"
		})

}

angular
	.module("app")
	.config(config)
	.run(function($rootScope,$state){
		$rootScope.$state = $state;
	})