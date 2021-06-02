$(document).ready(function(){
// 돋보기 기능
    function Enlarge(){
        let lg_img_width = $('.lg_img_box').width();
        let lg_img_height = $('.lg_img_box').height();
                    // 사진 넣고 사이즈는 lg 이미지의 너비만큼 줌
        $('.magnifier').css({backgroundImage:"url(./img/2nd/"+img_list[cat_no][item_no].src+"/"+img_list[cat_no][item_no].src2+")",backgroundSize:lg_img_width+"px, " + lg_img_height+"px"})
                    // 마우스 이동시 돋보기
        $('.lg_img_box').mouseenter(function(){
            $('.magnifier').stop().fadeIn();
            $('.lg_img_box').mousemove(function(event){
                let mos_X = event.pageX - $('.lg_img_box').offset().left - ($('.magnifier').width() / 2);
                let mos_Y = event.pageY - $('.lg_img_box').offset().top - ($('.magnifier').height() / 2);
                $('.magnifier').css({left : mos_X, top:mos_Y, backgroundPositionX: -1*mos_X, backgroundPositionY: -1*mos_Y})
            })
        })
        $('.lg_img_box').mouseleave(function(){
            $('.magnifier').stop().fadeOut();
        })    
    }
// 중간 메뉴 누르면 스르륵 이동
    let loca;
    let nav_location
    let sec_h = [];
    function Menu_move(item){
        // 움직이기 전 sec의 높이를 다시 구하고 이동
        Sec_height()
        $(item).on('click',function(){
            loca = sec_h[$(this).index()+1];
            $("html, body").animate({ scrollTop: loca + "px" },1000)
        })
    }
    // sec의 높이를 구해서 배열로 저장
    function Sec_height(){
        setTimeout(function(){
            for(let i=0; i< $('.sec').length; i++){
                sec_h[i] = $('.sec').eq(i).offset().top;
            }    
        },1000)
    }

// 옵션 박스 넣기
            // 박스 넣을때 option 값을 저장
            
    function Option_input(){
        if(opt_chk[0] == true && opt_chk[1] == true && opt_chk[2] == true ){
            list="";
            list +='<div class="selected_box">'
            list +=    '<div class="selected_item">'
            list +=        '<div class="item_name">'+img_list[cat_no][item_no].name+'</div>'
            list +=        '<div class="selected_opt">'
            list +=            '- <span class="item_opt1">'+opt_val[0]+'</span> / <span class="item_opt2">'+opt_val[1]+'</span> / <span class="item_opt3">'+ opt_val[2] + '</span>'
            list +=        '</div>'
            list +=    '</div>'
            list +=    '<div class="item_qty">'
            list +=        '<input type="text" value="1" class="btn_val" disabled>'
            list +=        '<div class="btn_qty_box">'
            list +=            '<div class="btn_qty" id="qty_plus"></div>'
            list +=            '<div class="btn_qty" id="qty_minus"></div>'
            list +=        '</div>'
            list +=        '<div class="btn_close"></div>'
            list +=        '<input type="text" class="hidden_input" disabled>'
            list +=    '</div>'
            list +=    '<div class="item_price">'+Commas(img_list[cat_no][item_no].price)+'</div>'
            
            list +='</div>'
    
            $('.selected_item_box').append(list);
            opt_chk = [false, false, false];
            
            // 판에 가격 넣어주기
            $('.item_price').text(each_price);


            // 총 가격에 정보 넣어주기 //들어가는 순간 val값을 계산해서 넣어줌
            total_v +=1;
            box_t_price = total_v * each_price;
            Input_total_val();
                        
            // tmp_sel(넣는 옵션들 모음)에 sel_arr(지금 넣는 옵션)를 저장
            tmp_sel += sel_arr +"/"
            
            // hidden_input에 sel_arr 값 넣어주기
            $('.selected_box').eq($('.selected_box').length-1).find('.hidden_input').val(sel_arr)
            
            // option들의 값을 초기화
            Reset_opt();
        }
    }

    // 총 val와 price를 넣어주는 함수
    function Input_total_val(){
        $('.total_qty').text(total_v)
        $('.box_t_price').text(Commas(box_t_price))
    }
    // 총 가격 구하는 함수
    let each_price = Number(img_list[cat_no][item_no].price);
    let arr_val = [];
    let total_v=0;
    let box_t_price;
    function Input_total(){
        for(let i=0; i < $('.selected_box').length;i++){
            arr_val[i] = Number($('.btn_val').eq(i).val());
        }
        // 배열에 넣은 값을 다 더해주는 방법
        total_v = arr_val.reduce(function(a,b){return a+b;})
        box_t_price = total_v * each_price;
        $('.total_qty').text(total_v)
        $('.box_t_price').text(Commas(box_t_price))
    }

    let sel_arr=""
    let tmp_sel=""

    function Reset_opt(){
        // 옵션 초기화
        $(".opt_1 option:eq(0), .opt_3 option:eq(0)").prop("selected",true);
        $('.roast_btn_active').removeClass('roast_btn_active');
        $('.opt_3').attr('disabled',true)
        sel_arr="";
    }



// 스크롤시 구매 페이지 보여주기
    function Show_purchase(){
        $(window).scroll(function(){
            o_top = $(window).scrollTop();
            sec_o_top = $('#sec2').offset().top;
            
            if(window_width >= 733){
                if(o_top >= sec_o_top){
                    $('.sec1_tab').css({display:"block",top: o_top -160})
                    $('.detail_box').addClass('detail_box_active').css({top:o_top- "180",display:"none"})
                }
                else if(o_top < sec_o_top){
                    $('.sec1_tab').css({display:"none"})
                    $('.detail_box').removeClass('detail_box_active').css({top:o_top - "180",display:"block"})
                }
            }
            else{
                $('.detail_box').removeClass('detail_box_active').css({top:o_top - "180",display:"block"})
            }
        })
    }
    // 옵션의 중복 체크하는 함수
    function chk_opt(){
        let opt1 = String($('.opt_1').find("option:selected").data("no"))
        let opt2 = String($('.roast_btn_active').data('no'))
        let opt3 = String($('.opt_3').find("option:selected").data("no"))
        sel_arr = opt1 + opt2 +opt3
        
        if(tmp_sel.split("/").indexOf(sel_arr)<0){
            Option_input()
        }
        else{
            alert("중복된 옵션이 있습니다.");
            Reset_opt();
        }
    }

// sec1에 사진과 옵션선택 기능 넣기
    list = "";
    list += '<div class="lg_img_box">'
    list +=     '<img src="img/2nd/'+img_list[cat_no][item_no].src+'/'+img_list[cat_no][item_no].src2+'" alt="">';
    list +=     '<div class="magnifier"></div>'
    list += '</div>'
    list += '<div class="detail_box">'
    list +=     '<div class="item_info">'
    list +=         '<div class="i_name">'+img_list[cat_no][item_no].name+'</div>'
    list +=         '<div class="i_tag">'+img_list[cat_no][item_no].tag+'</div>'
    list +=         '<div class="i_price">'+Commas(img_list[cat_no][item_no].price)+'</div>'
    list +=     '</div>'
    list +=     '<div class="option_box">'
    list +=         '<div class="opt_box opt_1_box">'
    list +=             '<div class="opt_title">분쇄도</div>'
    list +=             '<select class="opt_item opt_1">'
    list +=                 '<option value="-1">- [필수] 옵션을 선택해 주세요 -</option>'
    list +=                 '<option value="분쇄안함 (홀빈)" data-no="0">분쇄안함 (홀빈)</option>'
    list +=                 '<option value="아주굵게분쇄 (프렌치프레스)" data-no="1">아주굵게분쇄 (프렌치프레스)</option>'
    list +=                 '<option value="굵게분쇄 (핸드드립/커피메이커)" data-no="2">굵게분쇄 (핸드드립/커피메이커)</option>'
    list +=                 '<option value="중간분쇄 (더치커피)" data-no="3">중간분쇄 (더치커피)</option>'
    list +=                 '<option value="곱게분쇄 (모카포트)" data-no="4">곱게분쇄 (모카포트)</option>'
    list +=                 '<option value="아주곱게분쇄 (에스프레소)" data-no="5">아주곱게분쇄 (에스프레소)</option>'
    list +=             '</select>'
    list +=         '</div>'
    list +=         '<div class="opt_box opt_2_box" >'
    list +=             '<div class="opt_title">맞춤로스팅</div>'
    list +=             '<input type="button" value="기본로스팅" class="roast_btn roast_btn_L" data-no="0" >'
    list +=             '<input type="button" value="조금 더 쓴맛" class="roast_btn roast_btn_R" data-no="1" >'
    list +=             '<div class="opt_txt">[필수] 옵션을 선택해 주세요</div>'
    list +=         '</div>'
    list +=         '<div class="opt_box opt_3_box">'
    list +=             '<div class="opt_title">중량</div>'
    list +=             '<select class="opt_item opt_3" disabled="true">'
    list +=                 '<option value="-1">- [필수] 옵션을 선택해 주세요 -</option>'
    list +=                 '<option value="200g" data-no="0">200g</option>'
    list +=                 '<option value="500g" data-no="1">500g</option>'
    list +=                 '<option value="1kg" data-no="2">1kg</option>'
    list +=             '</select>'
    list +=         '</div>'
    list +=         '<div class="selected_item_box">'
    list +=         '</div>'
    list +=         '<div class="opt_box opt_4_box">'
    list +=             '<div class="total_price">총 상품금액 <span> (수량) </span><p class="box_t_price"> 0</p><span>( <p class="total_qty">0</p> 개 )</span></div>'
    list +=         '</div>'
    list +=     '</div>'
    list +=     '<div class="btn_box">'
    list +=         '<input type="button" value="바로 구매하기" class="item_btn">'
    list +=         '<input type="button" value="장바구니" class="item_btn">'
    list +=         '<input type="button" value="관심상품" class="item_btn">'
    list +=     '</div>'
    list += '</div>'
    $('#sec1').append(list)
    
// 카테고리 번호에 따라 상세페이지 변경
    list="";
    list += '<img src="img/2nd/'+img_list[cat_no][item_no].src+'/'+img_list[cat_no][item_no].src3+'" alt="상세페이지">'
    $('.img_detail').append(list)
    
// 돋보기 기능
    // resize 시 변하는 것들 모음
    $(window).resize(function(){
        Enlarge();
        Show_purchase();
        Sec_height();
        window_width = $(window).width()

    });
    Enlarge();
    
// 중간 메뉴 누르면 스르륵 이동
    Menu_move('.sub_nav li')
    
// 선택하면 메뉴 나오기
    
let opt_chk = [false, false, false];
let opt_val = ["","",""];
//옵션1    // 옵션 1과 옵션3이 바뀌면 val가 음수일때 opt_chk[]의 값이 false(초기값), 나머지는 true;
function Option_chg(){
    $('.opt_1').change(function(){
        $(this).val() < 0?opt_chk[0] = false:opt_chk[0] = true;
        opt_val[0] = $(this).val()
    }) 
//옵션2               
    $('.roast_btn').on('click',function(){
        if(opt_chk[0] == true){
            $('.roast_btn_active').removeClass('roast_btn_active');
            $(this).addClass('roast_btn_active');
            opt_chk[1] = true
            opt_val[1] = $(this).val()
            $('.opt_3').attr('disabled',false)
        }
        else{
            alert("옵션1을 선택해주세요")
        }
    })
//옵션3   // 옵션 1과 옵션3이 바뀌면 val가 음수일때 opt_chk[]의 값이 false(초기값), 나머지는 true;
    $('.opt_3').change(function(){ 
        if(opt_chk[1] == true){
            $(this).val() < 0?opt_chk[2] = false:opt_chk[2] = true;
            opt_val[2] = $(this).val()
            chk_opt();            
        }
        else{
            alert("옵션2를 선택해주세요")
        }
    })                   


}
Option_chg()
    /// 클릭시 수량 변경
    $(document).on('click','.btn_qty',function(){
        if($(this).index() == 0){
            Number($(this).parent().prev().val(Number($(this).parent().prev().val()) + 1));
        }
        else if($(this).index() == 1){
            Number($(this).parent().prev().val()) == 1?alert("최소 주문 수량입니다"):Number($(this).parent().prev().val(Number($(this).parent().prev().val()) - 1));
        }
        Input_total();
        Input_total_val();
    })
    

    // X 누르면 박스 사라짐 //
    $(document).on('click','.btn_close',function(){
        $(this).parent().parent().remove()
        tmp_sel = tmp_sel.replace($(this).next().val()+"/",'지운값입니다')
        total_v -= $(this).prev().prev().val();
        box_t_price = total_v * each_price;
        $('.total_qty').text(total_v)
        $('.box_t_price').text(box_t_price)
    })
    
    
    //움직이면 주문 판 따라오기
        let window_width = $(window).width();
        let o_top = $(window).scrollTop();
        let sec_o_top = $('#sec2').offset().top;
        
        Show_purchase();
        $('.sec1_tab').on('click',function(){
            $('.sec1_tab').css({right:"0"})
            $('.detail_box').stop().toggle("slide")
        })  
})


//750 이하가 되면 top_btn 나옴
$(window).resize(function(){
    Top_btn_input()
})

//750 이하가 되면 주문하기 삭제하고 top 버튼 나옴
function Top_btn_input(){
    if($(window).width() < 733){
        $('.top_btn').css({display:"block"});
        $('.sec1_tab').css({display:"none"})
    }
    else if($(window).width() > 733) {
        $('.top_btn').css({display:"none"});
        $('.sec1_tab').css({display:"block"})
    }
}


//750 이하에서 top 버튼 나오기
Top_btn_input() 
