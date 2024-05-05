const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scores = [];

for (let player of players) {
  for (let key in player) {
    if (key === "scorePoints") {
      scores.push(player[key]);
    }
  }
}
console.log(scores);

const maxScore = Math.max(...scores);
console.log(maxScore);

let maxScorePlayer;
for (let player of players) {
  if (player.scorePoints === maxScore) {
    maxScorePlayer = player;
    break;
  }
}
console.log(maxScorePlayer);
