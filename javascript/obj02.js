//obj02.js

let scores = [10, 30, 50, 40];

//for 반복문 

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//for in
for(let i in scores){                     //인덱스를 뽑아내는거
    console.log(i+ ' ' +scores[i]);
}

//for of
//item value score 
for(let item of scores){                  //for(String item : stringArr) 값을 뽑아내는거
    console.log(item);
}


//forEach
scores.forEach((item, index)=>{
    console.log(item + ' ' + index);
});