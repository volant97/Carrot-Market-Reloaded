# Carrot Market Reloaded

## Project Version

### 2024.07.15

#### 3.0

- Next 설치 및 초기 세팅

#### 3.1

- Tailwind 테스트

#### 3.2

- Card Component 제작 테스트

### 2024.07.17

#### 3.3

- Modifiers : 다크모드 구현 테스트

#### 3.4.1

- Tailwind Variables : input, button 구현 테스트
  - 커밋 정정

#### 3.5

- Responsive Modifiers : 반응형 CSS 구현 테스트

#### 3.6

- Form Modifiers : 그라디언트, 유효성검사 CSS 구현 테스트

### 2024.07.22

#### 3.7

- State Modifiers : class 선택, 가상 class

#### 3.8

- Lists and Animations : 리스트 선택, 애니메이션

#### 3.9

- Group Modifiers : 그룹 선택

#### 3.10

- JIT(Just In Time compiler) : Tailwind 이해, theme extend

#### 3.11

- Directives : global css apply, layer base, layer utilities, layer components

### 2024.07.23

#### 3.12

- Plugins : tailwind plugin 작동방식
- daisyUI 설치
- tailwindcss forms 설치

#### 3.13

- Conclusions

#### 4.0

- Home Screen : Home page 제작

#### 4.1

- Create Account Screen : 회원등록 page 제작
- heroicons 설치

#### 4.2

- Form Components : form input, form btn 컴포넌트 제작

#### 4.3

- Log in Screen : 로그인 page, 전화번호 로그인 page 제작

#### 5.0

- Route Handlers : 과거의 API 통신 방법 (API route handler를 활용한 API route 구축)

#### 5.1

- Server Actions : 현재의 API 통신 방법 (NextJS Server Actions를 활용한 API 통신)

#### 5.2

- useFormStatus : pending을 활용하여 로딩중 구현

#### 5.3

- useFormState : use client와 server 분리, prevState 할당, error 핸들링

#### 5.3.1

- useFormState 오류 수정, prevState에 null 할당

### 2024.07.30

#### 5.4

- Recap

#### 6.0

- Zod 설치

#### 6.0.1

- Introduction to Zod : Schema 생성 및 적용

#### 6.1

- Validation Errors : formSchema 생성 및 적용
  - parse와 safeParse의 차이점
  - flatten() : result.error를 바로 return하면 정보가 너무 많다. flatten을 통해 간결하게 결과를 출력할 수 있다. 개별 input에 접근하기도 쉽다.

#### 6.2

- Refinement : field에 고유한 validator 생성
  - refine()
  - formErrors를 fieldErrors으로 할당하기

### 2024.07.31

#### 6.3

- Transformation
  - regex() : 정규식
  - toLowerCase() : 모두 소문자로 변환
  - trim() : 앞뒤 공백 제거
  - transform() : 값을 변경

#### 6.4

- Refactor
  - input 태그 기능 (attribute)
    - pattern : 정규표현식(regex)
    - min, max : number element일때
    - minLength, maxLength : string element일때
  - input의 attribute를 props로 내리기
    - ...rest : 모든 props를 하나로 정리
    - 간단한 유효성 검사는 Zod를 사용하지 않고 input attribute로 가능
  - input 컴포넌트를 더 확장성 있고, 커스텀 가능하게 함

#### 6.5

- Recap

#### 6.6

- Log In Validation

#### 6.7

- Validator 설치 (Zod와 같이 사용하면 좋다.)

#### 6.7.1

- Validator type 설치

#### 6.7.2

- Coerce
  - Schema에서 coerce 사용하여 number()로 변환 (강제로 변환)
    - transform() : 값 변환
    - coerce : 타입 강제 변환

#### 6.8

- refine 사용시 동일한 표현 예시

#### 6.8.1

- SMS Validation
  - validator.isMobilePhone : 두번째 인자에 국가별 코드 입력 가능
  - action의 prevState 사용
  - phone, token 개별 Schema 작성 및 적용
  - error 처리

### 2024.08.01

#### 6.9

- Recap

### 2024.08.05

#### 7.0

- Prisma Setup

#### 7.0.1

- Prisma init
  - npx prisma init
  - .gitignore
    - .ent
  - schema.prisma 수정

#### 7.1

- Schemas
  - Schemas 작성
  - npx prisma migrate dev
    - migrations / add_user / migration.sql
  - .gitignore
    - .db
    - .db-journal
  - migration 오류
    - 20240805063828_add_user
      - 누락된 부분 존재해서 다시 migration 진행
      - 해당 폴더 삭제 여부 체크

#### 7.2

- Prisma Client
  - data 추가 및 검색
  - migration 오류 해결
    - 잘못 생성한 폴더 삭제

#### 7.3

- Prisma Studio

  - npx prisma studio

#### 7.4

- Relationships
  - 릴레이션 자동완성 방법
    - 플러그인 prisma 다운
    - cmd + shift + p로 JSON settings 파일을 열고
    - "[prisma]": {"editor.defaultFormatter": "Prisma.prisma"}
    - 추가하면 save시 릴레이션 자동완성
  - migration 오류 해결
    - 잘못 생성한 폴더 삭제한 부분 때문에 이후 migration이 안됨
    - 다시 파일 복원 후 해결

#### 7.4.1

- Relationships
  - SMSToken 작성중

#### 7.4.2

- Relationships
  - SMSToken : token 생성

#### 7.4.3

- Relationships
  - SMSToken : findUnique
    - include를 써야지만 연결한 값의 데이터(user)가 출력된다.
    - 기본값으로는 출력 안됨

#### 7.5.1

- onDelete
  - Cascade : 참조 레코드(관계된 data)가 삭제되면 같이 삭제
  - SetNull : 참조 레코드가 삭제되면 참조 필드(옵션 작성하는 data)가 Null로 설정
    - optional일 때만 정상 작동
    - 1:1 채팅 시 유저가 삭제되어도 대화 로그 유지
    - 삭제된 유저는 '존재하지 않는 유저'로 표기 가능
  - Restrict(기본값) : 참조 레코드 있는경우 참조 필드가 삭제되지 않게 함
    - 좋아요, 포스팅 글 등 유저가 삭제되어도 유지하고 싶은 기능이 있을 때 가능
  - NoAction: Restrict과 유사하지만 사용 중인 데이터베이스에 따라 다름
  - SetDefault: 참조 필드가 기본값으로 설정

### 2024.08.07

#### 7.6

- Recap
  - 다른 작업 환경으로 변경 시
    - .env 생성 : DATABASE_URL="file:./database.db" (test)
    - prisma 다시 설치 : npm i
    - prisma migration 진행 : npx prisma migrate dev
    - studio 확인 : npx prisma studio

#### 7.6.1

- Recap
  - .gitignore 파일 확인
    - `.env`
    - `*.db`
    - `*.db-journal`
