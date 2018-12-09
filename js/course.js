
$(function(){
//判断是否登录

    $.ajax({
        url:'http://127.0.0.1:3000/user//islogin',
        type:"get",
        dataType:'json',
        success:function (res) {
            console.log(res)
            if(res.code==0){
                alert('暂未登录，请登录查看课程')
                $('.user-out').hide()
            }else{
                console.log(res.uname)
                $('.userName').html(res.uname)
                $('.user-action').hide();

                $('.couse-list>li').click(function () {
                    console.log(0)
                })
            }

        }

    })
    //退出登录
    $('.loginOut').click(function () {
        $.ajax({
            url:'http://127.0.0.1:3000/user/signout',
            type:"get",
            dataType:'json',
            success:function (res) {
                location.reload();
            }

        })
        location.reload();
    })
    $('.login').click(function (e) {
        e.preventDefault()
        $('.login-com').fadeIn("slow");
    })
    $('.login-text h3').click(function () {
        $('.login-com').fadeOut("slow");
    })
    $.ajax({
        url:"http://127.0.0.1:3000/course_search.html",
        type:"get",
        success:function(res){
            var  $search=$('.serach-action')
            var $input=$('.search-kw')
            $search.click(function(){
                var kw=$input.val().trim();
                if(kw!='')
                    location.href=`course_search.html?kwords=${kw}`
            })
            $input.keyup(function(e){
                if(e.keyCode==13)
                    $search.click()
            })

        }
    })

    $('#btnLogin').click(function () {
        var uname=$('#txtName ').val()
        var upwd=$('#txtPassword ').val()
        $.ajax({
            url:"http://127.0.0.1:3000/user/signin",
            type:"post",
            data:{uname,upwd},
            success:function(res){
              console.log(res)
                    if(res.code==1){
                        alert('登陆成功！')
                        $('.login-com'). fadeOut("slow")
                        location.reload();
                    }else
                        alert(res.msg)
            }
        })
    })
    $.ajax({
        url:'http://127.0.0.1:3000/news/getCourseTpe',
        type:'get',
        dataType:'json',
        success:function (res) {
           // console.log(res)
            var html=''
            for (var item of res){
                console.log(item[0].title)
                html+=`
    <div class="course-header">
        <p>
            <span class="course-live">${item[0].c_title}</span>
            <span class="course-title">${item[0].subtitle}</span>
            <a href="/Course">更多&gt;&gt;</a>
        </p>
    </div>

    <hr></hr>
<div class="middle">
        <ul class="couse-list">
</ul>
</div>`
            }
            $('.course-box').html(html)
            var html=''
            for(var list of item){
               html+=`  
            <li>
               
                    <img src="${list.img_url}" alt="" class="li_img">
                    <p>
                        <span class="course-name">${list.title}</span>
                        <span class="course-end">已结束</span>
                    </p>
                    <p class="course-price">
                        <span>￥${list.price_new}</span><del>￥${list.price_old}</del>
                        <span class="study-num">${list.people}</span>
                    </p>
                
            </li>
            </ul></div>
     `
            }
          //  console.log(html)

           // $(html).insertAfter($('.couse-header'))
            $('.couse-list').html(html)
        }

    })

})