// var name = "Ivan";

// let number = 7;
// const pi = 3.14;

// number = 4;

// let leftBorderWidtn = 200;

//number
//string - "", '' , `` 
//true/false
//null
//undefined
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }
//Symbol
// alert(1234);
// console.log(number);
// let answer = confirm("Вам есть 18?");
// console.log(answer);

// let answer = prompt("Вам есть 18?", "");
// console.log(answer);

// console.log(4 - "hbdf");

// let isChecked = true,
//     isClose = false;

// console.log(isChecked && isClose);

// console.log(isChecked || isClose);

// if (1*4 == 8*1) {
//     console.log('Its truth');
// } else {
//     console.log('Error');
// }

// let answer = confirm("Вам есть 18?");

// if (answer){
//     console.log('enter');
// } else {
//     console.log('exit');
// }

// const num = 50;

// if (num < 49) {
//     console.log('not right');
// } else if (num > 100) {
//     console.log('too much');
// } else {
//     console.log('right');
// }
// for (let i = 1; i <18; i++) {
//     console.log(i);
// }
// function logging(a, b) {
//     console.log( a + b );
// }

// logging(43, 5);

// logging(5, 8);

// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,        
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
        
//     });
// });
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    // responsive: {
    //     640: {
    //     edgePadding: 20,
    //     gutter: 20,
    //     items: 2
    //     },
    //     700: {
    //     gutter: 30
    //     },
    //     900: {
    //     items: 3
    //     }
    // }    
    });
document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});    