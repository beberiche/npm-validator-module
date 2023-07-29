type ValidError = {
  error: string;
  msg: string;
};
type Result = true | ValidError;

function reportError(msg: string): ValidError {
  return {
    error: 'Error',
    msg,
  };
}

// /**
//  *
//  *
//  * @param {Array<Array<String | number>>} args  함수에 사용할 인자를 2차원 배열로 받습니다. 함수의 인덱스와 인자의 배열 인덱스는 서로 동일해야합니다.
//  * @param {Array<Function>} funcs 함수의 배열을 담습니다. 함수의 길이만큼 유효성 검사가 진행됩니다.
//  *
//  * @returns {Result}
//  *
//  * @description 함수의 배열과, 2차원 인자 배열을 받아 각 인덱스에 맞게 유효성 함수들을 실행합니다.
//  */
// export function validHandler(args: Array<Array<String | number>>, funcs: Array<Function>) {
//   let ret: Result;
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
 * @param {string} len1         유효 길이에 대한 시작 값 입니다. (이상)
 * @param {string} len2         유효 길이에 대한 끝 값 입니다. (미만)
 *
 * @returns {Result}
 *
 * @description 길이 제한 유효성 함수로, 입력값이 유효 길이 범위안에 속해 있는지 체크합니다.
 */
export function lenLimit(inputValue: string, len1: number, len2: number): Result {
  let ret1 = lenLimitMore(inputValue, len1);
  let ret2 = lenLimitMore(inputValue, len2);
  if (ret1 === true && ret2 === true) return true;
  return reportError('주어진 제한 범위에 입력값 길이가 해당되지 않습니다.');
}

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 * @param {string} len          유효 길이에 대한 시작 값 입니다. (이상)
 *
 * @returns {Result}
 *
 * @description 입력값 길이를 체크하는 유효성 함수로, 입력값의 길이가 주어진 유효범위 이상인지 확인합니다.
 */
export function lenLimitMore(inputValue: string, len: number): Result {
  if (inputValue.length >= len) return true;
  return reportError('주어진 제한 길이보다 입력 값이 작습니다.');
}

/**
 *
 *
 * @param {string} inputValue   유효성 검사를 진행할 입력값 입니다.
 * @param {string} len          유효 길이에 대한 시작 값 입니다. (미만)
 *
 * @returns {Result}
 *
 * @description 입력값 길이를 체크하는 유효성 함수로, 입력값의 길이가 주어진 유효범위 미만인지 확인합니다.
 */
export function lenLimitUnder(inputValue: string, len: number): Result {
  if (inputValue.length < len) return true;
  return reportError('주어진 제한 길이보다 입력 값이 큽니다.');
}
