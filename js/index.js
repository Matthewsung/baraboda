// 배너 움직임
let banner = $('.banner');
let timer = 3000;
let b_index = 1;
let b_length = banner.length;
let b_interval ;
let b_chk = true;
// 인디케이터, 배너1, 배너1 텍스트 움직임 시작
location_move(); 
$('.banner_1 .b_txt').animate({opacity:"1"},0)
b_slide()
// 누르면 인터벌 시작
$('.l_play').on('click',function(){
    clearInterval(b_interval);
    b_slide()
    $('.l_stop').removeClass('l_icon_active')
    $('.l_play').addClass('l_icon_active')
})
// 누르면 인터벌 멈춤
$('.l_stop').on('click',function(){
    clearInterval(b_interval);
    $('.l_play').removeClass('l_icon_active')
    $('.l_stop').addClass('l_icon_active')
})
function b_slide(){
    b_chk = false;
    b_interval = setInterval(function(){
        banner.eq((b_index - 1) % b_length).animate({left:"-150%"},timer*0.3).animate({left:"150%"},0);
        banner.eq((b_index - 1) % b_length).find('.b_txt').animate({opacity:"0"})
        banner.eq(b_index % b_length).animate({left:"0"},timer*0.3);
        banner.eq(b_index % b_length).find('.b_txt').animate({opacity:"0"},timer*0.3).animate({opacity:"1"},timer)
        b_index++;
        location_move();
        setTimeout(function(){
            b_chk = true;
        },timer)
    },timer)
}


// location  움직임 
function location_move(){
    if((b_index - 1) % banner.length == 0){
        $('.location_bar').animate({left:"-100%"},0)
    }
    $('.location_bar').eq((b_index - 1) % banner.length).animate({left:'0'},timer)
}

// shop 메뉴 변경시 밑의 화면 변경
$('.shop_best').click(function(event){
    $('.shop_color').removeClass('shop_color')
    $('.shop_box_active').removeClass('shop_box_active')

    $('.shop_merchan').addClass('shop_color')
    $('.shop_box_2').addClass('shop_box_active')
    event.preventDefault($('.shop_box_2'))
})
$('.shop_merchan').click(function(){
    $('.shop_color').removeClass('shop_color')
    $('.shop_box_active').removeClass('shop_box_active')

    $('.shop_best').addClass('shop_color')
    $('.shop_box_1').addClass('shop_box_active')
})
// shop div 넣기
    function input_div(num,folder,where){
        for(let i =0; i<num; i++){
            let list = "";
                list += '<div class="shop_item">';
                list +=     '<a href="item_buy.html?cat='+ folder +'&item='+i+'">'
                list +=         '<div class="shop_img">';
                list +=             '<img src="./img/2nd/'+img_list[folder][i].src+'/'+img_list[folder][i].src2+'" alt="">';
                list +=         '</div>';
                list +=         '<div class="s_txt">';
                list +=             '<div>'+img_list[folder][i].name+'</div>';
                list +=             '<div>'+img_list[folder][i].tag+'</div>';
                list +=             '<div>'+Commas(img_list[folder][i].price)+'</div>';
                list +=         '</div>';
                list +=     '</a>'
                list += '</div>';
            $(where).append(list);
        }   
    }
    input_div(3,0,'.shop_box_1')
    input_div(3,1,'.shop_box_2')
    

//more 움직임
$('.more').hover(function(){
    $(this).addClass('more_active')
},function(){
    $(this).removeClass('more_active')
})

// 메뉴 이동에서 투명판 만들기
$('.move_item > div').append('<div></div>')

// 스크롤시 아이템 올라옴

let i_o_top = $('.intro').offset().top;
let shop_o_top = $('.shop').offset().top;
let ma_o_top = $('.magazine').offset().top;
let p_o_top = $('.pick').offset().top;

let b_height = $('.banner_box').height();
let m_height = $('.m_move').height();
let shop_height = $('.shop').height();
let r_height = $('.r_box').height();

