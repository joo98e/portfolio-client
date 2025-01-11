function solution(number: number) {
  let strings: string[] = [];

  for (let i = 0; i < number; i++) {
    strings.push(" ".repeat(number - i) + "*" + "**".repeat(i));
  }

  const reverse = Array.from(strings).reverse().splice(1); // 1부터 삭제한 모든 배열 리턴

  strings = [...strings, ...reverse];
  console.log(strings.join("\n"));
}

solution(8);
