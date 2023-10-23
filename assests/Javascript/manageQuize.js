var alerts = document.querySelector('.alerts');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
//const answerElsB = document.querySelectorAll(".answerB");
//const answerElsC = document.querySelectorAll(".answerC");
const questionEl = document.getElementById('question');
//const questionElB = document.getElementById("questionB");
//const questionElC = document.getElementById("questionC");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const submitBtnB = document.getElementById('submitB');
const submitBtnC = document.getElementById('submitC');

let currentQuiz = 0;
let score = 0;
let totalSelected = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  if (currentQuiz < quizData.length) {
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  } else {
    if (score > 7) {
      quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<a href="javascript: scrolltoId2()"><button>Congratulations! You have qualified for Level 2. Stay tuned for the next round and level up
  your Voter Quotient with ECI! Collect Your Certificate for Level 1</button></a>
`;
      const certificateInput = document.querySelector('.certificateInput');
      certificateInput.style.display = 'inline-block';
      //Collect your Certificate
    } else {
      console.log('Uhoh, looks like you didn’t make it to Level 1. Try again!');
      quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<a href="javascript:location.reload();"><button>Uhoh, looks like you didn’t make it to Level 1. Try again!</button></a>
`;
    }
  }

  //const currentQuizData2 = quizData_two[currentQuiz];

  //questionElB.innerText = currentQuizData2.question;
  //a_textB.innerText = currentQuizData2.e;
  //b_textB.innerText = currentQuizData2.f;
  //c_textB.innerText = currentQuizData2.g;
  //d_textB.innerText = currentQuizData2.h;

  //const currentQuizData3 = quizData_three[currentQuiz];

  //questionElC.innerText = currentQuizData3.question;
  //a_textC.innerText = currentQuizData3.i;
  //b_textC.innerText = currentQuizData3.j;
  //c_textC.innerText = currentQuizData3.k;
  //d_textC.innerText = currentQuizData3.l;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
  //answerElsB.forEach((answerElB) => (answerElB.checked = false));
  //answerElsC.forEach((answerElC) => (answerElC.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  //answerElsB.forEach((answerEl) => {
  //    if (answerEl.checked) {
  //        answer = answerEl.id;
  //    }
  //});
  //answerElsC.forEach((answerEl) => {
  //    if (answerEl.checked) {
  //        answer = answerEl.id;
  //    }
  //});
  return answer;
}
$(document).ready(function () {
  $('.submit-answer').click(function () {
    var errors;
    // var closestErrors = $(this).siblings('.quiz-header').find('.errors');
    // closestErrors.text('New error message'); // Replace 'New error message' with your desired text
    let answer;
    let selectedQuizData;
    let selectedCurrentQuiz;
    let level;
    let btn;
    if ($(this).attr('id') === 'submit') {
      answer = getSelected();
      selectedQuizData = quizData;
      selectedCurrentQuiz = currentQuiz;
      level = 1;
      errors = $('.errors');
      btn = submitBtn;
    } else if ($(this).attr('id') === 'submitB') {
      answer = getSelected2();
      selectedQuizData = quizData_two;
      selectedCurrentQuiz = currentQuiz2;
      level = 2;
      errors = $('.errors2');
      btn = submitBtnB;
    } else if ($(this).attr('id') === 'submitC') {
      answer = getSelected3();
      selectedQuizData = quizData_three;
      selectedCurrentQuiz = currentQuiz3;
      level = 3;
      errors = $('.errors3');
      btn = submitBtnC;
    }
    console.log('totalSelected=> ', totalSelected);
    console.log('score', score);
    // event.preventDefault();
    // console.log(answer);
    // console.log(selectedQuizData[currentQuiz].correct);
    //            console.log("quizData.length", quizData.length);
    var closestUL = $(this).closest('.quiz-container').find('ul');
    var closestLI = closestUL.find('li');
    console.log('quizData.length', score, ' || ', selectedQuizData.length);
    if (level === 3 && (totalSelected < 32 || score2 < 7)) {
      var target_two = document.getElementById('target_two');
      alerts.style.display = 'inline-block';
      alerts.innerHTML = `<div class="alert alert-danger" role="alert" style="padding: 50px; font-size: 1.4rem;">
              Uhoh, looks like you did'nt participate in level 2. <span id="cencel_alert"><i class="fas fa-window-close"></i></span>
            </div>`;
      //alert('have to cleat level 1 first. please clear level 2')
      target_two.scrollIntoView({ behavior: 'smooth' }, true);
      const cencel_alert = document.getElementById('cencel_alert');
      cencel_alert.addEventListener('click', () => {
        alerts.style.display = 'none';
      });
      setTimeout(() => {
        alerts.style.display = 'none';
      }, 5000);
    } else if (level === 2 && (totalSelected < 18 || score < 7)) {
      var target_one = document.getElementById('target_one');
      alerts.style.display = 'inline-block';
      alerts.innerHTML = `<div class="alert alert-danger" role="alert" style="padding: 50px; font-size: 1.4rem;">
      <div><h2  class="Modal_heading">Hello, I am a modal!</h2></div>
                    <p>Need to clear Level 1 First. </p>
                    <span id="cencel_alert"><i class="fas fa-window-close"></i></span>
                  </div>`;
      //alert('')
      target_one.scrollIntoView({ behavior: 'smooth' }, true);
      const cencel_alert = document.getElementById('cencel_alert');
      cencel_alert.addEventListener('click', () => {
        alerts.style.display = 'none';
      });
      setTimeout(() => {
        alerts.style.display = 'none';
      }, 5000);
    } else {
      if (answer) {
        const rightOption = selectedQuizData[selectedCurrentQuiz].correct;
        const rightAnswer = selectedQuizData[selectedCurrentQuiz][rightOption];
        if (answer === selectedQuizData[selectedCurrentQuiz].correct) {
          closestLI.each(function () {
            var liClass = $(this).find('label').attr('class');
            var inputID = $(this).find('input').attr('id');
            if (inputID === selectedQuizData[selectedCurrentQuiz].correct) {
              $(this).find('label').css('color', 'green');
            } else {
              $(this).find('label').css('color', 'red');
            }
          });
          console.log('Right Answer!!!');
          //console.log();
          errors.html(
            `Congratulations!! Answer is : ${rightAnswer} go to next question`
          );
          errors.css('color', 'green');
          if ($(this).text() === 'Next Question') {
            if (level === 1) {
              score++;
            } else if (level === 2) {
              score2++;
            } else if (level === 3) {
              score3++;
            }
          }
          if (selectedQuizData[selectedCurrentQuiz].correct) {
            console.log('check!! Color Changes to green 💚Level1');
            //document.querySelector(`#${quizData[currentQuiz].correct}`).style.color = "green";
          }
        } else {
          closestLI.each(function () {
            var liClass = $(this).find('label').attr('class');
            var inputID = $(this).find('input').attr('id');
            if (inputID === selectedQuizData[selectedCurrentQuiz].correct) {
              $(this).find('label').css('color', 'green');
            } else {
              $(this).find('label').css('color', 'red');
            }
          });
          console.log(
            'else condition for wrong answer ',
            selectedQuizData[selectedCurrentQuiz].correct
          );
          //alert("Wrong Answer!! Right Answer is : " + quizData[currentQuiz].correct);
          errors.html(
            `Wrong Answer!! &nbsp;<span style="color: green;">Right Answer is : ${rightAnswer}</span>`
          );
          errors.css('color', 'red');
        }

        if (btn.textContent.trim() === 'Submit Answer' && btn.id === 'submit') {
          $('#submit').html('Next Question');
        } else if (
          btn.textContent.trim() === 'Submit Answer' &&
          btn.id === 'submitB'
        ) {
          $('#submitB').html('Next Question');
        } else if (
          btn.textContent.trim() === 'Submit Answer' &&
          btn.id === 'submitC'
        ) {
          $('#submitC').html('Next Question');
        } else {
          totalSelected++;
          if ($(this).attr('id') === 'submit') {
            currentQuiz++;
          } else if ($(this).attr('id') === 'submitB') {
            currentQuiz2++;
          } else if ($(this).attr('id') === 'submitC') {
            currentQuiz3++;
          }
          if (selectedCurrentQuiz < selectedQuizData.length) {
            closestLI.each(function () {
              $(this).find('label').css('color', 'black');
            });
            errors.html('');
            if (level === 1) {
              loadQuiz();
            } else if (level === 2) {
              if (totalSelected >= 40 && score2 > 7) {
                console.log(totalSelected, "level 2 click!!")
                quizB.innerHTML = `
                <h2>You answered ${score2}/${selectedQuizData.length} questions correctly</h2>
                <a href="javascript: scrolltoId3()"><button>Congratulations! You have qualified for Level 2. Stay tuned for the next round and level up
                  your Voter Quotient with ECI! Collect Your Certificate for Level 2</button></a>
            `;
              } else {
                loadQuiz2();
              }
            } else if (level === 3) {
              if (totalSelected >= 64 && score3 > 7) {
                console.log(totalSelected, "level 3 click!!")
                quizC.innerHTML = `
                <h2>You answered ${score3}/${selectedQuizData.length} questions correctly</h2>
                <a href="javascript: scrolltoId()"><button>Congratulations! You have qualified for Level 3. Stay tuned for the next round and level up
                  your Voter Quotient with ECI! Collect Your Certificate for Level 3</button></a>
            `;
              } else {
                console.log('else condition lvl3!!')
                loadQuiz3();
              }
            }
          } else {
            if (score > 7) {
              quiz.innerHTML = `
                    <h2>You answered ${score}/${selectedQuizData.length} questions correctly</h2>
                    <a href="javascript: scrolltoId2()"><button>Congratulations! You have qualified for Level 1. Stay tuned for the next round and level up
                      your Voter Quotient with ECI! Collect Your Certificate for Level 1</button></a>
                `;
              // const certificateInput =
              //   document.querySelector('.certificateInput');
              // certificateInput.style.display = 'inline-block';
              //Collect your Certificate
            } else if (score2 > 7) {
              quizB.innerHTML = `
                    <h2>You answered ${score2}/${selectedQuizData.length} questions correctly</h2>
                    <a href="javascript: scrolltoId3()"><button>Congratulations! You have qualified for Level 2. Stay tuned for the next round and level up
                      your Voter Quotient with ECI! Collect Your Certificate for Level 2</button></a>
                `;
            } else if (score3 > 7) {
              quizC.innerHTML = `
                    <h2>You answered ${score2}/${selectedQuizData.length} questions correctly</h2>
                    <a href="javascript: scrolltoId()"><button>Congratulations! You have qualified for Level 2. Stay tuned for the next round and level up
                      your Voter Quotient with ECI! Collect Your Certificate for Level 2</button></a>
                `;
            } else {
              console.log(
                'Uhoh, looks like you didn’t make it to Level 1. Try again!'
              );
              quiz.innerHTML = `
                    <h2>You answered ${score}/${selectedQuizData.length} questions correctly</h2>
                    <a href="javascript:location.reload();"><button>Uhoh, looks like you didn’t make it to Level 1. Try again!</button></a>
                `;
            }
          }
          if (
            btn.textContent.trim() === 'Next Question' &&
            btn.id === 'submit'
          ) {
            $('#submit').html('Submit Answer');
          } else if (
            btn.textContent.trim() === 'Next Question' &&
            btn.id === 'submitB'
          ) {
            $('#submitB').html('Submit Answer');
          } else if (
            btn.textContent.trim() === 'Next Question' &&
            btn.id === 'submitC'
          ) {
            $('#submitC').html('Submit Answer');
          }
        }
      }
    }
  });
});

