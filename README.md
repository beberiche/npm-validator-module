# npm-validator-module

사용자 입력 정보를 바탕으로 유효성 검사의 결과를 제공합니다.

## Methods

- [isEmail](#isemail)
- [isPassword](#ispassword)
- [lenLimit](#lenlimit)
- [lenLimitMore](#lenlimitmore)
- [lenLimitUnder](#lenlimitunder)

## isEmail

> feature : 입력된 문자열이 이메일 형식인지 확인합니다.  
> source : - [main.ts](./src/main.ts/#L124)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|

**example**

```js
import { isEmail } from '@beberiche/validator';

let ret = isEmail('asdf');
console.log(ret); // Error : 올바른 이메일 형식이 아닙니다.
ret = isEmail('asdf@gmail.com');
console.log(ret); // true
```

## isPassword

> feature : 입력된 문자열이 설정한 비밀번호 형식과 알맞는지 확인합니다.  
> source : - [main.ts](./src/main.ts/#L151)

**Parmeters**
|Name|Type|Attributes|Description|
|----|----|----|---------|
|inputValue|string||유효성 검사를 진행할 입력 값 입니다.|
|options|number|optional|비밀번호 형식을 설정합니다.|

**examples**

```js
import { isPassword } from '@beberiche/validator';

let ret = isPassword('asdf'); // 기본값 0, 영문자만 검사
console.log(ret); // true
ret = isPassword('asdfadsf123', 1); // 1, 영문자 및 숫자 포함
console.log(ret); // true
ret = isPassword('asdfadsf123', 2); // 2, 영문자, 숫자 그리고 특수문자 포함
console.log(ret); // undefined
// Error: 설정한 비밀번호 형식과 일치하지 않습니다.
```

## lenLimit

> feature : 입력값이 유효 길이 범위안에 속해 있는지 체크합니다.  
> source : - [main.ts](./src/main.ts/#L55)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|
|len1|number|유효 길이에 대한 시작 값 입니다. (이상)|
|len2|number|유효 길이에 대한 끝 값 입니다. (미만)|

**examples**

```js
import { lenLimit } from '@beberiche/validator';

let ret = lenLimit('asdf', 2, 8); // 2이상 8미만
console.log(ret); // true
ret = lenLimit('sadfa', 6, 8);
console.log(ret); // undefined
// Error : 입력값이 주어진 범위에 포함되지 않습니다.
```

## lenLimitMore

> feature : 입력값의 길이가 주어진 유효범위 이상인지 확인합니다.  
> source : - [main.ts](./src/main.ts/#L77)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|
|len|number|유효 길이에 대한 시작 값 입니다. (이상)|

**examples**

```js
import { lenLimitMore } from '@beberiche/validator';

let ret = lenLimitMore('asdf', 3); // 3이상
console.log(ret); // true
ret = lenLimitMore('asdf', 5); // undefined
// Error : 주어진 제한 길이보다 입력 값이 작습니다.
```

## lenLimitUnder

> feature : 입력값의 길이가 주어진 유효범위 미만인지 확인합니다.  
> source : - [main.ts](./src/main.ts/#L99)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|
|len|number|유효 길이에 대한 끝 값 입니다. (미만)|

**examples**

```js
import { lenLimitUnder } from '@beberiche/validator';

let ret = lenLimitUnder('asd', 8);
console.log(ret); // true
ret = lenLimitUnder('asdf', 4);
// Error : 주어진 제한 길이보다 입력 값이 큽니다.
```
