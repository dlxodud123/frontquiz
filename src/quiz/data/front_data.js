export const frontTechnologyData = [
    {
        question : "자기소개",
        answer : ""
    }
    // {
    //     question: "프로그래밍이란?",
    //     answer: "컴퓨터에게 특정 작업을 수행하도록 명령하는 과정으로\n 알고리즘 설계, 코드작성, 디버깅 및 테스트를 포함"
    // },
    // {
    //     question: "브라우저의 렌더링 원리",
    //     answer: "HTML과 CSS를 해석하여 DOM과 CSSOM을 생성하고,\n 이를 결합해 렌더 트리를 만들고, 이를 기반으로 화면에 표시"
    // },
    // {
    //     question: "라이브러리란 개념",
    //     answer: "특정 기능을 수행하는 코드 모음으로,\n 개발자가 필요할 때 호출하여 가능"
    // },
    // {
    //     question: "프레임워크란 개념",
    //     answer: "애플리케이션 구조를 제공하여,\n특정 규칙을 따르도록 강제하며,\n 전체 애플리케이션 흐름을 관리"
    // },
    // {
    //     question: "주소창에 google.com을 입력하면 일어나는 일",
    //     answer: "DNS 조회를 통해 IP 주소를 찾고, 서버와 통신하여 받은\n HTML, CSS, JavaScript 등을 렌더링해 화면에 표시"
    // },
    // {
    //     question: "position(static) 개념",
    //     answer: "요소를 일반적인 문서 흐름에 따라 배치,\n 오프셋(top, right, bottom, left) 적용 불가능"
    // },
    // {
    //     question: "position(relative) 개념",
    //     answer: "static + 자신 기준으로 오프셋(top, right, bottom, left) 적용"
    // },
    // {
    //     question: "position(fixed) 개념",
    //     answer: "뷰포트를 기준으로 고정, 항상 같은 위치에 머물도록 지정"
    // },
    // {
    //     question: "position(sticky) 개념",
    //     answer: "스크롤을 통해 일정 스크롤구간에서는 relative처럼 동작하다,\n 설정된 임계점 이후에는 fixed로 동작한다."
    // },
    // {
    //     question: "position(absolute) 개념",
    //     answer: "요소를 일반적인 문서 흐름을 제거,\n가장 가까운 부모 요소나 조상 요소 기준으로 정확한 위치 지정"
    // },
    // {
    //     question: "API 개념",
    //     answer: "소프트웨어 간의 상호작용을 가능하게 하는 프로토콜로,\n 다양한 서비스나 기능을 사용할 수 있도록 도와주는 역할"
    // },
    // {
    //     question: "Rest API, Restful API 공통점",
    //     answer: "HTTP 프로토콜을 사용해, CRUD 작업을 수행하는 인터페이스 \n (GET = 기존 자원을 조회, POST = 새로운 자원을 생성, DELETE = 기존 자원을 삭제, PUT = 기존 자원을 수정)"
    // },
    // {
    //     question: "Rest API, Restful API 차이점",
    //     answer: "Rest API는 REST규칙을 준수하지 않을 수 도 있지만, \n Restful API는 REST규칙을 엄격히 준수해야한다 \n(Rest API > Restful API)"
    // },
    // {
    //     question: "REST 규칙",
    //     answer: "클라이언트와 서버는 독립적으로 존재, \n상호작용은 일관된 인터페이스를 통해 이루어져야한다"
    // },
    // {
    //     question: "AJAX 개념",
    //     answer: "자바스크립트를 통해 서버와 클라이언트가 비동기 방식으로\n데이터를 교환할 수 있는 통신기능"
    // },
    // {
    //     question: "OAuth 개념",
    //     answer: "인터넷 사용자가 비밀번호를 제공하지 않고,\n 웹사이트를 이용할 수 있도록 하는 프로토콜"
    // },
    // {
    //     question: "URI, URL 차이점",
    //     answer: "URI = 자원을 식별(포괄적인 개념)\n URL = 자원의 위치를 나타냄(https://www.naver.com)\n(URI > URL)"
    // },
    // {
    //     question: "CORS 개념",
    //     answer: "다른 출처의 리소스에 안전하게 접근할 수 있도록 돕는 역할\n(서버에서 사용)"
    // },
    // {
    //     question: "meta 개념 및 종류",
    //     answer: "메타 데이터의 줄임말 \n charset(문자 인코딩 정의) => UTF=8 \n name(메타데이터 종류 정의) => description | keyword \n viewport(반응형 웹 디자인을 위한 설정) => initial-scale=1.0"
    // },
    // {
    //     question: "PX, EM 정의",
    //     answer: "PX = 절대 단위로 고정된 픽셀 수로 나타낸다 \n EM = 상대 단위로 현재 요소의 글꼴 크기를 기준으로 정의"
    // },
    // {
    //     question: "반응형 웹의 3요소",
    //     answer: "유연한 레이아웃 = 유연한 단위를 사용하여,\n 다양한 화면 크기에 자동 조정 되도록 설정 \n\n 유연한 이미지 = max-width: 100%를 사용하여,\n 이미지가 부모 요소의 크기를 초과하지 않도록 설정 \n\n 미디어 쿼리 = @media 규칙을 사용하여,\n 다양한 디바이스에 맞게 스타일을 적용하는 역할"
    // },
    // {
    //     question: "CSS 적용 우선순위",
    //     answer: "1) HTML요소에 style속성에 직접 작성 (인라인 스타일) \n 2) ID를 선택하여 style 적용 (ID 선택자) \n 3) 클래스를 선택하여 style 적용 (클래스 선택자) \n 4) 태그를 선택하여 style 적용 (태그 선택자) \n 5) 유니버설(*)을 선택하여 style 적용 (유니버설 선택자) \n * !important를 사용하여 우선순위를 높일 수 있음 *"
    // },
    // {
    //     question: "브라우저 저장소(LocalStorage, SessionStorage, Cookie)의 차이점",
    //     answer: "LocalStorage = 영구적으로 보관 가능(자동 로그인) \n\n SessionStorage = 브라우저 종료시 삭제(비로그인 활동) \n\n Cookie = 만료일 설정 시 유지, 브라우저 종료시 삭제(팝업 창)"
    // },
    // {
    //     question: "null, undefined, undeclared, NaN 개념",
    //     answer: "null = 빈값 \n\n undefined = 정의(변수에 값을 할당)되지 않음 \n\n undeclared = 선언(변수를 만드는 것)되지 않음 \n\n NaN = 표현 불가능한 수치형 결과"
    // },
    // {
    //     question: "HTML 렌더링 중에 JavaScript가 실행되면 렌더링이 멈추는 이유",
    //     answer: "JavaScript에게 엔진 제어권을 넘겨서"
    // },
    // {
    //     question: "scope 개념 및 종류",
    //     answer: "프로그램에서 접근 가능한 범위를 정의 \n\n Global Scope (전역 스코프) = 프로그램 전체에서 접근 가능 \n\n Function Scope (함수 스코프) = 함수 내에서만 접근 가능 \n\n Block Scope (블록 스코프) = {} 묶인 블록 내에서만 접근 가능 \n\n Lexical Scope (어휘적 스코프) = 함수가 선언된 위치에 따라 접근 범위가 정해진다 \n\n Module Scope (모듈 스코프) = 각 모듈 파일이 독립적으로\n 범위를 가지도록 설정, 다른 모듈에서는 접근 불가능"
    // },
    // {
    //     question: "DOM 개념 및 종류",
    //     answer: "웹페이지의 구조와 요소를 트리 형태로 표현하는 객체 모델\n (JavaScript를 통한 API) \n\n Real DOM = 실제로 사용자에게 보여지는 DOM\n 업데이트 비용이 크고, UI변경이 느림 \n\n Virtual DOM = 변화가 있을때 효율적으로 처리하기 위한 기술 \n 빠른 렌더링, 효율적인 업데이트"
    // },
    // {
    //     question: "FLUX 개념",
    //     answer: "단방향 데이터 흐름을 통해 상태 관리를 단순화하고,\n 예측가능하게 도와주는 역할"
    // },
    // {
    //     question: "Reflow와 Repaint가 실행되는 시점",
    //     answer: "Reflow가 끝나고 Repaint가 실행된다"
    // },
];

