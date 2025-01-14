function solution(arr) {
  const operators = Math.ceil(arr.length / 2);

  let max_dp = [];
  let min_dp = [];

  for (let i = 0; i < operators; i++) {
    max_dp[i] = {};
    min_dp[i] = {};
  }

  for (let i = 0; i < operators; i++) {
    max_dp[i][i] = +arr[i * 2];
    min_dp[i][i] = +arr[i * 2];
  }

  for (let cnt = 1; cnt < operators; cnt++) {
    for (let i = 0; i < operators - cnt; i++) {
      const j = i + cnt;
      for (let k = i; k < j; k++) {
        const operator = arr[k * 2 + 1];
        if (operator === "+") {
          max_dp[i][j] = Math.max(max_dp[i][j] ?? -Infinity, max_dp[i][k] + max_dp[k + 1][j]);
          min_dp[i][j] = Math.min(min_dp[i][j] ?? Infinity, min_dp[i][k] + min_dp[k + 1][j]);
        } else {
          max_dp[i][j] = Math.max(max_dp[i][j] ?? -Infinity, max_dp[i][k] - min_dp[k + 1][j]);
          min_dp[i][j] = Math.min(min_dp[i][j] ?? Infinity, min_dp[i][k] - max_dp[k + 1][j]);
        }
      }
    }
  }

  return max_dp[0][operators - 1];
}

const result1 = solution(["1", "-", "3", "+", "5", "-", "8"]);
const result2 = solution(["5", "-", "3", "+", "1", "+", "2", "-", "4"]);

console.log({
  result1,
  result2,
});
