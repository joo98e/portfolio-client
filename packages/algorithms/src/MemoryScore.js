function solution(names, yearning, photo) {
  const yearningMap = new Map();
  names.forEach((name, index) => {
    yearningMap.set(name, yearning[index]);
  });

  const answer = [];

  for (const peoples of photo) {
    answer.push(
      peoples.reduce((acc, curr) => {
        return acc + (yearningMap.get(curr) || 0);
      }, 0),
    );
  }

  return answer;
}

const so = solution(
  ["may", "kein", "kain", "radi"],
  [5, 10, 1, 3],
  [
    ["may", "kein", "kain", "radi"],
    ["may", "kein", "brin", "deny"],
    ["kon", "kain", "may", "coni"],
  ],
);

console.log({ so });
