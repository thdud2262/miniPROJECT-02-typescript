// object
// 타입스크립트는 <구조적 타입시스템>을 따른다 
// 객체의 타입을 정의할 때 프로퍼티를 기준으로 객체의 구조를 정의하는 것을 뜻함

// object로 타입을 지정하면 '객체'라는 정보만 줄 뿐,
// 프로퍼티의 타입을 설정해 주지 않아 에러가 발생한다.
// let user: object = { id: 1, name: "정소영" };

// 옵셔널 프로퍼티 ?: 있어도 되고, 없어도 되는 선택적 프로퍼티가 된다

let user: { id?: number; name: string } = {
  id: 1,
  name: "정소영",
};
user.id;

user = {
  name: "홍길동",
};

// readonly : 프로퍼티의 값을 바꾸는 행위를 막아준다
// 값을 수정하면 안되는 프로퍼티의 타입에 추가해주면 된다
let config: { readonly apiKey: string } = {
  apiKey: "MY API KEY",
};
