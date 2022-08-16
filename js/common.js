$(function(){
    //header hover
        var dorp_flag = false;

        function addHover(n) {
            if (n > 100) {
                $('header').addClass('hover');
            } else {
                $('header').removeClass('hover');
            }
        };
        var scrollTop = $(window).scrollTop();
        addHover(scrollTop);
        $(window).scroll(function() {
            scrollTop = $(window).scrollTop();
            addHover(scrollTop);
        });
        // 二级下拉
        $navitem = $('header .yiji');
        $navcon = $('.nav_drop_item');
        $navitem.mouseenter(function() {
            let id = $(this).attr('data-id');
            $navcon.each(function() {
                if ($(this).attr('data-id') == id && $(this).find('.box_').length) {
                    $('header').addClass('hover');
                    $('.header_nav_box').addClass('show');
                    $('header nav .nav_cont').stop().slideDown(300);
                    $(this).stop().fadeIn(300);
                    $(this).siblings().fadeOut(0);
                }
            })
        });
        $('header nav').mouseleave(function(){
            if(scrollTop<90){
                $('header').removeClass('hover');
            }
            $('.header_nav_box').removeClass('show');
            $('header nav .nav_cont').stop().slideUp(0);
            $navcon.fadeOut(0);
        });
        //搜索按钮
        $('header .search_btn').click(function(){
            $('.index_search_box').fadeIn(300)
        })
        $('.index_search_box .cont .close').click(function(){
            $('.index_search_box').fadeOut(300)
        })
        //手机二级下拉
        $('header .nav_btn_m').click(function(){
            $('.nav_m_box').addClass('show');
        });
        $('.nav_m_box').click(function(){
            $('.nav_m_box').removeClass('show');
        });
        $('.nav_m_cont .box___ .close .icon').click(function(){
            $('.nav_m_box').removeClass('show');
        })
        $('.nav_m_cont').click(function(e){
            e.stopPropagation();
        })
        $('.nav_m_cont .box___ .yiji_m').click(function(){
            let len = ($(this).next('.drop_down_m').css('display') == 'none');
            if(len){
                $('.drop_down_m').slideUp(200);
                $('.nav_m_cont .box___ .yiji_m .icon').removeClass('active')
                $(this).find('.icon').addClass('active')
                $(this).next('.drop_down_m').slideDown(300); 
            }else{
                $('.nav_m_cont .box___ .yiji_m .icon').removeClass('active')
                $(this).next('.drop_down_m').slideUp(300);
            }
        });
        $('.nav_m_cont .box___ .yiji_m>a').click(function(e){
            e.stopPropagation()
        });
        $('.nav_m_cont .box___ .drop_down_m a').click(function(){
            $('.nav_m_box').removeClass('show');
        })
})