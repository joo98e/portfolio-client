function solution(land) {
  let sumByRows = [...land[0]]; // 첫 행은 첫 행 값

  for (let i = 1; i < land.length; i++) {
    // 2열부터 시작 (행수 반복)
    const current = [...land[i]];

    for (let j = 0; j < 4; j++) {
      // 지금 index 를 제외한 원소들 중 큰 수 더하기
      current[j] += Math.max(...sumByRows.filter((v, index) => index !== j));
    }

    sumByRows = current;
  }

  return Math.max(...sumByRows);
}

const number = solution([
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
]);

console.log({ number });
