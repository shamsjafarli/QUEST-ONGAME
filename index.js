const Questions = [
    {
        title: "Funny in advance?",
        trueAnswer: "B.Hilarious",
        answers: ["A.Hideous", "B.Hilarious", "C.Wealthy", "D.Ecstatic", "E.Frail"]
    },
    {
        title: "What is the meaning just in case?",
        trueAnswer: "A.önlem",
        answers: ["A.önlem", "B.harika", "C.hizli", "D.hoş", "E.bakimsiz"]
    },
    {
        title: "Swear translate turkish",
        trueAnswer: "A.yemin ederim",
        answers: ["A.yemin ederim", "B.bakariz", "C.bestelemek", "D.yalanci", "E.ima etmek"]
    },
    {
        title: "Solo what is the meaning?",
        trueAnswer: "C.alone",
        answers: ["A.hideous", "B.hilarious", "C.alone", "D.ecstatic", "E.frail"]
    },
    {
        title: " Dünya umrumda değil translate turkish",
<<<<<<< HEAD
        trueAnswer: "B.can`t be bothered",
        answers: ["A.go with the flow", "B.can`t be bothered", "C.don't be naive", "D.stop bugging me", "E.what's your game?"]
    },
    {
=======
        trueAnswer: "can`t be bothered",
        answers: ["go with the flow", "can`t be bothered", "don't be naive", "stop bugging me", "what's your game?"]
    },
 {
>>>>>>> 66a47fae81435b18ab047e6e25921579a8fc2125
        title: "Ben öncüyüm translate turkish?",
        trueAnswer: "B.I am pioneer",
        answers: ["A.You have not loyalty", "B.I am pioneer", "C.I am obsessed with", "D.I deserved to", "E.I am no longer "]
    }
<<<<<<< HEAD
=======
    
>>>>>>> 66a47fae81435b18ab047e6e25921579a8fc2125




]





class QuestionG {
    point = 0;
    nextQ = -1;
    qData = [];
    currentQuestion = null;

    constructor(data) {
        this.qData = data;
    }

    nextQuest() {
        if (this.nextQ == this.qData.length - 1) {
            console.log("oyun bitdi")
<<<<<<< HEAD
            gameEnd.textContent = "CONGRATULATİONS"
            endSound.play()


        } else {
=======
              gameEnd.textContent = "CONGRATULATİONS"
            endSound.play()
        }
        else {
>>>>>>> 66a47fae81435b18ab047e6e25921579a8fc2125
            this.nextQ += 1;
            const qTime = this.qData[this.nextQ];
            this.currentQuestion = qTime;
            console.log(qTime)
            return qTime
        }
    }
}

//!--------------------------------------------------------------------------------
const qTitle = document.querySelector("#qTitle");
const qBtn = document.querySelector("#qBtn")
const okayİmg = document.querySelector("#okayİmg")
const falseImage = document.querySelector("#falseImage");
const point = document.querySelector("#point")
const correctSound = document.querySelector("#correctSound");
const wrongSound = document.querySelector("#wrongSound")
const progress = document.querySelector("#progress")
const gameEnd = document.querySelector("#gameEnd")
const endSound = document.querySelector("#endSound")

<<<<<<< HEAD
let correctAnswers = 0;



=======
let correctAnswers=0;
>>>>>>> 66a47fae81435b18ab047e6e25921579a8fc2125

const gameQ = new QuestionG(Questions);//!json adıdı bu

function startGame() {
    gameQ.nextQuest()//! 1 sualı menimsetsin deye qObj ye

    const qObj = gameQ.currentQuestion;
    qTitle.innerHTML = qObj.title;

    qBtn.innerHTML = qObj.answers
        .map(
            (item) =>
                `<button class="btn btn-outline-primary"   onclick="selectItem('${item}')">${item}</button>`
        ).join("");

    console.log(qObj);

}

startGame()



function selectItem(userChoose) {
    console.log(userChoose)
    console.log(gameQ.currentQuestion);

    const currentQuestion = gameQ.currentQuestion;

    if (userChoose === currentQuestion.trueAnswer) {
        console.log("düz tapdi");

        correctAnswers++;
<<<<<<< HEAD
        progress.style.width = `${(correctAnswers / Questions.length) * 100}%`;
=======
     progress.style.width = `${(correctAnswers / Questions.length) * 100}%`;
>>>>>>> 66a47fae81435b18ab047e6e25921579a8fc2125
        gameQ.point += 10;
        point.textContent = `Your point: ${gameQ.point}`;

        okayİmg.style.display = "block";
        falseImage.style.display = "none";
        correctSound.play();

        setTimeout(() => {
            startGame();
            okayİmg.style.display = "none";
        }, 1500);
    } else {
        console.log("sehv tapdi");

        falseImage.style.display = "block";
        okayİmg.style.display = "none";
        wrongSound.play()
        setTimeout(() => {
            startGame();
            falseImage.style.display = "none";
        }, 1500);
    }


}































 
