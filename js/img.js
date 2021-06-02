// cat_no와 item_no 가져오는 함수
function Get_url_info(key) {
    let url = location.href; 
    url = url.split("?"); 
    if(url.length > 1) { 
        url = url[1].split("&") 
        for(let i=0; i<url.length; i++) {
            let tmp_url=url[i].split("="); 
            if(tmp_url[0] == key) {
                return tmp_url[1];
            } 
        }
    }
}
function Commas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let cat_no = Get_url_info("cat");
let item_no = Get_url_info("item");
// 콤마 찍어주는 함수

const img_list = [
    // 스페셜티0
    [
        {i_no:"0", src:"spec", src2:"1.jpg",src3:"1_1.png", name: "디카페인 콜롬비아 수프리모 산어거스틴", tag:"#캐러멜 #꿀 #오렌지 #밀크초콜릿", price:"13000"},
        {i_no:"1", src:"spec", src2:"2.jpg",src3:"1_1.png", name: "엘살바도르 핀카 에스코시아 SL34 에어로빅 내추럴", tag:"#짙은 시트러스 #견과류 #살구", price:"15000"},
        {i_no:"2", src:"spec", src2:"3.jpg",src3:"1_1.png", name: "에티오피아 예가체프 아리차 G1 내추럴", tag:"#크랜베리 #블루베리 #화사한 여운", price:"13000"},
        {i_no:"3", src:"spec", src2:"4.jpg",src3:"1_1.png", name: "에디오피아 예가체프 게뎁 반코 고티티 G1 내추럴", tag:"#플로럴 #망고 #쥬시 #복합성", price:"15000"},
        {i_no:"4", src:"spec", src2:"5.jpg",src3:"1_1.png", name: "인도네시아 수마트라 가요 쁘가싱 더블워시드", tag:"#군고구마 #오렌지 #초코바 #견과류 #부드러운 질감", price:"13000"},
        {i_no:"5", src:"spec", src2:"6.jpg",src3:"1_1.png", name: "과테말라 우에우에테낭고 와이칸", tag:"#바닐라 #초코 #몹시달다 #깨끗하다", price:"13000"}
    ],
    // 커피용품1
    [
        {i_no:"0", src:"eqiv",src2:"1.jpg", src3:"1_1.jpg", name: "[칼리타] 102LD 도자기 드리퍼(브라운)", tag:"2~4인용", price:"12800"},
        {i_no:"1", src:"eqiv",src2:"2.jpg", src3:"1_1.jpg", name: "[폰타노] 우드 인덕션 드립포트 600ml", tag:"", price:"18000"},
        {i_no:"2", src:"eqiv",src2:"3.jpg", src3:"1_1.jpg", name: "[칼리타] 101LD 도자기 드리퍼(브라운)", tag:"1~2인용 브라운", price:"11800"},
        {i_no:"3", src:"eqiv",src2:"4.jpg", src3:"1_1.jpg", name: "[칼리타] FP 102 필터 브라운", tag:"2~4인용 100매", price:"4900"},
        {i_no:"4", src:"eqiv",src2:"5.jpg", src3:"1_1.jpg", name: "[칼리타] FP 103 필터 브라운", tag:"4~7인용 100매", price:"6500"},
        {i_no:"5", src:"eqiv",src2:"6.jpg", src3:"1_1.jpg", name: "[칼리타] FP 101 필터 브라운", tag:"1~2인용 100매", price:"4500"},
        {i_no:"6", src:"eqiv",src2:"7.jpg", src3:"1_1.jpg", name: "[폰타노] 우드 핸드밀 KH-3", tag:"", price:"25900"},
        {i_no:"7", src:"eqiv",src2:"8.jpg", src3:"1_1.jpg", name: "[칼리타] FP 104 필터 브라운", tag:"7~12인용 100매", price:"8500"}
    ],
    // 선물세트2
    [
        {i_no:"0", src:"pack",src2:"1.jpg", src3:"1_1.jpg", name: "스페셜티 원두 선물세트", tag:"200g x 2ea (선물박스포장)", price:"26000"},
        {i_no:"1", src:"pack",src2:"2.jpg", src3:"1_1.jpg", name: "스페셜티 데일리팩", tag:"30g x 7ea (다양한 스페셜티를 한박스 안에)", price:"16600"}
    ],
    // SNS 사진3
    [
        {i_no:"0", src:"sns_1.jpg"},
        {i_no:"1", src:"sns_2.jpg"},
        {i_no:"2", src:"sns_3.jpg"},
        {i_no:"3", src:"sns_4.jpg"},
        {i_no:"4", src:"sns_5.jpg"},
        {i_no:"5", src:"sns_6.jpg"},
        {i_no:"6", src:"sns_7.jpg"},
        {i_no:"7", src:"sns_8.jpg"},
        {i_no:"8", src:"sns_9.jpg"}
    ],
];



