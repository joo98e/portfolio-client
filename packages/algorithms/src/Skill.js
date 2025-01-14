function bruteForceSolution(arr, start, end) {
  // Base case: 숫자 하나만 남은 경우
  if (start === end) {
    return parseInt(arr[start]);
  }

  let maxResult = Number.NEGATIVE_INFINITY;

  // 가능한 모든 연산 순서 탐색
  for (let k = start + 1; k < end; k += 2) {
    const operator = arr[k];
    const leftValue = bruteForceSolution(arr, start, k - 1); // 1번째 숫자
    const rightValue = bruteForceSolution(arr, k + 1, end); // 나머지 숫자

    let currentResult;
    if (operator === "+") {
      currentResult = leftValue + rightValue;
    } else if (operator === "-") {
      currentResult = leftValue - rightValue;
    }

    maxResult = Math.max(maxResult, currentResult);
  }

  return maxResult;
}

// 문제 풀이 함수
function solution(arr) {
  return bruteForceSolution(arr, 0, arr.length - 1);
}

// 테스트
console.log(solution(["1", "-", "3", "+", "5", "-", "8"])); // 출력: 1
