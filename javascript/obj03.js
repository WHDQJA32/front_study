//obj03.js

let arr = [1, 2, 3];

//arr[2] = 4; arr index[2] 위치를 4로 바꾼다.

//Java new int[3];
// new int[5]; -> ArrayList

//javascript 에 배열을 조작하는 함수

//배열 추가
console.log(arr);
arr.push(10);    //배열 뒤에 값 추가
arr.unshift(20); //배열 앞에 값 추가
console.log(arr);

//배열 삭제
console.log(arr.pop()); //배열 뒷값을 반환하고 삭제하고 출력
//arr.pop(); 배열 뒤에 값 삭제
//arr.shift(); 배열 앞에 값 삭제
let shiftItem = arr.shift(); //삭제한 값을 담아준다.
console.log(shiftItem); //삭제한 값을 출력
console.log(arr);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
//concat 배열 이어붙이기(연결)
console.log(arr1.concat(arr2)); //arr1, arr2 이어붙여서 출력


let arr3 = [80, ...arr1, 90]; //배열의 앞 뒤로 추가 시켜준다.
//...연산자 배열 분해한다.
console.log(arr3);

console.log('----------');
//let arr4 = arr1; //얕은복사

let arr4 = [...arr1]; //깊은복사

//깊은복사 vs 얕은복사
//deep copy vs shallow copy
//주소가 아니라 배열 자체에 값으로 새로운 배열(깊은복사)

console.log(arr1);
console.log(arr4);

arr4[2] = 30;
console.log(arr1);
console.log(arr4);

//splice 함수/메소드

let arr5 = [1,2,3,4,5];
console.log(arr5);
arr5.splice(1, 2); //splice(위치인덱스, 삭제할갯수) [1,4,5]
console.log(arr5);
arr5.splice(1, 1, 30); //splice(위치인덱스, 삭제할갯수, 추가할 값)
//arr5[1] = 30;
console.log(arr5);
arr5.splice(2, 0, 40); //2인덱스 위치에 삭제는 0개를 하고 값 40을 추가.
console.log(arr5);

console.log('----------');
let obj = {};
console.log(obj);

obj.menu = "김밥"; //객체에 키 = 밸류 넣는방법
obj.price = 3500;

obj.price = 3800;
obj.location = "큰길";
console.log(obj);

obj.menu = "참치김밥"; //수정 그냥 변수에 재저장

delete obj.menu; // obj 객체에서 menu삭제하는 방법

console.log(obj);


//---------------------
console.log('------------');

let today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth()); // 0~11으로 표기 0:1월 10:11월
console.log(today.getDate());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

//String.valueOf
//Integer.parseInt
//member = new Member();
console.log(Math.round(1.55));    //반올림해서 정수로 표현
console.log(Math.trunc(123.123)); //소수점 버림

