// == 는 값비교
// === 값과 타입까지 비교

    const personInfo1 = {
        name:"홍길동",
        age:25,
        phone:[ '010', '1234', '5678' ],
        engName:"JOHN SMITH",
        nickname:'복습마왕'
        }    
        
        personInfo1.phone = ["010", "1234", "5678"];
        personInfo1.engName = 'JOHN SMITH';
        personInfo1.nickname = "복습마왕";

        
    const personInfo = { // {}안은 객체
        name:"홍길동", // 키 : 밸류
        age:25,
        phone:"010-1234-5678".split('-'),
        engName: "John Smith".toUpperCase(),
        nickname:" 복습마왕 ".trim()
        }  
        
        personInfo.nickname = personInfo.nickname.trim(); //공백제거
        personInfo.engName = personInfo.engName.toUpperCase(); //대문자변환
        personInfo.phone = personInfo.phone.split('-');  //매개변수 기준 문자열을 잘라서 배열로 반환
        console.log('변경 후');
        console.log(personInfo1);
        console.log(personInfo);


        //personInfo.phone = [personInfo.phone.substring(0,3), personInfo.phone.substring(4,8), 
        //                   personInfo.phone.substring(9,13)]
        //substring 글자 추출(시작위치, 끝위치(포함X))  시작위치 <= 범위 < 끝위치)

        