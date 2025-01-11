function convertToMinutes(str) {
  const [minute, second] = str.split(":").map(Number);

  return minute * 60 + second;
}

function convertToStr(seconds) {
  const min = (~~(seconds / 60) + "").padStart(2, "0");
  const sec = ((seconds % 60) + "").padStart(2, "0");
  return `${min}:${sec}`;
}

function isInRange(value, start, end) {
  return start <= value && value <= end;
}

function solution(video_len, pos, op_start, op_end, commands) {
  let answer = convertToMinutes(pos);
  const totalVideoLeng = convertToMinutes(video_len);
  const opStartLeng = convertToMinutes(op_start);
  const opEndLeng = convertToMinutes(op_end);

  for (const command of commands) {
    if (isInRange(answer, opStartLeng, opEndLeng)) {
      answer = opEndLeng;
    }

    switch (command) {
      case "next":
        answer += 10;
        if (answer > totalVideoLeng) answer = totalVideoLeng;
        if (totalVideoLeng - answer < 10) answer = totalVideoLeng;
        break;

      case "prev":
        answer -= 10;
        if (answer < 0) answer = 0;
        break;
    }

    if (isInRange(answer, opStartLeng, opEndLeng)) {
      answer = opEndLeng;
    }
  }

  return convertToStr(answer);
}

const solution1 = solution("10:55", "10:55", "00:15", "06:55", ["prev", "next", "next"]);

console.log({ solution1 });
