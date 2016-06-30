function main($scope){
	console.log('main页面');
	$scope.obj={
		sex:"男",
		bingshi:[],
		guomin:[],
		dislike:[],
		feel:['','','','','','','','','','',
			'','','','','','','','','','',
			'','','','','','','','','','',
			'','','','','','','','','','',
			'','','','','','','','','','',
			'','','','','','','','','','',
		]
	}
}
function loading($scope,$location){
	console.log('loading页面');
	$scope.page=function(){
		$location.path('sex');
	}
}
function sex($scope){/*,$location*/
	console.log('sex页面')
	/*$scope.page2=function(){
		$location.path('food');
	}*/
}
function food($scope,$location){
	console.log('food页面')
	$scope.page3=function(){
		$location.path("dislike");
	}
}
function dislike($scope,$location){
	console.log('dislike页面');
	$scope.page4=function(){
		$location.path('test');
	}
}
function test($scope){
	console.log('test页面');
	
}
function choose($scope,$location){/*,$http*/
	console.log('choose页面');

	/*$http({
		method:'POST',
		url:"./data/question_sources1.json",
		headers:{'Content-Type':"appLication/x-www-form-urlencoded"}
	})
	.success(function(data){
		$scope.data=data;
		var num=5;
		var html='';
		var page=Math.ceil($scope.data.length/num);
		for (var i = 0;i<=page;i++) {
			html+='<div class="item" id="item'+i+'">';
			for (var j=(i-1)*num;j<num*i;j++) {
				var obj = $scope.data[j];
				html+='<div>'+
							'<h6>'+obj.qName+'</h6>'+
							'<ol>'+
								'<li>没有</li>'+
								'<li>很少</li>'+
								'<li>有时</li>'+
								'<li>经常</li>'+
								'<li>总是</li>'+
							'</ol>'+
					'</div>'
			};
				html+='</div>';
				$(html).appendTo($('#item'));
		};
	
		

	})*/
/*	$http({
			method:'POST',
			url:"./data/question_sources0.json",
			headers:{'Content-Type':"appLication/x-www-form-urlencoded"}
		})
		.success(function(data){
			var num=6;
			var html='';
			var page=Math.ceil(data.length/num);
			console.log(html)
			for(var i=1;i<=page;i++){
				html+='<div class="item">';
				for (var j=(i-1)*num;j<num*i;j++ ) {
				 		var obj = data[j];
				 		html+='<div class="ques">'+
								'<h6>'+obj.qName+'</h6>'+
								'<ol>'+
									'<li>没有</li>'+
									'<li>很少</li>'+
									'<li>有时</li>'+
									'<li>经常</li>'+
									'<li>总是</li>'+
								'</ol>'+

						'</div>'			 		
				}
				html+='<p><img src="img/tijiao.png" class="tijiao"></p></div>';	
			}
			$(html).appendTo($('#item'));
		
			

		})
*/
}
function result($scope){
	console.log('result页面');
}
angular.module('app')
		.controller('main',main)
		.controller('loading',loading)
		.controller('sex',sex)
		.controller('food',food)
		.controller('dislike',dislike)
		.controller('test',test)
		.controller('choose',choose)
		.controller('result',result)