export const frontTechnologyHtmlData = [
    {
        question: "DOCTYPE의 기능",
        answer: "HTML의 문서 유형을 선언하는 데 사용하며,\n 렌더링하도록 돕는 역할"
    },
    {
        question: "data- 속성",
        answer: "HTML에서 데이터를 저장하고,\n JavaScript로 쉽게 접근하기 위한 속성"
    },
    {
        question: "시맨틱 태그의 정의와 예시",
        answer: "코드의 가독성을 높이는 역할을 한다.\n <header>, <nav>, <article>, <section>, <footer>"
    },
    {
        question: "<script>, <script async>, <script defer>의 차이점",
        answer: "<script> : HTML 파싱 중단\n\n<script async> : HTML파싱과 스크립트 다운로드 병렬 실행,\n 다운로드 완료 시 HTML파싱을 멈추고 스크립트 실행\n\n<script defer> : HTML파싱과 스크립트 다운로드 병렬 실행,\n HTML파싱이 끝난 후 스크립트 실행"
    },
    {
        question: "HTML에서 빈 요소(empty elements)",
        answer: "내용이 없는 HTML 태그로, 닫는 태그를 갖지 않는다.\n<img>, <input>, <br>, <hr>, <meta>, <link>"
    },
    {
        question: "프로그레시브 렌더링(Progressive Rendering) 정의",
        answer: "페이지를 점진적으로 로드하여,\n 사용자에게 더 빠르게 콘텐츠를 제공하고, 로딩 경험을 개선\n\nex) 이미지 로딩(저해상도 -> 고해상도), \n웹 페이지(텍스트는 먼저 보여주고, 이미지나 큰 사진 같은 건\n 나중에 점차적으로 로드하면서 페이지가 점점 더 완성)"
    },
    {
        question: "script 태그는 어떤 위치에 와야하나요?",
        answer: "어떤 위치에나 배치할 수 있지만,\n최적의 위치는 </body>바로전에 배치.\n<head>에 배치할 경우, async나 defer 속성을 사용."
    },
]

