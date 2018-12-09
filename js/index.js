$(function(){
/*导航*/
$('.a_item0').on('mouseenter',function(e){
	var $a=$(e.target);
		$a.next('.down_menu').slideDown('slow');
		$a.parent().siblings().children(".down_menu").hide()
	})
	$('ul.nav_one').on('mouseleave',function(){
		var $ul=$(this);
		$ul.find('.down_menu').slideUp('slow')
	})
	
/*二级导航*/
$('.a_item1').mouseenter(function(){
		$a=$(this);
		var id=$a.attr('data-toggle');
		$(id).slideDown('slow');
		var w=($(id)[0].scrollHeight +80) +'px';
		$('.down_menu').height(w);
		}).on('mouseleave',function(){
			$a=$('.a_item1')
			var id=$a.attr('data-toggle');
			$(id).slideUp('slow')
			$(id).siblings("[id*='item']").hide()
			console.log()
			$('.down_menu').height('85px');
		})
//banner 
function play(imgW){
    var lists = $('.solider > li');
   var  left=parseInt($('.solider >li').css('left'))-imgW;
     $('.solider > li').animate({ 
				 'left':left +'px'
			},600);
    if(left==0){

        $('.prev').attr("disabled",true); 
		left=0;
    }else if(left==-5760){
         $('.next').attr("disabled",true); 
    }
	console.log(left)
}

		
	var lists = $('.solider > li');
	console.log(lists)
//当前播放的是哪张图片对应的小圆点
var index =1;
//获取所有的小圆点
var btns = $('.buttons li');
 
//“激活”对应的小圆点
function showButton(){
    //btns的下标从0开始,index从1到6，共6个小圆点，实际的图片下标是index-1
    btns.eq(index-1).addClass('active').siblings('.active').removeClass('active');
}
$('.prev').click(function(e){
    e.preventDefault();
    play(-1920);
	 index-=1;
showButton();
});
//点击右箭头
$('.next').click(function(e){
    e.preventDefault();
	 index+=1;
	showButton()
    play(1920);
	
});
//鼠标移入移除时，左右箭头的显示

//动画轮播
var $li=$('.solider>li')
			var imgW=$('.solider>li').width()
		var i=1;
		function solider(){
			if(i==$li.length){
				i=0;
				$(".solider li:first").insertAfter($(".solider li:last"));
				console.log($(".solider li:first-child"))
				$('.solider').css('left',0)
			
			}
			else {$('.solider ').stop().animate({ 
				 left:-i*imgW +'px'
			},1000);
			i++;
				index+=1;
				showButton()
			}
		}
	
		var t=setInterval(solider,2000)
			$('.solider').mouseenter(function(){
			clearInterval(t);
		}).mouseleave(function(){
		setInterval(solider,2000)
		})

//新闻轮播
var new_width=$('.list_active').width();

console.log($('#new_ul > li').css('left'))
function show(new_width){
   var  left=parseInt($('#new_ul > li').css('left'))-new_width;
   console.log(left)
     $('#new_ul > li').animate({ 
				 'left':left +'px'
			},600);
    if(left==0){
        $('.prev_new').attr("disabled",true); 
		left=0;
    }else if(left==-2000){
         $('.next_new').attr("disabled",true); 
    }
	console.log(left)
}
	$('.prev_new').click(function(e){
    e.preventDefault();
   show(-455);
});
//点击右箭头
$('.next_new').click(function(e){
    e.preventDefault();
    show(455);
});
//左侧广告
$('.close').click(function(){
	$('#open').fadeToggle("slow","linear");
	$('#close').fadeToggle("slow","linear");
})
$('#close').click(function(){
	$('#open').fadeToggle("slow","linear");
	$('#close').fadeToggle("slow","linear");
});
	//荣誉
 $('.list_honors').on('mouseenter','img',function (e) {
	 var $li=$(e.target)
     $li.parent().parent().css(
         {'transform':'translateY(-50px) scale(0.8)',
             'transition':'all 1s linear',
             'background': 'url(./images/honor_02.png) center top no-repeat'
         }
     )
	 $li.next().css({
         'opacity': '1',
		 'fontSize':'26px'
	 })
 }).on('mouseleave','img',function (e) {
     var $li=$(e.target)
     $li.parent().parent().css(
         {'transform':'translateY(0) scale(1)',
             'transition':'all 1s linear',
			 'background':'none'
         }
     )
     $('.honor_txt').css({
         'opacity': '0'
     })
 })
	//课程
	$('.course_one').on('mouseenter','img',function (e) {
        var $img=$(e.target)
        $img.css(
            {'transform':' scale(1.1)',
				'transition':'all 1s linear',
            }
        )
		$img.parent().parent().css({
            'transition':'all 1s linear',
			'background':'blue'
		})
		console.log($img)
    }).on('mouseleave','img',function (e) {
        var $img=$(e.target)
        $img.css(
            {'transform':' scale(1)',
                'transition':'all 1s linear',
            }
        )
        $img.parent().parent().css({
            'transition':'all 1s linear',
            'background':'none'
        })
    })
//切换注册页面
		var myWidth=$(document).width();
		console.log(myWidth)
		if(myWidth>768){
			$('.footer_bottom').css('display','block');
			
		}
		else if(myWidth<=767){
		$('.footer_bottom').css('display','none')
		$('.ctrl_new ').hide();
		$('.ctrl ').hide();
}
		//导航
		$('.a_item0').on('click',function(e){
			var $a=$(e.target);
				$a.next('.down_menu').slideToggle('slow');
				$a.parent().siblings().children(".down_menu").hide()
			})
			
		/*二级导航*/
		$('.a_item1').mouseenter(function(){
				$a=$(this);
				var id=$a.attr('data-toggle');
				$(id).slideDown('slow');
				var w=($(id)[0].scrollHeight +80) +'px';
				$('.down_menu').height(w);
				}).on('mouseleave',function(){
					$a=$('.a_item1')
					var id=$a.attr('data-toggle');
					$(id).slideUp('slow')
					$(id).siblings("[id*='item']").hide()
					console.log()
					$('.down_menu').height('85px');
				})
})
		
