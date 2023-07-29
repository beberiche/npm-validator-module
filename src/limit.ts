type LimitError = {
  error: string;
  msg: string;
};
type LimitResult = true | LimitError;

function throwLimitError(msg: string): LimitError {
  return {
    error: 'limitError',
    msg,
  };
}

// 길이제한
function lenLimit(inputValue: string, len1: number, len2: number): LimitResult {
  let ret1 = lenLimitMore(inputValue, len1);
  let ret2 = lenLimitMore(inputValue, len2);
  if (ret1 === true && ret2 === true) return true;
  return throwLimitError('주어진 제한 범위에 입력값이 해당되지 않습니다.');
}

function lenLimitMore(inputValue: string, len: number): LimitResult {
  if (inputValue.length >= len) return true;
  return throwLimitError('주어진 제한 길이보다 입력 값이 작습니다.');
}

function lenLimitUnder(inputValue: string, len: number): LimitResult {
  if (inputValue.length < len) return true;
  return throwLimitError('주어진 제한 길이보다 입력 값이 큽니다.');
}

module.exports = {
  lenLimit,
  lenLimitMore,
  lenLimitUnder,
};
