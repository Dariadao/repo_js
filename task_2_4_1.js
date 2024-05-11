let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

let yearlyExpences = [
  400, 1050, 700, 800, 550, 2800, 1100, 850, 2000, 900, 1200, 780,
];

function calculateSumOfYearlyExpences(expences) {
  let sum = 0;
  for (let i = 0; i < expences.length; i++) {
    if (expences[i] > 1000) sum += expences[i];
  }
  console.log(sum);
  return sum;
}

calculateSumOfYearlyExpences(yearlyExpences);

function printMonthsForLowExpenses(expencesExamples) {
  expencesExamples.forEach((example) => {
    let yearlyExpencesObj = example.yearlyExpences;
    let sumObj = calculateSumOfYearlyExpences(yearlyExpencesObj);
    console.log(sumObj);

    yearlyExpences.forEach((expense, index) => {
      if (expense <= 1000) {
        const month = new Date(0, index).toLocaleString("ru", {
          month: "long",
        });

        console.log(`Месяц: ${month}, Затраты: ${expense}`);
      }
    });
  });
}

printMonthsForLowExpenses(expencesExamples);
