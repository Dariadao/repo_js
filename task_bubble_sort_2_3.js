let scores = [
  90, 85, 70, 95, 60, 55, 80, 75, 100, 65, 50, 45, 98, 72, 88, 82, 68, 77, 92,
  79, 84, 63, 87, 97,
];

function bubbleSort(arr) {
  for (let n = 0; n < arr.length; n++) {
    console.log(`__________новая итерация`);
    for (let i = 0; i < arr.length - 1 - n; i++) {
      if (arr[i] <= arr[i + 1]) {
        console.log(`сравниваем пару ${arr[i]} и ${arr[i + 1]}`);
        console.log(
          `сравниваем индексы ${scores.indexOf(arr[i])} и ${scores.indexOf(
            arr[i + 1]
          )} `
        );
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    console.log(`получился промежуточный массив ${scores}`);
  }
  return arr;
}
let sortedScores = bubbleSort(scores);
console.log(sortedScores);

// console.log(`работаем с массивом ${scores}`);
