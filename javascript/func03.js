//

function fff(){
    console.log(1);
    console.log(2);
    //return; 리턴을 만나면 실행 끝내버린다.
    //console.log(3);

    return 3;
}

let result = fff();

console.log(result);

const af = ()=>{  //화살표함수 arrow
    console.log(4);
    console.log(5);
    return 6;
}

console.log(af());

//const af2 = ()=>7;
const af2 = () => 1+2+3+4; //{}생략하고 값이든 식이든 나오면 바로 return!!!

console.log(af2());

// () => 7; 
// () => { return 7; }

function scope1(){
    let x = 10;
}

//console.log(x);

if(true){
    let y = 300;
}

//console.log(y);

let z = 300;

if(true){
    console.log(z);
}

function scope2(){
    console.log(z);
}

scope2();

{   //scope 영역
    let qqq = 100;
}

//console.log(qqq);

ccc = 3000;
var ccc;

//dd = 30;
//let dd;
//console.log(dd);

console.log(ccc);

check();
function check(){  //호이스팅 선언부를 위로 올려줌
    console.log('check');
} 
check();

(function (){
    console.log('1회용 함수');
})();

(function oneuse(){
    console.log('1회용 함수');
})();