export const frontTechnologyCssData = [
    {
        question: "Margin & Padding 정의",
        answer: "Margin : 외부 여백\nPadding : 내부 여백"
    },
    {
        question: "CSS 선택자의 우선순위와 동작방식",
        answer: "1) 인라인 스타일 : <div style=\"color: red;\" />\n2) ID선택자 : #ID명\n3) 클래스 선택자 : .클래스명 \n4) 태그 & 유니버설 선택자 : div & *\n *!important를 사용해서 우선순위를 높일 수 있음"
    },
    {
        question: "z-index와 스택 문맥이 형성되는 방식",
        answer: "z-index는 스택 문맥 내에서 요소들의 쌓임 순서를 결정\nposition, opacity, transform 등을 통해 쌓임 맥락 형성"
    },
    {
        question: "BFC(Block Formatting Context)와 동작원리",
        answer: "요소들이 어떻게 배치되고 정렬되는지 결정하는 영역으로,\n외부와 겹치지 않도록 배치한다.(독립적 영역)\noverflow: hidden, float, display 속성을 사용하면 BFC가 동작"
    },
    {
        question: "브라우저 별 스타일링 문제를 해결하는 방식",
        answer: "각 부라우저 별 CSS를 해석하고, 렌더링하는 방식이 다르다.\nCSS 리셋(normalize.css or reset.css / 일관된 스타일로 시작)\n벤더 프리픽스(-webkit-, -moz-, -ms- / 호환성 문제 해결)"
    },
    {
        question: "CSS 전처리기(SCSS)를 사용하는 장단점",
        answer: "코드의 재사용성과 유지보수성을 높이는 장점이 있지만,\n빌드 과정이 필요한 단점이 있다.\n\n빌드 과정) Sass를 설치 - scss파일 생성 - 코드 작성 - \nsass 파일 명.scss 파일 명.css 입력"
    },
    {
        question: "브라우저가 CSS 선택자와 일치하는 요소를 어떻게\n 결정하는가?",
        answer: "CSSOM 트리에서 스타일 규칙을 탐색하여,\n 우선순위에 따라 DOM에 적용"
    },
    {
        question: "가상 요소(pseudo-elements) 선택자의 정의와 용도",
        answer: "HTML구조를 변경하지 않고 스타일만으로 구조를 변경 가능\n::before, ::after, ::first-letter, ::first-line"
    },
    {
        question: "효율적인 CSS를 작성하기 위한 주의점",
        answer: "중복 제거, 미디어 쿼리 활용, \n클래스 선택자 사용(id는 고유하지만 충돌을 완전히 방지 못함,\n 태그 선택자는 너무 일반적)"
    },
    {
        question: "박스 모델에 대한 이해",
        answer: "HTML요소가 화면에 어떻게 배치되는지에 대한 개념\nMargin > Border > Padding > Content로 구성"
    },
    {
        question: "리셋(reset)과 정규화(normalizing) CSS의 차이점",
        answer: "리셋 CSS : 스타일을 완전히 초기화, 제로 상태에서 시작\n정규화 CSS : 기본 스타일을 유지, 브라우저 간의 차이 최소화\n\n리셋 CSS = universal reset\n정규화 CSS = Normalize.css\n\n브라우저 간 스타일 차이 해결이 가장 큰 목적이다.\n일관성이나 스타일 초기화를 위해도 사용 가능"
    },
    {
        question: "시각적으로 컨텐츠를 숨기는 다양한 방법과\n 이를 스크린 리더기(시각 장애)에서만 사용 가능하게 하는 방법",
        answer: "visibility: hidden, display: none,  opacity: 0\n\nposition: absolute, clip, aria-hidden"
    },
    {
        question: "스크린 외에 다른 @media 속성의 예시",
        answer: "print : 인쇄용 스타일 적용\nspeech : 화면 리더기와 같은 음성 출력 장치용"
    },
    {
        question: "id와 class의 차이점",
        answer: "id : 유일해야 한다, class : 여러 번 사용 가능\nid : 우선순위 높음, class : 우선순위 낮음"
    },
    {
        question: "스프라이트 이미지(Sprite Image)란?",
        answer: "이미지를 하나의 파일로 모아 저장해, 로딩속도를 최적화\nbackground-position 속성의 px값을 사용해 이미지 선택"
    },
    {
        question: "CSS와 SASS(SCSS) 차이점",
        answer: "더 복잡한 스타일링을 간단하게 처리할 수 있다. \n 1) 조건문 사용 가능 \n 2) 스타일을 중첩할 수 있다. \n 3) $(달러)표시를 통해 변수 생성 가능 \n 4) @(앳)mixin이라는 기능으로 @include를 통해 재사용 가능 \n 5) 단순 계산 기능 \n6) @extend를 통해 상속 기능"
    },
]

