function getBestStudent(studentsData) {
  if (!Array.isArray(studentsData)) {
    return;
  }

  let bestStudents = [];
  let bestScore = 0;

  for (let i = 0; i < studentsData.length; i++) {
    if (studentsData[i].score > bestScore) {
      bestScore = studentsData[i].score;
      bestStudents = [studentsData[i]];
    } else if (studentsData[i].score === bestScore) {
      bestStudents.push(studentsData[i]);
    }
  }

  bestStudents.forEach((student) => {
    console.log(
      `Поздравляем ${student.name}! Вы набрали наибольшее количество баллов - ${bestScore}!`
    );
  });
}
getBestStudent();

module.exports = getBestStudent;
