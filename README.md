# axios
  - 브라우저나 Node.js에서 사용 가능한 HTTP 클라이언트 라이브러리
  - Get, Post 등의 메서드들을 쉬운 방법으로 사용할 수 있다.

```
yarn add axios
```

# JSON PlaceHolder
  - 몇 가지 REST API를 테스트할 수 있는 END POINT를 무료로 제공하고 있다.
  - 이 서비스로 Posts를 관리하는 것을 실습해볼 것.

# useReducer
  - useReducer의 prop으로 reducer 함수와 초기 상태를 넣어 사용한다.
  - useState와 유사하지만 update할 항목을 내부 로직으로 바꿔줄 수 있다는 점에서 다르다.
  - useState: setState를 통해 현재의 State를 변환
  - useReducer: 다양한 로직이 들어간 reducer 함수를 이용해 현재의 State를 변환
! async await를 통한 네트워크 호출을 할 수 없다. 상태만을 관리하며 순수해야하기 때문... 

! 컴포넌트는 최대한 순수할 수록 좋다.
1. 사이드 이펙트(버그)를 걱정하지 않아도 된다.
2. 확장에 유연하다.
 > 사이드 이펙트 제어를 위한 코드가 불필요해지기 때문
3. 테스트가 쉽다.