export const frontTechnologyJavascriptData = [
    {
        question: "클로저(Closure) 정의와 사용방식",
        answer: "함수 내부에 저장된 변수를 외부에서 접근할 수 없지만,\n 클로저를 통해 변수에 접근 및 변경할 수 있도록 도와주는 역할\n\n외부 함수 정의 -> 그 안에 내부 함수 작성 -> \n외부 함수가 종료돼도, 내부 함수는 외부 변수의 참조 유지 ->\n외부 함수는 내부 함수를 반환하여, 외부에서 호출 가능"
    },
    {
        question: "이벤트 위임 정의와 동작방식",
        answer: "자식 요소가 발생한 이벤트를 부모 요소가 처리\n\n부모 요소에 이벤트 리스너 설정 -> \nevent.target을 통해 자식 요소에서 발생한 이벤트를 확인 -> 부모 요소에서 해당 event를 처리"
    },
    {
        question: "프로토타입 상속",
        answer: "자식 객체가 부모 객체의 변수와 메서드를 상속받는 방식"
    },
    {
        question: "이벤트 버블링 정의",
        answer: "자식 요소에 발생한 이벤트를 부모 요소로 전파하여 처리\n자식 요소 출력 -> 부모 요소 출력"
    },
    {
        question: "이벤트 캡처링 정의",
        answer: "부모 요소에 발생한 이벤트를 자식 요소로 전파하여 처리\n{ capture: true } 사용\n부모 요소 출력 -> 자식 요소 출력"
    },
    {
        question: "JavaScript에서 동일 출처 정책",
        answer: "보안을 위해 다른 출처의 리소스 접근을 제한한다\n프로토콜, 도메인, 포트가 동일한 출처만 허용한다"
    },
    {
        question: "동기 및 비동기 함수의 차이",
        answer: "동기 : 작업이 순차적으로 실행, 이전 작업이 완료되어야 한다\n비동기 : 작업이 동시에 실행, 이전 작업 여부와 관계없다"
    },
    {
        question: "이벤트 루프 정의",
        answer: "비동기 작업을 처리하고 관리\n예) setTimeout()"
    },
    {
        question: "콜 스택과 태스크 큐의 정의 및 차이점",
        answer: "콜 스택 : 동기적인 함수들이 실행되는 순서\n태스크 큐 : 비동기 함수는 대기, 콜 스택이 비어있으면 실행"
    },
    {
        question: "실행컨텍스트 정의",
        answer: "코드 실행 및 함수 생성할 때 생성되고, 실행이 끝나면 제거"
    },
    {
        question: "this 정의",
        answer: "함수가 호출되는 방식에 따라 동적으로 결정되며,\n주로 현재 실행 중인 객체를 참조"
    },
    {
        question: "가비지 콜렉터 정의와 동작방식",
        answer: "사용되지 않는 메모리를 자동으로 해제하여, 메모리 누수 방지\n\n마크 앤 스윕(참조되지 않는 객체를 찾아서 제거) 방식"
    },
    {
        question: "Promise 정의와 사용 예시",
        answer: "비동기 작업의 결과를 표현하는 객체\n\n내부 성공 시 : resolve(), 내부 실패 시 : reject(),\n외부 성공 시 : .then, 외부 실패 시 : .catch"
    },
    {
        question: "async/awiat란?",
        answer: "async : 함수를 비동기 함수로 만들어 Promise를 반환\nawait : Promise가 해결될 때까지 기다리고, 결과를 반환"
    },
    {
        question: "Javascript는 어떤 언어이고, 어떤 특징이 있나요?",
        answer: "동적이고 비동기적이며, 객체지향을 지원하는 언어\n클라이언트-서버 간의 통신을 처리"
    },
    {
        question: "자바스크립트 엔진이 코드를 실행하는 과정",
        answer: "파싱, 컴파일, 실행 과정을 거쳐 코드를 실행한다.\n\n파싱 : 코드를 분석하여 구조화된 구문 트리를 생성\n컴파일 : 코드를 기계가 이해할 수 있는 형태로 변환\n실행 : 컴파일된 코드를 실행"
    },
    {
        question: "원시값과 참조값의 차이점을 메모리 관점에서 설명하라",
        answer: "원시값 : 값 자체가 변수에 저장, 값을 복사하면 서로 독립적\n참조값 : 메모리 주소가 변수에 저장, 값을 복사하면 영향 끼침\n\n원시값 = 숫자, 문자열, boolean\n참조값 = 객체, 배열, 함수"
    },
    {
        question: "e.target와 e.currentTarget의 차이점",
        answer: "e.target : 이벤트가 발생한 요소 참조\ne.currentTarget : 이벤트가 바인딩된 요소 참조"
    },
    {
        question: "var, let, const로 생성된 변수의 차이점",
        answer: "var = 재선언 o, 재할당 o \n let = 재선언 x, 재할당 o \n const = 재선언 x, 재할당 x \n(var는 function scope개념 / let, const는 block scope 개념)"
    },
    {
        question: "Array.forEach() 루프와 Array.map() 메서드의 \n주요한 차이점 및 선택 시점",
        answer: "forEach : 반환값이 없고, 원본 변경 가능, 순수하게 반복 작업\nmap : 반환값이 있고, 원본 변경 불가능, 배열 요소를 반환"
    },
    {
        question: "Function.call과 Function.apply의 차이점",
        answer: "call : 인수를 ,(쉼표)로 구분하여 전달\n apply : 인수를 [](배열)로 묶어서 전달"
    },
    {
        question: "Function.prototype.bind 이란?",
        answer: "this 값을 미리 지정하고, 새로운 함수를 만들어주는 메서드"
    },
    {
        question: "IIFE 정의",
        answer: "정의하자마자 즉시 실행되는 함수 표현식\n\n사용 방법 : (function(){})();"
    },
    {
        question: "Spread Syntax의 정의 및 이점과 주의해야할 점은?",
        answer: "배열을 복사하여 결합하는 역할(...arr)\n\n가독성이 좋고, 코드가 간결하다.\n\n대용량 시 성능 이슈, 얕은 복사만 지원\n\n얕은 복사 : 1차원적인 값만 복사하고, 중첩될 경우 참조만 복사"
    },
    {
        question: "ES6 문법에 추가된 것들은?",
        answer: "let, const, 화살표 함수(arrow function),\n모듈(import, export), promise, Async/Await, Map/Set"
    },
    {
        question: "자바스크립트에서 이벤트 바인딩의 정의와\n 이벤트 바인딩의 방법들",
        answer: "이벤트가 발생했을 때 실행될 동작을 정의하는 과정\n\n1) HTML 속성에 직접 바인딩\n2) addEventListener 메서드를 사용한 바인딩\n3) 이벤트 위임"
    },
    {
        question: "익명 함수의 사용 사례",
        answer: "이름 없이 정의된 일회성 함수(const asdf = function(){};)\n\n일회성 작업, 콜백 함수, 즉시 실행 함수(IIFE)"
    },
    {
        question: "호스트 객체와 네이티브 객체의 차이점",
        answer: "호스트 객체 : 호스트 환경에서 제공하는 객체,\nwindow, document 객체 사용\n\n네이티브 객체 : 자바스크립트 내장 객체,\nArray, Object, String, Math 객체 사용"
    },
    {
        question: "var test = Test(), var test = new Test()의 차이점",
        answer: "Test() : 일반 함수를 호출\n\nnew Test() : 생성자 함수를 호출"
    },
    {
        question: "타입강제 변환의 정의와 타입강제 변환 시 주의할 점",
        answer: "자동으로 변수의 타입을 다른 타입으로 변환\n\n\"==\"를 사용하면, 예상치 못한 결과를 초래할 수 있다.\nnull과 undefined는 \"===\"로 비교해야 한다."
    },
    {
        question: "속성과 프로퍼티의 차이점",
        answer: "속성 : HTML 태그의 초기값, .getAttribute()로 접근\n프로퍼티 : HTML 태그의 현재값, .value로 접근"
    },
    {
        question: "가변 및 불변 객체의 차이점",
        answer: "가변 = 변경 가능, 객체 및 배열\n\n불변 = 변경 불가, Object.freeze()"
    },
    {
        question: "JavaScript에서 불변 객체의 예시",
        answer: "Object.freeze(), 문자열(String)"
    },
    {
        question: "불변성의 장단점",
        answer: "장점 : 안정성, 예측 가능성 증가(버그 가능성 감소)\n\n단점 : 메모리 사용 증가, 비용 증가"
    },
    {
        question: "고차함수 정의",
        answer: "다른 함수를 인수로 받거나, 함수를 반환하는 함수"
    },
    {
        question: "import, require 차이점",
        answer: "import = 정적으로 모듈을 불러오며, 파일 상단에 위치하고,\n ES6 시스템에서 사용\n\nrequire = 동적으로 모듈을 불러오며, 실행 시점에 가져오고,\n CommonJS 시스템에서 사용"
    },
    {
        question: "==와 ===의 차이점",
        answer: "== : 값만 비교하며, 필요하면 형 변환을 수행\n\n=== : 값과 데이터 타입까지 비교하며, 형 변환을 하지 않는다"
    },
    {
        question: "삼항 연산자를 '삼항'이라고 부르는 이유",
        answer: "세 개의 피연산자를 사용했기 때문에\n\n1) 조건 2) 조건이 참일 때 3) 조건이 거짓일 때"
    },
    {
        question: "JavaScript 코드를 디버깅하는 데 사용하는 도구 및 기술",
        answer: "도구 : 개발자 도구, IDE 편집기\n\n기술 : console 메서드, debugger 키워드"
    },
    {
        question: "ES5문법과 ES6문법의 가장 큰 차이점은?",
        answer: "ES5 문법 : var사용, function사용\n\nES6 문법 : let과 const 사용, 화살표(=>) 사용"
    },
    {
        question: "ES6 클래스와 ES5 함수 생성자의 차이점",
        answer: "ES6 클래스 : class와 constructor 사용\nextends와 super을 사용해 상속\n\nES5 함수 : function을 사용하고, prototype 통해 메서드 추가\nprototype과 call()/apply()을 사용해 상속"
    },
    {
        question: "ES6 기준 JavaScript의 데이터 타입은?",
        answer: "String, Number, Boolean, Object"
    },
    {
        question: "호이스팅(hoisting) 개념",
        answer: "변수 및 함수 선언문이 스코프 내의 최상단으로 끌어올려 진다.\n(변수를 선언하기 전에도 사용할 수 있어 유연성이 올라간다)"
    },
    {
        question: "콜백함수 정의",
        answer: "다른 함수의 인수로 전달되어 실행되는 함수입니다."
    },
    {
        question: "Javascript에서 falsy란?",
        answer: "false로 평가되는 값을 의미한다.\n\nfalse, 0, \"\", null, undefined, NaN"
    },
    {
        question: "인수와 인자의 차이점",
        answer: "인수 : 함수를 호출할 때 전달되는 값\n\n인자 : 함수를 생성할 때 전달되는 값"
    },
]

