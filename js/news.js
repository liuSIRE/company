$(function(){
    var pno=0
    var pageSize=3
    function loadPage(no=1){
        pno=no;
        $.ajax({
            url:'http://127.0.0.1:3000/news/getNews',
            type:'get',
            dataType:'json',
            data:{pno,pageSize},
            success:(res)=>{
                console.log(res.data)
                var html=''
                for(var item of res.data){
                    html+=`
                <li>
                <a href="#" class="news_img"><img src="${item.img_url}" width="357" height="268" alt=""></a>
                <div id="news_move">
                <div class="news_body">
                    <div class="news_time">
                        <span><b class="f46">10</b></span>
                        <p>${item.time}</p>
                    </div>
                    <div class="news_container">
                        <h4 style="color:black;margin-top: 15px;"><a href="#" style="color:black;margin-top: 5px;">${item.title}</a></h4>
                        <p>${item.content}</p>
                    </div>
                            <div style="margin:0 auto;   border-bottom: 1px solid black;"></div>
                    <h6 class="more">More</h6>
                    <div class="news_href"></div>
                </div>
                </div>
                <div id="triangle-left"></div>
            </li>
                `
                }
                $(".news_list").html(html);
                //导航
                var html=''
                for(var i=0;i<res.pageCount;i++){
                    html+=`<a href="#" class="${i==pno-1?'active':''}">${i+1}</a>`
                }
                console.log(html)
                $('.page_item').html(html);
                if(pno==1)
                    $('.page ').children().first().attr("disabled",'true');
                else if(pno==res.pageCount){
                    $('.page ').children().last().attr("disabled",'true');
                }

                else
                    $('.page ').children().first().removeAttr("disabled");

            }

        })
    }
    loadPage();
   $('.page').on('click','button',function (e) {
       e.preventDefault()
       var $a=$(e.target)
       if($a.is(':first-child'))
           var no= pno-1;
       else if($a.is(':last-child'))
           var no=pno+1;
       loadPage(no);
   })
})