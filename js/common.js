$(document).ready(function(){
    
    // 해더 움직일때 고정
    let logo_o_top = $('.logo').offset().top;
    $(document).scroll(function(){
        let s_top =  $(window).scrollTop();
        if($(window).scrollTop() >= logo_o_top){
            $('.header').addClass('header_active');
            $('.main').addClass('main_active')
        }
        else {
            $('.header').removeClass('header_active')
            $('.main').removeClass('main_active')
        }
    })

    // sub_메뉴
    let win_width= $(document).innerWidth();
    $(window).resize(function(){
        win_width= $(document).innerWidth();
        
        sub_menu()
    })
    function sub_menu(){
        if(win_width > 1040){
        
            // $('.header, icon').mouseenter(function(){
            //     $('.sub_menu').stop().slideDown()
            // })
            // $('.header').mouseleave(function(){
            //     $('.sub_menu').stop().slideUp()
            // })

            $(document).on('mouseenter', '.header, icon', function (){
                $('.sub_menu').stop().slideDown()
            })

            $(document).on('mouseleave', '.header', function (){
                $('.sub_menu').stop().slideUp()
            })
        }
        else {
            $(document).off('mouseenter', '.header, icon');
            $(document).off('mouseleave', '.header');
        }
    }
    sub_menu()

//작은 화면 햄버거 클릭시 나타남
    
    $('.sm_menu_indi_box').on('click',function(){
        $('.sm_memu_pan').toggleClass('sm_memu_pan_active');
        $('.sm_menu').toggleClass('sm_menu_active');
        $('.indi_top, .indi_bot').toggleClass('indi_none');
        $('.indi_mid_1').toggleClass('indi_mid_1_active');
        $('.indi_mid_2').toggleClass('indi_mid_2_active');
    })
})


// 버튼 누르면 맨 위 or 맨 아래로 이동
function Top_click(){
    $('.top_up').on('click',function(){
        $("html, body").stop().animate({ scrollTop: 0 + "px" },1000)
    })
    $('.top_down').on('click',function(){
        $("html, body").stop().animate({ scrollTop: $(document).height() + "px" },1000)
    })
}

Top_click()