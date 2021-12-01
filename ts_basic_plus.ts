//TypeScript Plus

//Types
//1> 타입 지정
function add(a: number, b: number) {
  return a + b;
}
const sum: number = add(1, 2)
console.log(sum); //3

//2> 타입 에러
function a(a: number, b: number) {
  return a + b;
}
const b: string = add(1, 2); //number형식은 string형식에 할당할수 없다.
console.log(sum);

//3> 타입 선언
//1. Boolean - 단순히 참/거짓을 나타낸다.
let isBoolean: boolean;
let isDone: boolean = false;


//2. Number - 모든 부동 소수점 값을 사용할 수 있다.
let num: number;
let integer: number = 6;
let float: number = 3.14;
let infinity: number = Infinity;
let nan: number = NaN;


//3. String - 문자열을 나타낸다.
let str: string;
let red: string = 'Red';
let green: string = "Green";
let myColor: string = `My color is ${red}.`;


//4. Array - 순차적으로 값을 가지는 일반 배열을 나타낸다.
// 문자열만 가지는 배열
let fruit: string[] = ['Apple', 'Banana', 'Mango'];
// Or
let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];

// 숫자만 가지는 배열
let oneSeven: number[] = [1, 2, 3, 4, 5, 6, 7];
// Or
let oneToSeven: Array<number> = [1, 2, 3, 4, 5, 6, 7];

// 다중 타입(유니언 타입)
let array: (string | number)[] = ['Apple', 1, 2, 'Banana', 'Mango', 3];
// Or
let arrays: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3];

//배열이 가지는 항목의 값을 단언 할 수 없다면 any를 사용할 수 있다.
let someArr: any[] = [0, 1, {}, [], 'str', false];


//5. Tuple - 배열과 매우 유사하지만 정해진 타입의 고정된 길이(length)배열을 표현한다.
let tuple: [string, number];
tuple = ['a', 1];
tuple = ['a', 1, 2]; //소스에 3개 요소가 있지만, 대상에서 2개만 허용되서 Error

//단일 Tuple 타입으로 지정하여 사용법
let userId: number = 1234;
let userName: string = 'Seyoung';
let isValid: boolean = true;

let user: [number, string, boolean] = [1234, 'Seyoung', true];
console.log(user[0]); // 1234
console.log(user[1]); // 'Seyoung'
console.log(user[2]); // true


//6. Enum(열거형) - 숫자 혹은 문자열 값 집합에 이름을 부여할 수 있는 타입이다.(일정한 범위로 정해져 있는 경우 유용)
//기본적으로 0부터 시작하며 값은 1씩 증가한다.
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
console.log(Week.Mon); //1
console.log(Week.Tue); //2


//7. Any - 모든타입을 의미하며 일반적인 JS변수와 동일하게 어떤 타입의 값도 할당 할 수 있다.
let any: any = 123;
any = 'Hello world';
any = {};
any = null;
const list: any[] = [1, true, 'Anything!'];


//8. Unknown - Any와 같이 최상위 타입인 Unknown은 알 수 없는 타입을 의미한다.
//Any와 같이 Unknown에는 어떤 타입의 값도 할당할 수 있지만, Unknown을 다른 타입에는 할당 할 수 없다.
let A: any = 123;
let u: unknown = 123;

//=> Any와 Unknown의 차이점은???
let str1 : unknown = 'this is msg';
let num1 : number = 10;
num1 = str1; 
//num1은 number 타입이라 str1 대입 불가

let str2 : any = 'this is msg';
let num2 : number = 10;
num2 = str2;
//num2는 number 타입이지만 str2로 인해 봉인 해제 (대입가능)

// 결과 => 
// unknown은 무조건 타입을 좁혀서 사용해야 하는 의무가 있는 반면,
// any는 타입을 좁혀서 사용하지 않아도 되서 자유롭다는 차이점이 있다.
// 그래서 any보다는 unknown을 사용하는것이 좀 더 안전하게 코딩을 할 수 있는 방법이다.


//9. Object - 기본적으로 typeof연산자가 'object'로 반환하는 모든 타입을 나타낸다.
let obj: object = {};
let arr: object = [];
let func: object = function () {};
let nullValue: object = null;
let date: object = new Date();


//10. Null과 Undefined - 모든 타입의 하위 타입이며 각 타입에 할당 할 수 있고, 서로의 타입에도 할당이 가능하다.
let num3: number = undefined;
let str4: string = null;
let obj1: { a: 1, b: false } = undefined;
let arr1: any[] = null;
let und: undefined = null;
let nul: null = undefined;
let voi: void = null;


//11. Void - 일반적으로 값을 반환하지 않는 함수에서 사용한다.
// :void 위치는 함수가 반환 타입을 명시하는 곳이다.
function hello(msg: string): void {
  console.log(`Hello ${msg}`);
}
const hi: void = hello('world'); // Hello world
console.log(hi); // undefined


//12. Never - 절대 발생하지 않을 값이며 어떠한 타입도 적용할 수 없다.
// 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미한다.
function error(message: string): never {
  throw new Error(message);
}


//13. Union - 2개 이상의 타입을 허용하는 경우 |를 통해 타입을 구분한다.
let union: (string | number);
union = 'Hello type!';
union = 123;