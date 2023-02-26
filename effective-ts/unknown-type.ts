// {}, object, unknown 타입 차이점 비교
// {} 는 null, undefined를 뺀 모든 값, object는 non-primitive 값

const a: {} = "a"; // 정상
const b: {} = null; // 에러

const c: object = "foo"; // 에러
const d: object = null; // 에러

const un: unknown = null; // 정상
