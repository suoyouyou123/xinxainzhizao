;(function($){
	//首页
	$("#btn_start").on("click",function(){
		$(".index").hide().next().show();
	})
	//基本信息-----点击性别
	$('.sex_cho').find('.sexBtn').on("click",function(){
		if (!$(this).hasClass('')) {
			$(this).addClass('one').parents('dl').siblings().find('.sexBtn').removeClass('one');
		}
	})
	//点击按钮进入性别页面
	$("#nextBtns").on("click",function(){
		//alert(3);
		$(".sex").hide().next().show();
	})
	$('.choose').find('.nav_1').on('click',function(){
		if (!$(this).hasClass()) {
			$(this).addClass('one').siblings().removeClass('one');
		}
	})
	//选项页面 过敏食物
	/*var len=$('.choose').find('.nav_1').length;
	//console.log(len)
	for (var i = 0; i < len; i++) {
		$('.choose').find('.nav_1').eq(i).on("click",function(){
		var datanav=$('.choose').find('.nav_1').data('nav');
			//console.log(datanav)
			if (datanav=='none') {
				//$(this).attr('src','img/page2_1.png');
				$(this).addClass('one').siblings().removeClass('one');
			}
		})
	}*/
	//选项页面中ul中的li,点击选中
	$('#ul li').each(function(){
		$(this).on('click',function(){
			$(this).addClass('on').siblings().removeClass('on');
		})	
	})
	$('#next_Btn').on('click',function(){
		$('.choose').hide().next().show();
	})
	//不喜欢吃的食物
	var mark=$('<div class="mark"></div>');
	/*for (var i = 0; i < $("#choose_ul li").length-1; i++) {
		$("#choose_ul li").eq(i).on("click",function(){
			if ($(this).find('input').attr('checked')) {
					$("#ceshi").on("click",function(){
						$('.test').show();
						$(".container").append(mark);
						$('#closeBtn').on("click",function(){
							$('.test').hide();
							$(".mark").hide();
							if($('#choose_ul li').eq(i).find('input').attr('false')==null) {
								console.log( $('#choose_ul li').eq(i).find('input').attr('false'));
							};							
						})
					})
			}else{
				
			};
		})
	};*/
	$("#choose_ul li").on("click",function(){
			if ($(this).find('input').attr('checked')==true) {
				//console.log($(this).find('input').attr('checked')==true)
					$("#ceshi").on("click",function(){
						$('.test').show();
						$(".container").append(mark);
						
						
					})
			}
			$('#closeBtn').on("click",function(){
				$('.test').hide();
				$(".mark").hide();
				$('#choose_ul li').find('input').attr('checked')==false;						
			})	
	})
	//你感觉？
	$('#ceshi2').on('click',function(){
		$('.choose_2').hide().next().show();
		$('.test').hide();
		$(".mark").hide();
		var data_title,data_list;
		$.ajax({
			url:"data/data.json",
			type:"post",
			dataType:"json",
			success:function(data){
				random(data);
				
			}
		})
	})
	
	function random(data){
		//console.log(data);
		var str='';
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
		$('.item').html(str);
		var item=new iScroll('item');
		$('.item div').each(function(){
			$(this).find('ol li').on('click',function(){
				if (!$(this).hasClass()) {
					$(this).addClass('on').siblings().removeClass('on');
				};
			})
			$('#tijiao').on('click',function(){
				$('.choose_3').hide().next().show();
			})
		})

	}
})(Zepto)