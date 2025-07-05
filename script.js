const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

let x = 0;
let trueOption = "";
let score = 0;

function refreshUI(){
  fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    if(x >= data.length) {
      question.innerText = "Quiz finished! Score: " + score ;
      option1.style.display = "none";
      option2.style.display = "none";
      option3.style.display = "none";
      option4.style.display = "none";
      return;
    }

    const questionStruct = data[x];
    question.innerText = questionStruct.question;

    option1.innerText = questionStruct.options[0];
    option2.innerText = questionStruct.options[1];
    option3.innerText = questionStruct.options[2];
    option4.innerText = questionStruct.options[3];

    option1.style.color = "";
    option2.style.color = "";
    option3.style.color = "";
    option4.style.color = "";

    trueOption = questionStruct.answer;
   
  })
  .catch(error => console.error('Error:', error));
}

function checkFunc(selectedOption){
  if(selectedOption.innerText === trueOption){
    selectedOption.style.color = "green";
    x++;
    score += 10;
    setTimeout(refreshUI, 500); 
  } else {
    selectedOption.style.color = "red";
    x++;
    setTimeout(refreshUI, 500); 
  }
}

refreshUI();