function scrolltoId2() {
  const level1C = document.querySelector('.level1C');
  //var access = document.getElementById("target_two");
  //access.scrollIntoView({ behavior: 'smooth' }, true);
  //const url = `./levelOne.html?${C_name}`;
  //window.location.href = url;
  if (score > 7) {
    //const certificatation = document.getElementById('certificatation');
    const input_box = document.querySelector('.input_box');
    const download_C = document.querySelector('#download_C');
    var C_name = '';
    input_box.style.display = 'flex';

    const getValue = () => {
      var inputName = document.querySelector('#nameE').value;
      console.log(inputName);
      //console.log(imgUrl);
      C_name = inputName;
      localStorage.setItem('myValue', C_name);

      //localStorage.setItem("imgUrl", imgUrl);
      //console.log(C_name);
      // Store the value in localStorage
      //const url = `./certification.html?${C_name}`;
      //window.location.href = url;
      //window.location.href = './certification.html';
      //window.localStorage
      var userName = document.getElementById('userName1');
      var value = localStorage.getItem('myValue');
      console.log(value);
      userName.innerHTML = value;
      //console.log(userName);
      //console.log(inputName);
      const ShowImage = document.querySelector('#ShowImage1');
      const imgUrl = localStorage.getItem('imgUrl');
      const img = document.createElement('img');
      if (imgUrl) {
        img.src = imgUrl;
        ShowImage.classList.add('img_upload');
        //img.width = "100%"
        ShowImage.appendChild(img);
      }
      input_box.style.display = 'none';
      level1C.style.display = 'flex';
    };
    download_C.addEventListener('click', getValue);
  } else {
    console.log(score, " why I'm not getting result.");
  }
}

