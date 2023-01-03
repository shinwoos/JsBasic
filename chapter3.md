## 전개 구문(spread syntax)

<br>
<br>

아래 두 코드는 user 객체에 프로퍼티를 담는 코드임.
첫번째 코드는 object.assign 메소드를 이용해
user, info skills[] 을 만들어준 후

fe 배열과 lag 배열을 skills 배열에 담아주기 위해
배열 반복문인 forEach를 사용. 배열 메소드 push를 반복하여
index를 넣어준다.

```javascript
let user = { name: "mike" };
let info = { age: 30 };
let fe = ["Js", "react"];
let lag = ["kr", "eng"];

user = Object.assign({}, user, info, {
  skills: [],
});

fe.forEach((item) => {
  user.skills.push(item);
});

lag.reverse().forEach((item) => {
  user.skills.push(item);
});
```

<br>
<br>
두번째 코드는 전개구문을 사용해서 user 객체에 프로퍼티 할당을 해준다. user info 객체와 skill 배열에 ...만 붙여주면 간단하게 
위에 코드와 똑같이 출력됨.

```javascript
let user = { name: "mike" };
let info = { age: 30 };
let fe = ["Js", "react"];
let lag = ["kr", "eng"];

user = {
  ...user,
  ...info,
  skills: [...fe, ...lag],
};
```

```javascript
//result
{ name: 'mike', age: 30, skills: [ 'Js', 'react', 'kr', 'eng' ] }
```
