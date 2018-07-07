let gradeCal = function (score, total = 100) {

  if (typeof score === 'number' && typeof total === 'number') {

    let grade = (score / total) * 100;
    let letterGrade;
    if (grade >= 90 && grade <= 100) {
      letterGrade = 'A'
    } else if (grade >= 80 && grade <= 89) {
      letterGrade = 'B'
    } else if (grade >= 70 && grade <= 79) {
      letterGrade = 'C'
    } else if (grade >= 60 && grade <= 69) {
      letterGrade = 'D'
    } else {
      letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${grade}%)!`
  } else {
    throw Error('One or more values werent a number')
  }
};

try {
  console.log(gradeCal('f'));
} catch (e) {
  console.log(e)
}