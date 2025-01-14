function solution(arr) {
  const n = arr.length;
  const max_dp = Array.from({ length: n }, () => Array(n).fill(0));
  const min_dp = Array.from({ length: n }, () => Array(n).fill(0));

  // 숫자 초기화
  for (let i = 0; i < n; i += 2) {
    max_dp[i][i] = parseInt(arr[i]);
    min_dp[i][i] = parseInt(arr[i]);
  }

  // DP 테이블 채우기
  for (let length = 2; length <= n; length += 2) {
    // 부분 수식의 길이
    for (let i = 0; i <= n - length; i += 2) {
      // 시작 인덱스
      const j = i + length; // 끝 인덱스
      max_dp[i][j] = Number.NEGATIVE_INFINITY;
      min_dp[i][j] = Number.POSITIVE_INFINITY;

      for (let k = i + 1; k < j; k += 2) {
        // 연산자 위치
        const operator = arr[k];
        const left_max = max_dp[i][k - 1];
        const left_min = min_dp[i][k - 1];
        const right_max = max_dp[k + 1][j];
        const right_min = min_dp[k + 1][j];

        if (operator === "+") {
          max_dp[i][j] = Math.max(max_dp[i][j], left_max + right_max);
          min_dp[i][j] = Math.min(min_dp[i][j], left_min + right_min);
        } else if (operator === "-") {
          max_dp[i][j] = Math.max(max_dp[i][j], left_max - right_min);
          min_dp[i][j] = Math.min(min_dp[i][j], left_min - right_max);
        }
      }
    }
  }

  return max_dp[0][n - 1];
}

console.log(solution(["1", "-", "3", "+", "5", "-", "8"])); // 출력: 1
