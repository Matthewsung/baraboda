// item 넣기

function input_item(num1, num2){
    for(let i=num1; i<num2;i++) {
        for(let j=0; j<img_list[i].length ;j++) {
            let list = "";
            list += '<div class="item_box">';
            list +=     '<a href="./item_buy.html?cat='+i+'&item='+j+'">'
            list +=         '<div class="i_img">';
            list +=             '<img src="img/2nd/'+img_list[i][j].src+'/'+img_list[i][j].src2 +'" alt="">';
            list +=         '</div>';
            list +=         '<div class="i_desc"> ';
            list +=             '<div class="i_name">'+img_list[i][j].name+'<p>더보기</p></div>';
            list +=             '<div class="i_tag">'+img_list[i][j].tag+'</div>';
            list +=             '<div class="i_price">'+Commas(img_list[i][j].price)+'</div>';
            list +=         '</div>';
            list +=     '</a>'
            list += '</div>';
            $('.sec').append(list);
        }   
    }
}
if(cat_no == 0){
    input_item(0, 1);
    select_menu(cat_no);
}
else if(cat_no == 1){
    input_item(1, 2);
    select_menu(cat_no);
}
else if(cat_no == 2){
    input_item(2, 3);
    select_menu(cat_no);
}
else{
    input_item(0, 3);
    select_menu(cat_no);
}
// 메뉴 선택
function select_menu(cat_no){
    $('.t_b_item').eq(cat_no).css({fontWeight:"600"})
}

// 스크롤 

    let s_top = $(window).scrollTop();
    for(let i =0; i <$('.item_box').length; i++){
        (function(tem_i){
            setTimeout(function(){
                $('.item_box').eq(tem_i).css({transform:"translateY(0)", opacity:"1"})
            },200*(tem_i+1))        
        })(i)
        
    }

// 총 몇개의 상품이 등록되어있습니다.
$('.select_L span').text($('.item_box').length)