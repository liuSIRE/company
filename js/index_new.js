$(function(){
    $.ajax({
        url:'http://127.0.0.1:3000/news/new',
        type:"get",
        dataType:"json",
        success:function (res) {
            console.log(res)
            var html='';
            for(var p of res){
                html+=`<li class='list_active'>
							<div class='news_one'>
							<div id='middle'>
								<p class="f16 news_date">${p.time}</p>
								<h4 class="f18 news_tit"><a href="">${p.title}</a></h4>
								<div class="news_des">${p.content}</div>
								<a href="#" class='more_'>查看详情</a>
							</div>
						</div>
						</li>`
              }
            $("#new_ul").html(html);
        }
    })
    var pno=1;
    var pageSize=3;
    function loadPage(no=1) {
        pno=no
        $.ajax({
            url: 'http://127.0.0.1:3000/news/course',
            type: "get",
            data: {pno,pageSize},
            dataType: "json",
            success: function (res) {
                console.log(res.data)
                var html = '';
                        for (var p of res.data) {
                            html+= `<div class='course_one'>
                    <div class="course_one_img">
                        <img src="${p.img_url}" alt=""/>
                    </div>
                    <div class="course_one_01">
                        <p class="my_font text_one" style='font-size:22px; font-weight:bold;'>${p.title}</p>
                        <span class="my_font">教师：${p.teacher}</span></span><span class="my_font">1课时</span><span>${p.people}人学习</span>
                    <div class='text_body_one'>
                        <p class="my_font">让人物行动起来，学会立体的动作架构。学生在领悟形象的动作描写中，掌握让人物活灵活现的要领和方法.</p>
                    </div>
                        <p><a href="#" class="course_more">查看课程</a></p>
                </div>
            </div>`
                        }
                     $(html).insertAfter($(".Online"));
                if(pno==1)
                    $('.my_btn_left').attr("disabled",'true');
                else if(pno==res.pageCount)
                    $('.my_btn_right').attr("disabled",'true');
                else{
                    //$('.my_btn_right').removeAttr("disabled");
                    $('.my_btn_left').removeAttr("disabled");
                }
console.log(res.pageCount)
            }
        })
    }
    loadPage();
    $('.btn').on('click','button',function(e){
        e.preventDefault();
        var $a=$(e.target)
        if($a.parent().is(':first-child'))
           var no= pno-1;
        else if($a.parent().is(':last-child'))
        var no=pno+1;
        $('.course_one').remove();
        loadPage(no);
    })
})