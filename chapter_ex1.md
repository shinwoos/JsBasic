## 변수의 생성과정

*var*

- 선언과 초기화가 동시에 이루어짐
- 할당 단계

*let*

- 선언 단계
- 초기화 단계
- 할당 단계

선언과 초기화가 분리되어 이루어짐<br>
호이스팅 되면서 선언단계가 이루어짐<br>
초기화는 실제 코드에 도달했을 때 이루어져서 레퍼런스 에러가 발생함

*const*

- 선언 + 초기화 + 할당

<br>

```javascript
    let name;
    name = 'shin';
    var age;
    age = 20;
    const gender;
    gender = 'male'; //여기서 gender는 선언과 동시에 할당을 하지 않아서 에러.
```
<br>

*스코프(scope)*

var는 함수 스코프 <br>
let, const는 블록 스코프