const quizB = document.getElementById('quizB');
const answerElsB = document.querySelectorAll('.answerB');
const questionElB = document.getElementById('questionB');
const a_textB = document.getElementById('a_textB');
const b_textB = document.getElementById('b_textB');
const c_textB = document.getElementById('c_textB');
const d_textB = document.getElementById('d_textB');
// const submitBtnB = document.getElementById('submitB');

let currentQuiz2 = 0;
let score2 = 0;

loadQuiz2();
function loadQuiz2() {
  deselectAnswers2();

  const currentQuizData2 = quizData_two[currentQuiz2];

  questionElB.innerText = currentQuizData2.question;
  a_textB.innerText = currentQuizData2.e;
  b_textB.innerText = currentQuizData2.f;
  c_textB.innerText = currentQuizData2.g;
  d_textB.innerText = currentQuizData2.h;
}

function deselectAnswers2() {
  answerElsB.forEach((answerEl2) => (answerEl2.checked = false));
}

function getSelected2() {
  let answer2;

  answerElsB.forEach((answerEl2) => {
    if (answerEl2.checked) {
      answer2 = answerEl2.id;
    }
  });
  return answer2;
}

// submitBtnB.addEventListener('click', () => {
//   const answer_two = getSelected2();
//   console.log(answer_two);
//   console.log(quizData_two.length);
//   console.log(quizData_two[currentQuiz2].correct);
//   console.log(score2);
//   if (totalSelected > 18 && score > 7) {
//     totalSelected++;
//     if (answer_two) {
//       var errors2 = document.querySelector('.errors2');
//       if (answer_two === quizData_two[currentQuiz2].correct) {
//         //console.log(errors2);
//         errors2.innerHTML = `Congratulations!! Answer is : ${quizData_two[currentQuiz2].correct} go to next question`;
//         errors2.style.color = 'green';
//         if (quizData_two[currentQuiz2].correct) {
//           if ('e' === quizData_two[currentQuiz2].correct) {
//             a_textB.style.color = 'green';
//             b_textB.style.color = 'red';
//             c_textB.style.color = 'red';
//             d_textB.style.color = 'red';
//           } else if ('f' === quizData_two[currentQuiz2].correct) {
//             a_textB.style.color = 'red';
//             b_textB.style.color = 'green';
//             c_textB.style.color = 'red';
//             d_textB.style.color = 'red';
//           } else if ('g' === quizData_two[currentQuiz2].correct) {
//             a_textB.style.color = 'red';
//             b_textB.style.color = 'red';
//             c_textB.style.color = 'green';
//             d_textB.style.color = 'red';
//           } else if ('h' === quizData_two[currentQuiz2].correct) {
//             a_textB.style.color = 'red';
//             b_textB.style.color = 'red';
//             c_textB.style.color = 'red';
//             d_textB.style.color = 'green';
//           } else {
//             console.log('something_wrong!!!');
//           }
//           console.log('check!! Color Changes to green 💚 Level2');
//         }
//         score2++;
//       } else {
//         console.log(
//           'else condition for wrong answer ',
//           quizData_two[currentQuiz2].correct
//         );
//         //alert("Wrong Answer!! Right Answer is : " + quizData_two[currentQuiz2].correct);
//         errors2.innerHTML = `Wrong Answer!! &nbsp;<span style="color: green;">Right Answer is : ${quizData_two[currentQuiz2].correct}</span>`;
//         errors2.style.color = 'red';
//         if ('e' === quizData_two[currentQuiz2].correct) {
//           a_textB.style.color = 'green';
//           b_textB.style.color = 'red';
//           c_textB.style.color = 'red';
//           d_textB.style.color = 'red';
//         } else if ('f' === quizData_two[currentQuiz2].correct) {
//           a_textB.style.color = 'red';
//           b_textB.style.color = 'green';
//           c_textB.style.color = 'red';
//           d_textB.style.color = 'red';
//         } else if ('g' === quizData_two[currentQuiz2].correct) {
//           a_textB.style.color = 'red';
//           b_textB.style.color = 'red';
//           c_textB.style.color = 'green';
//           d_textB.style.color = 'red';
//         } else if ('h' === quizData_two[currentQuiz2].correct) {
//           a_textB.style.color = 'red';
//           b_textB.style.color = 'red';
//           c_textB.style.color = 'red';
//           d_textB.style.color = 'green';
//         }
//       }
//       currentQuiz2++;
//       setTimeout(() => {
//         if (currentQuiz2 < quizData_two.length) {
//           a_textB.style.color = 'black';
//           b_textB.style.color = 'black';
//           c_textB.style.color = 'black';
//           d_textB.style.color = 'black';
//           errors2.innerHTML = '';
//           loadQuiz2();
//         } else {
//           if (score2 > 7) {
//             quizB.innerHTML = `
//                     <h2>You answered ${score2}/${quizData_two.length} questions correctly</h2>
//                     <a href="javascript: scrolltoId3()"><button>Congratulations! You have qualified for Level 3. Stay tuned for the next round and level up
//                       your Voter Quotient with ECI! Collect Your Certificate for Level 2</button></a>
//                 `;
//             var $btn2 = document.getElementById('btnScreenShot2');
//             $btn2.addEventListener('mousedown', onScreenShotClick);