export const frontTechnologyReactData = [
    {
        question: "React의 특징은?",
        answer: "1) 컴포넌트 기반이므로 재사용이 편리하다 \n2) 유지보수가 용이하다 \n3) 가상 DOM을 사용하여 효율성이 증가한다 \n4) SPA(Single Page Application)로 필요한 부분만 업데이트,\n 사용자가 더 빠르고 매끄럽게 이용 가능하다"
    },
    {
        question: "React는 라이브러리인가 프레임워크인가?",
        answer: "JavaScript의 라이브러리입니다."
    },
    {
        question: "가상돔(Virtual DOM)의 정의와 동작방식",
        answer: "UI 업데이트를 효율적으로 관리한다\n가상 DOM을 생성하면, 이전과 비교해서 변경된 부분만 반영"
    },
    {
        question: "React에서 컴포넌트란?",
        answer: "재사용 가능한 단위로, 유지보수성을 높여주는 요소"
    },
    {
        question: "클래스형 컴포넌트 VS 함수형 컴포넌트",
        answer: "함수형 컴포넌트는 훅을 통해 상태와 생명주기를 쉽게 관리,\n 따라서 최신 React에서는 함수형 컴포넌트 권장"
    },
    {
        question: "컴포넌트 라이프 사이클",
        answer: "마운트, 업데이트, 언마운트로 나뉜다.\n클래스형은 메서드, 함수형은 useEffect로 관리한다."
    },
    {
        question: "상태관리 정의와 상태관리가 필요한 이유",
        answer: "동적으로 변하는 데이터를 효율적으로 저장 및 업데이트.\n데이터 흐름을 일관성 있게 유지.\nuseState를 사용"
    },
    {
        question: "React Hook이란?",
        answer: "상태와 생명주기 등을 관리 해주는 함수이다.\nuseState, useEffect, useContext 등"
    },
    {
        question: "props와 state의 정의",
        answer: "props = 읽기 전용이며, 부모 컴포넌트에서만 전달 가능하다.\n\n state = setState를 통해 변경 가능하다."
    },
    {
        question: "React에서 State의 불변성을 유지해야하는 이유",
        answer: "1) 변화가 있을 때, 효율적으로 변경 가능\n2) 예측 가능성 증가"
    },
    {
        question: "React에서의 성능최적화 방법",
        answer: "1) React.memo(동일한 props로 재렌더링 방지)\n2) useCallback(불필요한 함수 재생성을 방지)\n3) useMemo(값이 변하지 않으면 재계산을 방지)"
    },
    {
        question: "바닐라 자바스크립트 대신 React를 사용하는 이유",
        answer: "컴포넌트 기반 구조, 가상 DOM으로 대규모 프로젝트에 효율"
    },
    {
        question: "useState 정의",
        answer: "컴포넌트의 상태(state)를 선언하고 관리하는 Hook"
    },
    {
        question: "useEffect 정의",
        answer: "렌더링 후 특정 작업을 처리하는 Hook"
    },
    {
        question: "useRef 정의",
        answer: "값이 변경되더라도 렌더링 없이 값을 저장하고 참조하는 Hook"
    },
    {
        question: "useState의 useRef 차이점",
        answer: "useState : 값이 변경되면 컴포넌트가 리렌더링된다\nuseRef : 값이 변경되어도 컴포넌트가 리렌더링되지 않는다"
    },
    {
        question: "useMemo와 useCallback이란?",
        answer: "useMemo : 계산된 값을 저장, 값이 변경될 때만 다시 계산\nuseCallback : 함수를 저장, 의존성이 변경될 때만 새로 생성"
    },
    {
        question: "컴포넌트 리스트(반복문) 구현 시 각 컴포넌트에 대한 id(key) 값을 설정해야하는 이유",
        answer: "변경된 항목만 리렌더링(성능 최적화), DOM 접근에 용이"
    },
    {
        question: "Props Drilling의 정의와 이를 해결하는 방법은?",
        answer: "컴포넌트 사이에서 props로 데이터를 저장하지 않고,\n 계속 전달해야 하는 상황\n\nContext API로 전역 상태를 관리"
    },
    {
        question: "JSX의 정의",
        answer: "JavaScript 안에서 HTML을 작성할 수 있게 해주는 문법 확장\nreturn() 사용"
    },
    {
        question: "리액트에서 JSX 를 사용시 장점",
        answer: "직관적이며, 재사용이 용이하다."
    },
    {
        question: "리액트에서는 가상 돔의 변경점을 어떻게 포착할까?",
        answer: "useState 상태 변경, useEffect 의존성 배열 변경\n두가지를 통해 리렌더링 된다."
    },
    {
        question: "Context API를 상태관리 라이브러리처럼 사용할 수 있을까?",
        answer: "Context API는 createContext로 Context를 생성한 뒤,\n .Provider를 통해 값을 저장하고,\n 애플리케이션 전체에 상태를 제공하여 상태 관리를 한다"
    },
    {
        question: "Redux는 무엇이고 왜 사용하나요?",
        answer: "애플리케이션의 상태를 중앙에서 관리하는 라이브러리.\n상태를 예측하고, 효율적으로 관리하며, 데이터 흐름을 단순화"
    },
]

