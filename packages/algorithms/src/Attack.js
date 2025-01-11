function solution(bandage, health, attacks) {
  let answer = health;
  const [maxCastingTime, recoveryAmountPerSecond, additionalRecoveryAmount] = bandage;

  const attackMap = new Map();
  for (const [time, damage] of attacks) {
    attackMap.set(time, (attackMap.get(time) || 0) + damage);
  }

  let castTime = 0;
  const totalAttackTime = Math.max(...attacks.map((v) => v[0]));

  for (let attackTiming = 1; attackTiming <= totalAttackTime; attackTiming++) {
    if (attackMap.has(attackTiming)) {
      answer -= attackMap.get(attackTiming);
      if (answer <= 0) return -1;
      castTime = 0;
    } else {
      answer = Math.min(answer + recoveryAmountPerSecond, health);
      castTime++;

      if (castTime === maxCastingTime) {
        answer = Math.min(answer + additionalRecoveryAmount, health);
        castTime = 0;
      }
    }
  }

  return answer;
}

const result = solution([5, 1, 5], 30, [
  [2, 10],
  [9, 15],
  [10, 5],
  [11, 5],
]);

console.log({ result });
