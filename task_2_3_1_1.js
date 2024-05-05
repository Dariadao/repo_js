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

const testPlayers1 = [
  {
    id: 1,
    name: "John",
    scorePoints: 1,
  },
  {
    id: 2,
    name: "Alice",
    scorePoints: -1,
  },
  {
    id: 3,
    name: "Bob",
    scorePoints: 0,
  },
  // Ожидаемый результат: { id: 1, name: "John", scorePoints: 5000 }
];

const testPlayers2 = [
  {
    id: 1,
    name: "Emily",
    scorePoints: 3500.01,
  },
  {
    id: 2,
    name: "David",
    scorePoints: 3499.99,
  },
  {
    id: 3,
    name: "Sophia",
    scorePoints: 3500,
  },
];
// Ожидаемый результат:{ id: 1, name: "Emily", scorePoints: 3500 }

const testPlayers3 = [];
// Ожидаемый результат: undefined (так как массив пустой)

const testPlayers4 = [
  {
    id: 1,
    name: "Mark",
    scorePoints: -2000,
  },
  {
    id: 2,
    name: "Emma",
    scorePoints: -1500,
  },
  {
    id: 3,
    name: "Liam",
    scorePoints: -3000,
  },
];
// Ожидаемый результат: { id: 2, name: 'Emma', scorePoints: -1500 }

const testPlayers5 = [
  {
    id: 1,
    name: "Olivia",
    scorePoints: 2500,
  },
  {
    id: 2,
    name: "Noah",
    scorePoints: 2500,
  },
  {
    id: 3,
    name: "Ava",
    scorePoints: 2500,
  },
];
// Ожидаемый результат: любой из игроков с одинаковым максимальным количеством очков

let scores = [];

function findPlayerWithMaxScore(testData) {
  scores = [];

  for (let player of testData) {
    for (let key in player) {
      if (key === "scorePoints") {
        scores.push(player[key]);
      }
    }
  }
  console.log(scores);

  let maxScore = Math.max(...scores);
  console.log(maxScore);

  let maxScorePlayer;
  for (let player of testData) {
    if (player.scorePoints === maxScore) {
      maxScorePlayer = player;
      break;
    }
  }
  return maxScorePlayer;
}

console.log(findPlayerWithMaxScore(players));
console.log(findPlayerWithMaxScore(testPlayers1));
console.log(findPlayerWithMaxScore(testPlayers2));
console.log(findPlayerWithMaxScore(testPlayers3));
console.log(findPlayerWithMaxScore(testPlayers4));
console.log(findPlayerWithMaxScore(testPlayers5));