//             function download(canvas, filename) {
//               // create an "off-screen" anchor tag
//               const a2 = document.createElement('a');

//               // the key here is to set the download attribute of the a tag
//               a2.download = filename;

//               // convert canvas content to data-uri for link. When download
//               // attribute is set the content pointed to by link will be
//               // pushed as "download" in HTML5 capable browsers
//               a2.href = canvas.toDataURL('image/png;base64');

//               a2.style.display = 'none';
//               document.body.appendChild(a2);
//               a2.click();
//               document.body.removeChild(a2);
//             }

//             function onScreenShotClick(event) {
//               const element2 = document.querySelector('#capture2');

//               html2canvas(element2).then((canvas) => {
//                 download(canvas, 'screenshot2');
//               });
//             }
//           } else {
//             console.log(
//               'Uhoh, looks like you didn’t make it to Level 1. Try again!'
//             );
//             quizB.innerHTML = `
//                     <h2>You answered ${score2}/${quizData_two.length} questions correctly</h2>
//                     <a href="javascript:location.reload();"><button>Uhoh, looks like you didn’t make it to Level 2. Try again!</button></a>
//                 `;
//           }
//         }
//       }, 1000);
//     }
//   } else {
//     var target_one = document.getElementById('target_one');
//     alerts.style.display = 'inline-block';
//     alerts.innerHTML = `<div class="alert alert-danger" role="alert" style="padding: 50px; font-size: 1.4rem;">
//               Need to clear Level 1 First. <span id="cencel_alert"><i class="fas fa-window-close"></i></span>
//             </div>`;
//     //alert('')
//     target_one.scrollIntoView({ behavior: 'smooth' }, true);
//     const cencel_alert = document.getElementById('cencel_alert');
//     cencel_alert.addEventListener('click', () => {
//       alerts.style.display = 'none';
//     });
//     setTimeout(() => {
//       alerts.style.display = 'none';
//     }, 5000);
//   }
// });

