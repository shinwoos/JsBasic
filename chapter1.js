//변수 선언

var name33 = "test2"; // 기본적으로 var로 선언

let name1 = "test"; // let은 값 변경이 가능 
name1 = "test2"; // let을 생략시에 선언할 시에 변경 가능

const NAME2 = "exam"; // const는 절대로 변하지 않음 (상수)

// 자료형

// 문자형 선언방법 ..  문자열안에 변수를 선언 시에는 ` 백틱을 이용하자.
name3 = "shin";
const message = "my name's shin"; 
const message2 = 'my name\'s shin';
const message3 = `my name is ${name3}`; //백틱을 이용한 문자열 안에 변수 선언법.
const message4 = `나는 ${20+1}살 입니다.`;

// 숫자형

// 숫자형 선언 할 때 다른 언어처럼 int형 선언 후 변수 생성 안해도 됨.
num1 = 10;
num2 = -20;

//nan = not a number


// boolean형

const a = true; // 참
const b = false; // 거짓

const f = "shin";
const g = 30;
//console.log(f == 'shin'); // true
//console.log(g > 40); // false

// null 과 undefined

let user = null;
// 변수에 값이 없으면 undefined 출력



//type of 연산자

const typ = "shin";

// 각 타입에 대해 출력 
// typeof는 api통신으로 통해 받아온 데이터를 타입에 따라 다른
// 방식으로 처리할때 사용됨

/*console.log(typeof 3);
console.log(typeof typ);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null); object라고 뜨지만 null은 object가 아님.
console.log(typeof undefined); */




// alert()  출력
// prompt() 입력 
// confirm() 확인받을 때 사용

//const q = prompt("이름을 입력하세요.");
//alert("환영합니다." + q +"님");
//alert prompt 는 html에서 스크립트문을 작성해야 브라우저에서 적동됨.

//alert("확인됐습니다.")// 메시지를 보여줌.
//prompt("ddd","fff"); //prompt는 2개의 인수를 받을 수 있음 입력을 하는 함수
//confirm("사람입니까?"); //confirm은 확인과 취소가 뜸.

// 창이 떠있는 동안 스크립트의 움직임이 제한됨.
// 스타일링이 불가능함. 위치와 모양 등.
// 그래도 기본 메서드는 빠르고 간단하게 적용가능해서 많이 사용됨


//형변환
console.log(String(3),String(true)); // 문자형 형변환
console.log(Number("2"),Number("5")); // 숫자형 형변환