export const frontTechnologyTypescriptData = [
    {
        question: "타입스크립트 정의",
        answer: "자바스크립트에 정적 타입 검사를 추가한 프로그래밍 언어"
    },
    {
        question: "타입스크립트 사용 이유",
        answer: "변수의 타입 명시를 강제함으로써, 오류를 사전에 예방"
    },
]

export const frontPortfolioData = [
    {
        question: "1분 자기소개",
        answer: "안녕하십니까. 저는 새로운 변화가 생길 때마다 배우고 성장하는 지원자 이태영입니다.\n처음에는 백엔드 개발을 배우며 서버와 데이터베이스 관리의 기본기를 쌓았지만, 사용자가 직접 경험하는 프론트엔드에 더욱 흥미를 느끼게 되었습니다.\n그래서 프론트엔드로 전환하게 되었고, 학원에서 HTML, CSS, JavaScript를 체계적으로 학습하며 사용자 인터페이스 구현에 대한 실력을 다졌습니다.\n하지만 여기서 멈추지 않고, React에 흥미를 느껴 별도의 강의를 통해 독학으로 학습을 이어갔습니다.\n이러한 과정에서 최신 기술과 트렌드를 빠르게 습득하며 끊임없이 성장해왔습니다.\n저는 이러한 경험을 바탕으로 회사에서도 새로운 기술과 변화에 적응하며 배우고 성장하는 자세로 임하겠습니다."
    },
    {
        question: "우리 회사가 당신을 채용해야하는 이유는",
        answer: "새로운 기술과 변화에 빠르게 적응하며 성장할 수 있는 부분이 가장 큰 이유라고 생각합니다.\n이러한 저의 배우려는 자세와 성장 마인드는 회사의 지속적인 발전에 큰 도움이 될 것입니다."
    },
    {
        question: "비전공자인데 왜 여기로 왔는지",
        answer: "저는 고등학생때 수학과 논리적인 사고를 통해 문제를 해결하는 것을 좋아해서, 이과에서 취업이 기계공학과가 가장 잘 된다고 해서 해당 학과를 선택했습니다.\n기계공학과가 결과물을 시각적으로 확인하는것에 대해서는 한계가 있었고, 결과물에 대해서도 흥미가 없었습니다.\n그래서 논리적인 사고를 바탕으로 하는 직업을 찾다가, 지인분의 추천으로 개발자라는 직업을 추천받아 공부하게 되었습니다."
    },
    {
        question: "왜 백엔드 하다가 프론트로 갔는지",
        answer: "처음에는 두 분야다 접해본 경험이 없어서, 처음에는 추천을 받아서 백엔드 분야를 공부하게 되었습니다.\n백엔드에서 데이터를 관리하고 서버 로직을 구현하는 작업도 매력적이었지만, 프론트엔드의 UI/UX 구현과 웹페이지 기본 구조를 만들고, \n그 결과물을 즉각적으로 확인할 수 있는 부분에서 더 큰 매력을 느꼈습니다."
    },
    {
        question: "장 단점",
        answer: "저는 협력과 소통을 중요시하는 것이 장점입니다. 프로젝트를 진행할 때 팀원과의 의사소통을 중요하게 생각하며, 최선의 해결책을 찾으려고 노력합니다. \n한 프로젝트에서는 같은 페이지의 백엔드 개발자와 데이터 관련 문제(JSON 파싱)를 해결한 경험이 있으며,\n프론트엔드 개발자들과 스타일 관련 문제(전역 스타일 충돌) 해결에도 기여했습니다.\n 이러한 경험을 통해 문제 해결 능력도 향상되었습니다.\n\n\n또한, 저는 한 가지 일에 몰두할 때 집중력이 뛰어나지만, 여러 가지를 동시에 처리하는 데는 처음에 어려움을 겪는 경우가 있습니다.\n 그러나 익숙해지면 문제없이 잘 해결해 나갈 수 있습니다."
    },
    {
        question: "위기, 극복 방법",
        answer: "저는 react를 처음 독학할 때 어디서부터, 어떻게 해야할지 몰라서 일단 강의를 들었습니다.\nhtml, css, javascript를 공부할때는 학원에서 설명도 자세히 해주시고, 모르는 부분이 있으면 질문할수 있고, 사용 예시도 설명해주시다 보니까 편했다.\n근데 react를 사용하고싶어서 강의를 구매해 듣고있는데, 일단 궁금한부분이 있어도 질문할수도 없었고, 리액트의 장점을 활용하지 못할까봐 걱정이였다.\n그래서 일단 구글 검색이나 w3school 및 강의를 통해 필기한 자료를 통해 찾아보면서 프로젝트를 진행하였습니다.\n처음에는 변수를 선언하고 관리하려고 객체나 클래스를 통해 코드르 구현했습니다.\n필기자료를 통해 useState를 사용하여 간결하고 효율적으로 코드를 구현했습니다.\n또한 useEffect를 통해 컴포넌트가 마운트, 언마운트, 업데이트 될 때 특정 작업을 수행하게 도와주고,\nreact는 SPA(single page application)이므로 컴포넌트 간에 데이터를 props를 통해 데이터 전달을 편리하게 할 수 있었고,\nContextAPI를 통해 전역 상태 관리 및 데이터 공유가 가능했다."
    },
    {
        question: "궁금한점",
        answer: "팀의 규모, 만약 프로젝트를 시작하면 내가 맡은 파트, 아까 대답하지 못한부분 다시 질문"
    },
    {
        question: "마지막 말",
        answer: "제가 경력있으신 개발자 분들이랑 대화를 해볼 경험이 없었는데, 제가 면접에서 합격하지 않더라도 많은 부분을 배워갈 수 있어서 너무 좋은 시간이였습니다.\n감사합니다."
    },
    {
        question: "무슨 회사인지",
        answer: "회사에 맞게"
    },
    {
        question: "지원 동기",
        answer: "회사에 맞게"
    },
];










// export const frontCompanyData = [
//     {
//         question: "질문",
//         answer: "답답"
//     },
// ];