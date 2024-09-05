// // console.log("hello");
// // console.log(2+2);
// // console.log('hello'+' world');

// // alert('hello world')

// // 1 вариант, лучше не использавать
// // var a = 10
// // a = 20
// // console.log(a);


// // let b=1998
// // b=2024
// // console.log(b);

// // const c=20;
// // console.log(c);

// let num = 1
// console.log(num);

// console.log('Добро '+'пожаловать'+' на курс'+' Максим');

// // alert('04.09.2024')

// //тип данных number
// //infinity

// let a = Infinity
// console.log(a);

// //NaN
// console.log(NaN);
// console.log('str'* 10);


// //тип данных bigint
// console.log(45567899010928836545n);

// //string
// let str1 = 'hello1'
// let str2 = "hello2"
// let str3 = `hello3 ${str1}`
// console.log(str1);
// console.log(str2);
// console.log(str3);

// //bool

// console.log(20<100);
// console.log(20>100);

// //null
// console.log(null);

// //undefined

// let m;
// console.log(m);

// //typeof x
// console.log(typeof 'cat');
// console.log(typeof null);
// console.log(typeof 10);
// console.log(typeof false);
// console.log(typeof 10n);
// console.log(typeof undefined);


// //обращение к документу index
// document.getElementById('one').innerHTML = 'Hello, world!'

// //getElementById найти элемент по id
// //innerHTML вывод на страничку
// document.getElementById('one').innerHTML = '<h1>Заголовок</h1>'
// document.getElementById('one').innerHTML = 666

// document.querySelector('#one').innerHTML = 600

// document.querySelector('p').innerHTML = 200


// let butt = document.querySelector('.but')
// let inp = document.querySelector('.txt')
// let out = document.querySelector('.one')

// butt.onclick = function(){
//     console.log('yes');
//     let e= inp.value
//     out.innerHTML += `<li>${e}</li>`
// }

// // let myhappy = prompt('Когда у тебя ДР?')
// // console.log(myhappy);

// // if(условие){
// //     действие, которое произойдет, если условие исттина
// // }

// // let ans = document.querySelector('#one')
// // if(myhappy == 22){
// //     ans.innerHTML = 'yes';
// // } else{
// //     console.log('no');
// // }

// let mynum = prompt('Сравнение с числом 100')
// let ans = document.querySelector('#one')
// if(mynum >= 100){
//     ans.innerHTML = mynum;
// } else{
//     console.log(mynum);
// }

// let year = prompt('В каком году вышел Ходячий замок?')
// if(year < 2004){
//     console.log('рано');
// }
// else if(year > 2004){
//     console.log('поздно');
// }

// else{
//     console.log('верно');
// }


// //тернарный оператор

// let day = prompt('сколько дней в неделе?')

// let week = day == 7 ? true:false
// console.log(week);



// if(10 > 2){
//     console.log(1);

// }
// else{
//     console.log(2);
// }

//let c= (10>2) ? console.log(1) : console.log(2)



//задача 1 дз

// let a = Number(prompt('введите число a'))
// let b= Number(prompt('введите число b'))

// let c= ((a + b)>15) ? console.log('yes'):console.log('no')

// //задача 2

// let per1 = 3;
// let per2 = 'hjkh';

// if(per1 === per2){
//     console.log('true');
// }
// else{
//     console.log('false');
// }

//задача 1 урок 5

// let out = document.querySelector('.one')
// let i =1;
// while(i <= 50){
//     out.innerHTML += " "+ i;
//     i++;
// }

// //задача 2 урок 5

// let ii =50;
// while(ii >= 25){
//     console.log(ii)
//     ii--;
// }


// //задача 3 урок 5
// let iii = 2500;
// let out2 = document.querySelector('.one1')

// while(iii <= 3000){
//     if(iii % 2 != 0){
//         out2.innerHTML += " " + iii;
//     }
//     iii++;
// }

// //

//lesson6
// switch(x){
//     case "значение 1": //аналог if (x=== значение 1)
//      //тело этого case
//     break

//     case "значение 2":
//         //тело
//         break
    
//         default:
//             //если ничего не подошло, вместо else
// }

// let a = 5 + 2;
// switch(a){
//     case 5:
//         alert('no')
//         break
//     case 10:
//         alert('yes')
//         break
//     case 15:
//         alert('no')
//         break
//     default:
//         alert('nooooo')
// }


//задача 1 урок 6

let num1 = 6;
let num2 = Number(prompt('введите число'));


switch(num1){
    case num2:
        alert('да')
        break;
    case undefined:
        alert('нет')
        break;
    default:
        alert('не сработало')
}

// let str = '1'
// let d = 0
// switch(+str){// +str перевод строки в число
//     case d+1:
//         alert('ok')
//         break;
//     default:
//         alert('no')
// }

//задача 2 урок 6

let month = Number(prompt('введите номер месяца'));
switch(month){
    case 1:
        case 2:
            case 12:
                alert ('зима')
                break;
    case 3:
        case 4:
            case 5:
                 alert ('весна')
                 break;
    case 6:
        case 7:
            case 8:
                alert ('лето')
                break;
    case 9:
        case 10:
            case 11:
                alert ('осень')
        break;
    // default:
    //     alert('месяца с таким номером не существует')
}

//задача 3 урок 6 (оператор нулевого слияния)
let s1 = 5;
let s2 = 9;
let s3 = null;

alert(s1 ?? s2 ?? s3)