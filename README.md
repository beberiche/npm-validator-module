# npm-validator-module

사용자 입력 정보를 바탕으로 유효성 검사의 결과를 제공합니다.

## Methods

- [isEmail](./##isEmail)
- [isPassword](./##isPassword)
- [lenLimit](./##lenLimit)
- [lenLimitMore](./##lenLimitMore)
- [lenLimitUnder](./##lenLimitUnder)

## isEmail

> feature : 입력된 문자열이 이메일 형식인지 확인합니다.  
> source : - [main.ts](./src/main.ts/#L124)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|

## isPassword

> feature : 입력된 문자열이 설정한 비밀번호 형식과 알맞는지 확인합니다.
> source : - [main.ts](./src/main.ts/#L151)

**Parmeters**
|Name|Type|Attributes|Description|
|----|----|----|---------|
|inputValue|string||유효성 검사를 진행할 입력 값 입니다.|
|options|number|optional|비밀번호 형식을 설정합니다.|

## lenLimit

> feature : 입력값이 유효 길이 범위안에 속해 있는지 체크합니다.
> source : - [main.ts](./src/main.ts/#L55)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|
|len1|number|유효 길이에 대한 시작 값 입니다. (이상)|
|len2|number|유효 길이에 대한 끝 값 입니다. (미만)|

## lenLimitMore

> feature : 입력값의 길이가 주어진 유효범위 이상인지 확인합니다.
> source : - [main.ts](./src/main.ts/#L77)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|
|len|number|유효 길이에 대한 시작 값 입니다. (이상)|

## lenLimitUnder

> feature : 입력값의 길이가 주어진 유효범위 미만인지 확인합니다.
> source : - [main.ts](./src/main.ts/#L99)

**Parmeters**
|Name|Type|Description|
|----|----|---------|
|inputValue|string|유효성 검사를 진행할 입력 값 입니다.|
|len|number|유효 길이에 대한 끝 값 입니다. (미만)|
