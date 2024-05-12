const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;
  // a: 20; b: 35; Переменным заданы значения переданные при запуске функции, переменная sum: 55;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  // после выполнения условного оператора переменной bonus присвоено значение 50;
  return bonus;
};

calculateBonus(20, 35);
