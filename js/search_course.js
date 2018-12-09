$(function () {
    var  $search=$('.serach-action')
    var $input=$('.search-kw')
   var kwords=decodeURI(location.search.split("=")[1])
    console.log(kwords)
    var pno=1;
    var pageSize=9;
if(kwords){
    function loading(no=1) {
     pno=no
        $.ajax({
            url: 'http://127.0.0.1:3000/news/courses',
            data: {pno, pageSize},
            type: 'get',
            success: function (res) {
                var html = ''
                for (var list of res.data) {
                    html += ` <li>
            <div class="tool-course-type">${ list.yw_yw_course_type}</div>
            <a href="#">
                <img src="${list.img_url}" alt="">
                <p>
                    <span class="course-name">${list.title}</span>
                    <span class="course-end">已结束</span>
                </p>
                <p class="course-price">
                    <span>￥${ list.price_new}</span><del>￥${list.price_old}</del>
                    <span class="study-num">已报名6人</span>
                </p>
            </a>
        </li>`
                }
                $('.course-list').html(html)
                var html = ''
                for (var i = 0; i < res.pageCount; i++) {
                    html += `<a href="#" class="${i == pno - 1 ? 'active' : ''}">${i + 1}</a>`
                }
                console.log(html)
                $('.page_item').html(html);
                if (pno == 1)
                    $('.page ').children().first().attr("disabled", 'true');
                else if (pno == res.pageCount) {
                    $('.page ').children().last().attr("disabled", 'true');
                }

                else
                    $('.page ').children().first().removeAttr("disabled");



            }
        })
    }


}else {
    $input.val(kwords)
    $.ajax({
        url: 'http://127.0.0.1:3000/news/search',
        data: {kwords},
        type: 'get',
        success: function (res) {
            console.log(res)
            var html = ''
            for (var list of res) {
                html += ` <li>
            <div class="tool-course-type">${ list.yw_yw_course_type}</div>
            <a href="#">
                <img src="${list.img_url}" alt="">
                <p>
                    <span class="course-name">${list.title}</span>
                    <span class="course-end">已结束</span>
                </p>
                <p class="course-price">
                    <span>￥${ list.price_new}</span><del>￥${list.price_old}</del>
                    <span class="study-num">已报名6人</span>
                </p>
            </a>
        </li>`
            }
            $('.course-list').html(html)
        }
    })
}
loading()

    $('.page').on('click','button',function (e) {
        e.preventDefault()
        var $a=$(e.target)
        if($a.is(':first-child'))
            var no= pno-1;
        else if($a.is(':last-child'))
            var no=pno+1;
        loading(no);
    })

})