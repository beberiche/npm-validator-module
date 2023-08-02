// type ValidError = {
//   error: string;
//   msg: string;
// };

class ValidationError extends Error {
  errorType: string;
  constructor(errorType: string, message: string) {
    super(message);
    this.errorType = errorType;
  }
}

// function reportError(msg: string): ValidError {
//   return {
//     error: 'Error',
//     msg,
//   };
// }

// /**
//  *
//  *
//  * @param {Array<Array<String | number>>} args  함수에 사용할 인자를 2차원 배열로 받습니다. 함수의 인덱스와 인자의 배열 인덱스는 서로 동일해야합니다.
//  * @param {Array<Function>} funcs 함수의 배열을 담습니다. 함수의 길이만큼 유효성 검사가 진행됩니다.
//  *
//  * @returns {true | void}
//  *
//  * @description 함수의 배열과, 2차원 인자 배열을 받아 각 인덱스에 맞게 유효성 함수들을 실행합니다.
//  */
// export function validHandler(args: Array<Array<String | number>>, funcs: Array<Function>) {
//   let ret: true | void;
//   if (!Array.isArray(args) || !Array.isArray(args[0])) return reportError('인자 배열의 형식이 잘못되었습니다.');
//   if (!Array.isArray(funcs) || typeof funcs[0] !== 'function') return reportError('함수 배열의 형식이 잘못되었습니다.');
//   if (args.length !== funcs.length) return reportError('인수 배열의 길이와 함수 배열의 길이는 서로 일치해야 합니다');

//   for (let i = 0; i < funcs.length; i++) {
//     ret = funcs[i](...args[i]);
//     if (ret !== true) return ret;
//   }
//   return true;
// }

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 * @param {number} len1         유효 길이에 대한 시작 값 입니다. (이상)
 * @param {number} len2         유효 길이에 대한 끝 값 입니다. (미만)
 *
 * @returns {true | void}
 *
 * @description 길이 제한 유효성 함수로, 입력값이 유효 길이 범위안에 속해 있는지 체크합니다.
 *
 * @example
 *
 */
export function lenLimit(inputValue: string, len1: number, len2: number): true | void {
  try {
    if (typeof inputValue !== 'string' || typeof len1 !== 'number' || typeof len2 !== 'number')
      throw new ValidationError('typeError', '정의된 데이터 타입과 일치하지 않는 인자가 존재합니다.');

    let ret1 = lenLimitMore(inputValue, len1);
    let ret2 = lenLimitUnder(inputValue, len2);
    if (ret1 === true && ret2 === true) return true;
    else throw new ValidationError('validError', '입력값이 주어진 범위에 포함되지 않습니다.');
  } catch (e) {
    console.log(e);
  }
}

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 * @param {number} len          유효 길이에 대한 시작 값 입니다. (이상)
 *
 * @returns {true | void}
 *
 * @description 입력값 길이를 체크하는 유효성 함수로, 입력값의 길이가 주어진 유효범위 이상인지 확인합니다.
 */
export function lenLimitMore(inputValue: string, len: number): true | void {
  try {
    if (typeof inputValue !== 'string' || typeof len !== 'number')
      throw new ValidationError('typeError', '정의된 데이터 타입과 일치하지 않는 인자가 존재합니다.');

    if (inputValue.trim().length >= len) return true;
    else throw new ValidationError('validError', '주어진 제한 길이보다 입력 값이 작습니다.');
  } catch (e) {
    console.log(e);
  }
}

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 * @param {number} len          유효 길이에 대한 끝 값 입니다. (미만)
 *
 * @returns {true | void}
 *
 * @description 입력값 길이를 체크하는 유효성 함수로, 입력값의 길이가 주어진 유효범위 미만인지 확인합니다.
 *
 *
 */
export function lenLimitUnder(inputValue: string, len: number): true | void {
  try {
    if (typeof inputValue !== 'string' || typeof len !== 'number')
      throw new ValidationError('typeError', '정의된 데이터 타입과 일치하지 않는 인자가 존재합니다.');
    if (inputValue.trim().length < len) return true;
    else throw new ValidationError('validError', '주어진 제한 길이보다 입력 값이 큽니다.');
  } catch (e) {
    console.log(e);
  }
}

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 *
 * @returns {true | void}
 *
 * @description 입력된 문자열이 이메일 형식인지 확인합니다.
 */
export function isEmail(inputValue: string): true | void {
  try {
    if (typeof inputValue !== 'string')
      throw new ValidationError('typeError', '정의된 데이터 타입과 일치하지 않는 인자가 존재합니다.');
    const regxEmail = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regxEmail.test(inputValue.trim())) return true;
    throw new ValidationError('validError', '올바른 이메일 형식이 아닙니다.');
  } catch (e) {
    console.log(e);
  }
}

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 * @param {number} [options]      비밀번호 형식을 설정합니다.
 * @example
 * options = 0 // 영문자
 * options = 1 // 영문자 및 숫자 포함
 * options = 2 // 영문자, 숫자 및 특수문자 포함
 *
 *
 * @returns {true | void}
 *
 * @description 입력된 문자열이 설정한 비밀번호 형식과 알맞는지 확인합니다.
 */
export function isPassword(inputValue: string, options: number = 0): true | void {
  if (typeof inputValue !== 'string' || typeof options !== 'number')
    throw new ValidationError('typeError', '정의된 데이터 타입과 일치하지 않는 인자가 존재합니다.');
  try {
    let regxPassword: RegExp;
    switch (options) {
      case 1:
        regxPassword = /^[a-zA-Z0-9]*$/;
        break;
      case 2:
        regxPassword = /^.*(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%*^&+=`~]).*$/;
        break;
      default:
        regxPassword = /^[a-zA-Z]*$/;
        break;
    }

    if (regxPassword.test(inputValue.trim())) return true;
    throw new ValidationError('validError', '설정한 비밀번호 형식과 일치하지 않습니다.');
  } catch (e) {
    console.log(e);
  }
}

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 *
 * @returns {true | void}
 *
 * @description 입력된 문자열이 휴대폰 번호 혹은 전화번호 형식에 알맞는지 확인합니다.
 */
export function isPhoneNumber(inputValue: string): true | void {
  if (typeof inputValue !== 'string')
    throw new ValidationError('typeError', '정의된 데이터 타입과 일치하지 않는 인자가 존재합니다.');

  try {
    const str = inputValue.replace(/-/g, '').trim();
    let regxPhoneNumber = /^(070|02|01[016789]{1}|0[3-9]{1}[0-9]{1})[0-9]{3,4}[0-9]{4}$/;
    if (regxPhoneNumber.test(str.trim())) return true;
    throw new ValidationError('validError', '올바른 휴대폰 번호 혹은 전화번호 형식이 아닙니다.');
  } catch (e) {
    console.log(e);
  }
}