function scrolltoId3() {
  //var access = document.getElementById("target_three");
  //access.scrollIntoView({ behavior: 'smooth' }, true);
  //const url = `./levelTwo.html${C_name}`;
  //window.location.href = url;
  const level2C = document.querySelector('.level2C');
  if (score2 > 7) {
    level2C.style.display = 'flex';
    var userName2 = document.getElementById('userName2');
    var value2 = localStorage.getItem('myValue');
    console.log(value2);
    userName2.innerHTML = value2;
    //console.log(userName);
    //console.log(inputName);
    const ShowImage2 = document.querySelector('#ShowImage2');
    const imgUrl2 = localStorage.getItem('imgUrl');
    if (imgUrl2) {
      const img2 = document.createElement('img');
      img2.src = imgUrl2;
      ShowImage2.classList.add('img_upload');
      //img.width = "100%"
      ShowImage2.appendChild(img2);
    }
  } else {
    console.log(score, " why I'm not getting result.");
  }
}

const quizC = document.getElementById('quizC');
const answerElsC = document.querySelectorAll('.answerC');
const questionElC = document.getElementById('questionC');
const a_textC = document.getElementById('a_textC');
const b_textC = document.getElementById('b_textC');
const c_textC = document.getElementById('c_textC');
const d_textC = document.getElementById('d_textC');
// const submitBtnC = document.getElementById('submitC');

