<head>

## loop 반복문

</head>

<body>
<br>

*for문*

```javascript
for(var  i = 0; i <= 10 ; i++){
    console.log(i);
}
```
<br>

*while문*
```javascript
var i = 0;

while(i<10){
    console.log(i);
    i++;
}
```
<br>


반복문을 빠져나올 때 break와 continue를 사용.

*break*
```javascript
while(true){ // true는 무한루프
    var answer = confirm("계속할까요?"); // confirm 확인 취소 콘솔 창.
    if(!answer){ // 취소를 누를시에 break 발동
        break;
    }
}
```
<br>

*continue*

```javascript
///짝수만 출력함.
for(var i = 0; i < 10; i++){
    if(i%2){ // 나머지가 1일 경우엔 continue 발동
        continue;
    }
    console.log(i); // 나머지가 0일 경우에 log 출력
}
```

<br>
</body>

<head2>

## 함수(function)

</head2>

<body2>

**함수를 만드는 목적은 중복을 줄이기 위해서**

<br>

*매개변수가 없는 함수*

```javascript
function showError(){
    alert("에러가 발생했습니다. 다시 시도해주세요.");
}

showError();
```
<br>

*매개변수가 있는 함수*
```javascript
function hello(name){
    let message = "hello";
    if(name){
      message += `, %{name}`;
    }
    console.log(message);
}
hello("shin");
```

<br>

*매개변수의 디폴트 값을 할당하고 사용할 때*
```javascript
function hello(name = "friend"){
    let msg = `hello, ${name}`;
    console.log(msg);
}
hello();
hello('shin');
```
<br>

*return 으로 값 반환*
```javascript
function add(num1, num2){
    return num1 + num2; // 변수 result 에서 값을 선언 후 더하고 나서 그 값을 반환
}
 
var result  = add(2,3); 
console.log(result); // 반환된 값이 출력됨.
```
<br>

```javascript
function shwoError(){
    alert("에러가 발생했습니다."); // return문이 없어도 undefined 반환. 
    return; // return문은 함수를 종료할 때도 쓰임
    alert("에러가 발생2"); // 위에 return문 선언이 되어 있어서 절대 출력 안됨.
}

var result = showError();
console.log(result);
```
</body2>