var time_id = document.getElementById('time');
var secounds = 10;
t_int = setInterval(timer,1000);
function timer(){
  if(secounds <=0){
    alert("your time is finished",quiz.innerHTML = ` <h2 style ="color: green";>${quizData.length} sorudan ${score} soruya cevap veridiniz</h2>`);
     loadQuiz();
    time.id.innerHTML == "sure: doldu";
  }
  else {
    var m = Math.floor(secounds/60);
    var s = secounds%60;
    if(m<10){
      m = "0" + m;
    }
    if(s<10){
      s = '0'+s;
    }
    time_id.innerHTML = "sure: " + m + ":" + s;
    secounds --;
  }
}
const quizData = [
    {
        question:"Kumandanın pili bitmiştir. Kumandanın biten pillerini nereye atmalıyız ?",
        a: "Çöpe",
        b: "disaray",
        c: "Yere",
        d: "Atık pil kutusuna",

        correct: "d",
    },
    {
        question: "Aşağıda verilen maddelerden hangisi elektriği iletir ?",
        a: "su",
        b: "disaray",
        c: "Plastik",
        d: "Tahta",
        correct: "d",
    },
    {
        question: "3.Aşağıdakilerden hangisi şehir elektriği ile çalışmaz ?",
        a: "saat",
        b: "Elektrikli Süpürge Ulaşım",
        c: "Televizyon",
        d: "Çamaşır Makinesi - Temizlik",
        correct: "d",
    },
    {
        question: ".Aşağıdakilerden verilen elektrikli araçlar kullanım alanları ile ilgili  eşleştirmelerden hangisi yanlıştır ? ",
        a: "Elektrikli Süpürge Ulaşım",
        b: "Çamaşır Makinesi - Temizlik",
        c: "Telefon - Haberleşme",
        d: "Atık pil kutusuna",
        correct: "d",
    },
    {
        question: "Elektrik kablolarını sudan ve ısıdan _____ tutmalıyız.",
        a: "Atık pil kutusuna",
        b: "yakın",
        c: "sicak",
        d: "uzak",
        correct: "d",
    },
    {
        question: "Yırtılmış ya da yıpranmış olan kabloları ve prizleri ________.",
        a: "Çöpe",
        b: "disaray",
        c: "Yere",
        d: "Atık pil kutusuna",
        correct: "d",
    },
      {
        question: "additin of these numbers 15+15 is",
        a: "saklamalıyız",
        b: "kullanmamalıyız",
        c: "Yere",
        d: "kullanmaıyız",
        correct: "d",
    },
        {
        question: "Elektrik çarpması nedir ?",
        a: "Elektriğin kablolardan geçmesidir",
        b: "Elektriğin cihazları çalıştırması olayıdır",
        c: "Yere",
        d: "Elektriğin vücudumuzla temas etmesidir",
        correct: "d",
    },
    {
          question: "Aşağıdakilerden hangisi elektrik üretmez",
          a: "Aşağıdakilerden hangisi elektrik üretmez",
          b: "aku",
          c: "Yere",
          d: "Jeneratör",
        correct: "d",
    },
    {

      question: "Elektrik çarpması nedir ?",
      a: "Elektriğin kablolardan geçmesidir",
      b: "Elektriğin cihazları çalıştırması olayıdır",
      c: "Yere",
      d: "Elektriğin vücudumuzla temas etmesidir",
      correct: "d",
  },



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

     // deselectAnswers();

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    // answerEls.forEach(answerEl => answerEl.checked = false);
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer;
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }

       currentQuiz++;

       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button style="font-family: sans-serif;  font-size: 20px;  background-color: #ffc300;
             color: #fff;
             border: 0px;
             border-radius: 3px;
             padding: 20px;
             cursor: pointer;
             margin-top: 10px;
             color:#123456;
             margin-bottom: 20px;"; onclick="location.reload()">Reload</button>
           `
       }
    }
})
