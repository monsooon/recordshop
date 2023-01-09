// 슬릭 관련 코드
$(function(){
    $('.slider-div').slick({
        autoplay:true, //자동 재생
        dots:true,
        arrows: true, // 화살표 표시 여부
        fade:false, // 페이드 효과 여부.
        pauseOnHover:true, // 이걸 true로 해두면 마우스 호버 시에 슬라이드가 안 움직인다.
        draggable:true,

    });
});

// 상품 관련 -----------------------------------------

const img = document.getElementById('img');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');


img.addEventListener('mouseover', (event) =>{
    img.src="img/t-shirt02_back.jpg"
});

img.addEventListener('mouseout', (event) => {
    img.src="img/t-shirt02.jpg"
});

// Disco 갈색 후드 관련 -----------------------

img2.addEventListener('mouseover', (event) =>{
    img2.src="img/peggy_gou.jpg"
});

img2.addEventListener('mouseout', (event) => {
    img2.src="img/peggy_gou_front.jpg"
});

// 클래식 블루 티 관련 -----------------------

img3.addEventListener('mouseover', (event) =>{
    img3.src="img/t-shirt_04_back.jpg"
});

img3.addEventListener('mouseout', (event) => {
    img3.src="img/t-shirt_04.jpg"
});

//Groove 면티 관련 -----------------------------

img4.addEventListener('mouseover', (event) =>{
    img4.src="img/t-shirt_05_back.jpg"
});

img4.addEventListener('mouseout', (event) => {
    img4.src="img/t-shirt_05.jpg"
});