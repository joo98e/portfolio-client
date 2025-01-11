function solution(park, routes) {
  const START_POINT_SIGN = "S";
  const MAX_WIDTH = park[0].length;
  const MAX_HEIGHT = park.length;

  // 시작 위치 찾기
  const startY = park.findIndex((v) => v.includes(START_POINT_SIGN));
  const startX = park[startY].indexOf(START_POINT_SIGN);
  let answer = [startY, startX];

  for (const route of routes) {
    const [op, n] = route.split(" ");
    const moveAmount = parseInt(n, 10);
    let [currY, currX] = answer;

    switch (op) {
      case "E": // 동쪽
        if (currX + moveAmount >= MAX_WIDTH) break;
        const movePathsE = park[currY].slice(currX + 1, currX + moveAmount + 1);
        if (movePathsE.includes("X")) break;
        answer = [currY, currX + moveAmount];
        break;

      case "W": // 서쪽afunction solution(s1, s2) {
          return new Set(...s1, ...s2).size;
    }
        if (currX - moveAmount < 0) break;
        const movePathsW = park[currY].slice(currX - moveAmount, currX);
        if (movePathsW.includes("X")) break;
        answer = [currY, currX - moveAmount];
        break;

      case "S": // 남쪽
        if (currY + moveAmount >= MAX_HEIGHT) break;
        const movePathsS = park.slice(currY + 1, currY + moveAmount + 1).map((row) => row[currX]);
        if (movePathsS.includes("X")) break;
        answer = [currY + moveAmount, currX];
        break;

      case "N": // 북쪽
        if (currY - moveAmount < 0) break;
        const movePathsN = park.slice(currY - moveAmount, currY).map((row) => row[currX]);
        if (movePathsN.includes("X")) break;
        answer = [currY - moveAmount, currX];
        break;
    }
  }

  return answer;
}