let currentQuiz3 = 0;
let score3 = 0;

loadQuiz3();
function loadQuiz3() {
  deselectAnswers3();

  const currentQuizData3 = quizData_three[currentQuiz3];

  questionElC.innerText = currentQuizData3.question;
  a_textC.innerText = currentQuizData3.i;
  b_textC.innerText = currentQuizData3.j;
  c_textC.innerText = currentQuizData3.k;
  d_textC.innerText = currentQuizData3.l;
}

function deselectAnswers3() {
  answerElsC.forEach((answerEl3) => (answerEl3.checked = false));
}

function getSelected3() {
  let answer3;

  answerElsC.forEach((answerEl3) => {
    if (answerEl3.checked) {
      answer3 = answerEl3.id;
    }
  });
  return answer3;
}

// submitBtnC.addEventListener('click', () => {
//   const answer_three = getSelected3();
//   console.log(answer_three);
//   //console.log("quizData_three.length ", quizData_three.length);
//   //console.log(quizData_three[currentQuiz3].correct);
//   //console.log(score3);
//   if (totalSelected > 32 && score2 > 7) {
//     if (answer_three) {
//       var errors3 = document.querySelector('.errors3');
//       //console.log(errors3);
//       if (answer_three === quizData_three[currentQuiz3].correct) {
//         errors3.innerHTML = `Congratulations!! Answer is : ${quizData_three[currentQuiz3].correct} go to next question`;
//         errors3.style.color = 'green';
//         if (quizData_three[currentQuiz3].correct) {
//           if ('i' === quizData_three[currentQuiz3].correct) {
//             a_textC.style.color = 'green';
//             b_textC.style.color = 'red';
//             c_textC.style.color = 'red';
//             d_textC.style.color = 'red';
//           } else if ('j' === quizData_three[currentQuiz3].correct) {
//             a_textC.style.color = 'red';
//             b_textC.style.color = 'green';
//             c_textC.style.color = 'red';
//             d_textC.style.color = 'red';
//           } else if ('k' === quizData_three[currentQuiz3].correct) {
//             a_textC.style.color = 'red';
//             b_textC.style.color = 'red';
//             c_textC.style.color = 'green';
//             d_textC.style.color = 'red';
//           } else if ('l' === quizData_three[currentQuiz3].correct) {
//             a_textC.style.color = 'red';
//             b_textC.style.color = 'red';
//             c_textC.style.color = 'red';
//             d_textC.style.color = 'green';
//           }
//           console.log('check!! Color Changes to green 💚 Level3');
//         }
//         score3++;
//       } else {
//         console.log(
//           'else condition for wrong answer ',
//           quizData_three[currentQuiz3].correct
//         );
//         errors3.innerHTML = `Wrong Answer!! &nbsp;<span style="color: green;">Right Answer is : ${quizData_three[currentQuiz3].correct}</span>`;
//         errors3.style.color = 'red';
//         //alert("Wrong Answer!! Right Answer is : " + quizData_three[currentQuiz3].correct);
//         if ('i' === quizData_three[currentQuiz3].correct) {
//           a_textC.style.color = 'green';
//           b_textC.style.color = 'red';
//           c_textC.style.color = 'red';
//           d_textC.style.color = 'red';
//         } else if ('j' === quizData_three[currentQuiz3].correct) {
//           a_textC.style.color = 'red';
//           b_textC.style.color = 'green';
//           c_textC.style.color = 'red';
//           d_textC.style.color = 'red';
//         } else if ('k' === quizData_three[currentQuiz3].correct) {
//           a_textC.style.color = 'red';
//           b_textC.style.color = 'red';
//           c_textC.style.color = 'green';
//           d_textC.style.color = 'red';
//         } else if ('l' === quizData_three[currentQuiz3].correct) {
//           a_textC.style.color = 'red';
//           b_textC.style.color = 'red';
//           c_textC.style.color = 'red';
//           d_textC.style.color = 'green';
//         }
//       }
//       currentQuiz3++;
//       setTimeout(() => {
//         if (currentQuiz3 < quizData_three.length) {
//           a_textC.style.color = 'black';
//           b_textC.style.color = 'black';
//           c_textC.style.color = 'black';
//           d_textC.style.color = 'black';
//           loadQuiz3();
//         } else {
//           if (score3 > 1) {
//             quizC.innerHTML = `
//                 <h2>You answered ${score3}/${quizData_three.length} questions correctly</h2>
//                 <a href="javascript: scrolltoId()"><button>Congratulations! You have qualified Level 3 Collect Your Certificate from Top Right</button></a>
//             `;
//             //const certificateInput = document.querySelector('.certificateInput');
//             //certificateInput.style.display = "inline-block";
//           } else {
//             console.log(
//               'Uhoh, looks like you didn’t make it to Level 3. Try again!'
//             );
//             quizC.innerHTML = `
//                 <h2>You answered ${score3}/${quizData_three.length} questions correctly</h2>
//                 <a href="javascript:location.reload();"><button>Uhoh, looks like you didn’t make it to Level 3. Try again!</button></a>
//             `;
//           }
//         }
//       }, 1000);
//     }
//   } else {
//     var target_two = document.getElementById('target_two');
//     alerts.style.display = 'inline-block';
//     alerts.innerHTML = `<div class="alert alert-danger" role="alert" style="padding: 50px; font-size: 1.4rem;">
//               Uhoh, looks like you did'nt participate in level 2. <span id="cencel_alert"><i class="fas fa-window-close"></i></span>
//             </div>`;
//     //alert('have to cleat level 1 first. please clear level 2')
//     target_two.scrollIntoView({ behavior: 'smooth' }, true);
//     const cencel_alert = document.getElementById('cencel_alert');
//     cencel_alert.addEventListener('click', () => {
//       alerts.style.display = 'none';
//     });
//     setTimeout(() => {
//       alerts.style.display = 'none';
//     }, 5000);
//   }
// });

function scrolltoId() {
  var access = document.getElementById('target_one');
  access.scrollIntoView({ behavior: 'smooth' }, true);
  const certificateInput =
    document.querySelector('.certificateInput');
  certificateInput.style.display = 'inline-block';
  //const certificatation = document.getElementById('certificatation');
  const input_box = document.querySelector('.input_box');
  const download_C = document.querySelector('#download_C');
  //console.log(certificatation);
  let C_name = '';
  input_box.style.display = 'flex';

  //certificatation.addEventListener('click', () => {
  //})
  const getValue = () => {
    const inputName = document.querySelector('#nameE').value;

    console.log(inputName);
    //console.log(imgUrl);
    C_name = inputName;
    //console.log(C_name);
    // Store the value in localStorage
    localStorage.setItem('myValue', C_name);
    const url = `./certification.html?${C_name}`;
    window.location.href = url;
    //window.location.href = './certification.html';
    //window.localStorage
    input_box.style.display = 'none';
  };
  download_C.addEventListener('click', getValue);
}
