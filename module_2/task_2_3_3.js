let balance = 500;
let parcelLocker = [null, null, null, "1432HGF", null];
let parcelInfo = {
  "1432HGF": {
    id: "1432HGF",
    cellNumber: 4,
    cost: 100,
  },
};

function getParcel(parcelCode) {
  for (let i = 0; i < parcelLocker.length; i++) {
    if (parcelLocker[i] === parcelCode) {
      balance -= parcelInfo[parcelCode].cost;
      console.log(
        `Заберите посылку ${parcelCode} из ячейки №${parcelInfo[parcelCode].cellNumber}. Ваш счет составляет: ${balance}ед.`
      );
      return balance;
    }
  }
  console.log("Посылка не найдена.");
  return balance;
}

let newBalance = getParcel("1432HGF");
console.log(newBalance);