$(window).scroll(function(){

    let s_top = $(window).scrollTop();
     //m_move 움직임
    if(s_top >= (i_o_top - (b_height * 0.3))){
        for(let i =0 ; i < $('.move_item').length; i++){
            (function(tmp_i) {
                setTimeout(function(){
                    $('.move_item').eq(tmp_i).css({transform: "translateY(0)"  , opacity:"1"})
                },100 * tmp_i)
            })(i);
        }
    }
    // shop 돌아감
    if(s_top >= (shop_o_top - (m_height * 0.5))){
        for(let i =0 ; i < $('.shop_item').length; i++){
            (function(tmp_i) {
                setTimeout(function(){
                    $('.shop_item').eq(tmp_i).css({transform:"rotateY(0deg)", opacity:"1"},1000)
                },100 *tmp_i)
            })(i);
        }
    }
    // magazine 움직임

    if(s_top >= (ma_o_top - (shop_height * 0.6))){
            
        $('.mz_box').css({transform: "scale(1)"})
    }

    // pick 움직임

    if(s_top >= (p_o_top - (r_height * 0.5))){
        for(let i =0 ; i < $('.p_item').length; i++){
            (function(tmp_i) {
                setTimeout(function(){
                    $('.p_item').eq(tmp_i).css({transform:"translateY(0)", opacity:"1"})
                },100 * tmp_i)
            })(i);
        }
    }
})
// pick 넣기(랜덤으로)


// let array = []        
for(let i=0; i<3; i++){
    let img_length = img_list.length - 2;
    let box_num = Math.floor(Math.random() * ((img_length - 0 +1)+ 0)); // 폴더번호
    // let img_item_length = img_list[box_num].length -1;
    // let item_num=  Math.floor(Math.random() * ((img_item_length - 0 +1)+ 0));
    
//     for(let j=0;j<999999; j++){
//         item_num =  Math.floor(Math.random() * ((img_item_length - 0 +1)+ 0)); //아이템 번호
        
//         if(i=0){
//             array[i] = item_num
//         }
//         if(i>0){
//             if(array[i-1] == array[i]){
//                 break
//             }
//             else{
//                 array[i] = item_num
//             }
            
//         }
//         if(array.length == 4){
//             break;
//         }
//     }
//     console.log(array[0], array[1] , array[2], array[3])



    list="";
    list += '<div class="p_item">'
    list +=     '<a href="item_buy.html?cat=' + i +'&item=2">'
    list +=         '<img src="./img/2nd/' + img_list[i][1].src + '/'+img_list[i][1].src2+'" alt="">'
    list +=         '<div class="p_txt">'
    list +=             '<div>'+img_list[i][1].name+'</div>'
    list +=             '<div>'+img_list[i][1].tag+'</div>'
    list +=             '<div>'+Commas(img_list[i][1].price)+'</div>'
    list +=         '</div>'
    list +=     '</a>'
    list += '</div>'
    $('.p_box').append(list)
}
///////////////난수 완성되면 삭제////////////////////////////
    list="";
    list += '<div class="p_item">'
    list +=     '<a href="item_buy.html?cat=' + 1 +'&item=2">'
    list +=         '<img src="./img/2nd/' + img_list[1][2].src + '/'+img_list[1][2].src2+'" alt="">'
    list +=         '<div class="p_txt">'
    list +=             '<div>'+img_list[1][2].name+'</div>'
    list +=             '<div>'+img_list[1][2].tag+'</div>'
    list +=             '<div>'+Commas(img_list[1][2].price)+'</div>'
    list +=         '</div>'
    list +=     '</a>'
    list += '</div>'
    $('.p_box').append(list)
///////////////////////////////////////////////////
// sns 박스에 이미지 집어 넣기
    for(let i =0; i< img_list[3].length;i++){
        list="";
        list += '<div class="s_img">';
        list +=     '<a href="#">'
        list +=         '<img src="./img/1st/'+img_list[3][i].src+'" alt="" class="sns_img">';
        list +=         '<div class="s_icon_box">';
        list +=             '<img src="./img/1st/icon_1.png" alt="" class="icon_1">';
        list +=             '<img src="./img/1st/icon_2.png" alt="" class="icon_2">';
        list +=         '</div>';
        list +=     '</a>'
        list += '</div>';

        $('.s_img_box').append(list);
    }
