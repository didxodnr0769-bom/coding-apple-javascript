// test369(27);
isPass(70, 70);
isPass(30, 100);
isPass(50, 50);
isPass(120, 120);
isPass(90, 39);

/**
 *  1-12강 if/else, function 실력향상 과제
 *  1. 3의 배수일 경우 clap 출력
 *  2. 9의 배수일 경우 clap 두번 출력
 *  3. 1,2번이 아닐경우 숫자 그대로 출력
 */
function test369(num) {
  if (num % 3 === 0) {
    console.log("clap");
    if (num % 9 === 0) console.log("clap");
  } else console.log(num);
}

/**
 *
 * @param {Number} score1
 * @param {Number} score2
 * 조건1. 두과목 합해서 120점 이상일 경우 합격
 * 조건2. 한과목이라도 40점 미만일 경우 과락, 불합격
 */
function isPass(score1, score2) {
  if (score1 + score2 < 120 || score1 < 40 || score2 < 40)
    console.log(score1, score2, "불합격");
  else console.log(score1, score2, "합격");
}
