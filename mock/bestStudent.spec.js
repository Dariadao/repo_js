const getBestStudent = require("./students");

describe("getBestStudent", () => {
  test("определение студента с максимальным кол-вом баллов", () => {
    const students = [
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Maria", score: 5, date: "2022-10-10" },
      { name: "Olga", score: 0, date: "" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
      { name: "Oleg", score: 9, date: "2022-10-01" },
      { name: "Zanna", score: 15, date: "2022-10-11" },
    ];

    console.log = jest.fn();
    getBestStudent(students);
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Ivan! Вы набрали наибольшее количество баллов - 35!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Stepan! Вы набрали наибольшее количество баллов - 35!"
    );
  });

  test("определение студента с максимальным кол-вом баллов в другом наборе данных", () => {
    const students = [
      { name: "Margo", score: 0, date: "2022-10-11" },
      { name: "Natalia", score: 25, date: "2022-10-10" },
      { name: "Marina", score: 25, date: "2022-10-01" },
      { name: "Dmitry", score: 25, date: "2022-10-12" },
      { name: "Denis", score: 0, date: "2022-10-02" },
      { name: "Vadimyr", score: 1, date: "2022-10-11" },
    ];

    console.log = jest.fn();
    getBestStudent(students);
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Natalia! Вы набрали наибольшее количество баллов - 25!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Marina! Вы набрали наибольшее количество баллов - 25!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Dmitry! Вы набрали наибольшее количество баллов - 25!"
    );
  });

  test("должен корректно обработать случай, когда все баллы равны нулю", () => {
    const students = [
      { name: "Irina", score: 0, date: "2022-10-11" },
      { name: "Vasily", score: 0, date: "2022-10-10" },
      { name: "David", score: 0, date: "2022-10-11" },
      { name: "Kristina", score: 0, date: "2022-10-12" },
      { name: "Varvara", score: 0, date: "2022-10-01" },
      { name: "Tanya", score: 0, date: "2022-10-11" },
    ];

    console.log = jest.fn();
    getBestStudent(students);
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Irina! Вы набрали наибольшее количество баллов - 0!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Vasily! Вы набрали наибольшее количество баллов - 0!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем David! Вы набрали наибольшее количество баллов - 0!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Kristina! Вы набрали наибольшее количество баллов - 0!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Varvara! Вы набрали наибольшее количество баллов - 0!"
    );
    expect(console.log).toHaveBeenCalledWith(
      "Поздравляем Tanya! Вы набрали наибольшее количество баллов - 0!"
    );
  });

  test("в консоль ничего не выводиться, когда нет данных о студентах", () => {
    const students = [];

    console.log = jest.fn();
    getBestStudent(students);
    expect(console.log).not.toHaveBeenCalled();
  });

  test("в консоль ничего не выводиться, когда данные о студентах не переданы", () => {
    console.log = jest.fn();
    getBestStudent();
    expect(console.log).not.toHaveBeenCalled();
  });
});
