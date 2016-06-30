function sexChange($rootScope){
	return{
		link: function (scope,ele) {
			//console.log(ele.find('.sex_cho'))	
			var sexBtn=ele.find('#nextBtns');
			sexBtn.data('s',false);
			ele.find('.sex_cho').find('.sexBtn').on("click",function(){
				if (!$(this).hasClass('')) {
					$(this).addClass('one').parents('dl').siblings().find('.sexBtn').removeClass('one');
				}
				sexBtn.data('s',true);
			})		
			sexBtn.on('click',function(){
				if (!sexBtn.data('s')) {
					alert('请选择性别');
				}else{
					window.location.href='#/food';
					//window.location.href='./views/food.html';
				}
			})


		}
	}
}
function foodChange(){
	return {
		link:function(scope,ele){
			ele.find('.nav_1').on('click',function(){
				if (!$(this).hasClass()) {
					$(this).addClass('one').siblings().removeClass('one');
				}
			})
			ele.find('#ul li').each(function(){
				$(this).on('click',function(){
					$(this).addClass('on').siblings().removeClass('on');
				})	
			})

		}
	}
}
function dislikeChange(){
	return {
		link:function(scope,ele){
				var mark=$('<div class="mark"></div>');
				ele.find("#choose_ul li").on("click",function(){
				if ($(this).find('input').attr('checked')==true) {
					//console.log($(this).find('input').attr('checked')==true)
						$("#ceshi").on("click",function(){
							$('.test').show();
							$(".container").append(mark);
						})
				}
				
			})
		}
	}
}
function testChange(){
	return {
		link:function(scope,ele){
			ele.find('#ceshi2').on('click',function(){
				location.href='#/choose'
			})
			ele.find('#closeBtn').on("click",function(){
				location.href='#/dislike'
			})
		}

	}
}
function chooseChange($http){
	return {
		link:function(scope,ele){
			//console.log(scope)
			/*$http({
				method:'POST',
				url:"./data/data.json",
				headers:{'Content-Type':"appLication/x-www-form-urlencoded"}
			})
			.success(function(data){
				var data_title,data_list;
				var str='<div class="item">';
				$.each(data,function(k,v){
					str+='<div>'+
							'<h6>'+v.title+'</h6>'+
								'<ol>'+
									'<li>没有</li>'+
									'<li>很少</li>'+
									'<li>有时</li>'+
									'<li>经常</li>'+
									'<li>总是</li>'+
							'</ol>'+
						'</div>';			
				})
				str+='</div>';
				ele.append(str);

				ele.find('.item div').each(function(){
					$(this).find('ol li').on('click',function(){
						if (!$(this).hasClass()) {
							$(this).addClass('on').siblings().removeClass('on');
						};
					})
				})
			})
			ele.parent().find('#tijiao').on('click',function(){
						//alert(3)
				window.location.href='#/result';
			})*/
			$http({
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
					 		html+='<div class="question">'+
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
					html+='<p class="submit"><img src="img/tijiao.png"></p></div>';	
				}
				$(html).appendTo($('#item'));
				//点击答题页面
				$(ele).on("click","li",function(){
					$(this).addClass("on").siblings().removeClass("on");
				})
				//点击按钮
				ele.on('click','.submit',function(){
					var span = $(this).parent().find(".on");
					var index = $(this).parent().index();
					console.log(index)
					if($(span).length==6){
						// var detail=$(this).parent().children('.question');
						var	temp =$(this).parent('.item');
						temp.css({
							"left" : '100%'
						}).next().css({
							"left" :  0 
						})
						index++;
						if(index == 9){
							window.location.href='#/result';
						}
					}
					else{
						alert("有未选中的选项")
					}
					
				})
			})

		}
	}
}
angular.module('app')
		.directive('sexChange',sexChange)
		.directive('foodChange',foodChange)
		.directive('testChange',testChange)
		.directive('chooseChange',chooseChange)