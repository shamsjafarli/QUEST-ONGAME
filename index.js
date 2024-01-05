const Questions = [
    {
        title: "Funny in advance?",
        trueAnswer: "Hilarious",
        answers: ["Hideous", "Hilarious", "Wealthy", "Ecstatic", "Frail"]
    },
    {
        title: "What is the meaning just in case?",
        trueAnswer: "önlem",
        answers: ["önlem", "harika", "hizli", "hoş", "bakimsiz"]
    },
    {
        title: "Swear translate turkish",
        trueAnswer: "yemin ederim",
        answers: ["yemin ederim", "bakariz", "bestelemek", "yalanci", "ima etmek"]
    },
    {
        title: "Solo what is the meaning?",
        trueAnswer: "alone",
        answers: ["hideous", "hilarious", "alone", "ecstatic", "frail"]
    },
    {
        title: " Dünya umrumda değil translate turkish",
        trueAnswer: "can`t be bothered",
        answers: ["go with the flow", "can`t be bothered", "don't be naive", "stop bugging me", "what's your game?"]
    },
 {
        title: "Ben öncüyüm translate turkish?",
        trueAnswer: "B.I am pioneer",
        answers: ["A.You have not loyalty", "B.I am pioneer", "C.I am obsessed with", "D.I deserved to", "E.I am no longer "]
    }
    




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
              gameEnd.textContent = "CONGRATULATİONS"
            endSound.play()
        }
        else {
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

let correctAnswers=0;

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
     progress.style.width = `${(correctAnswers / Questions.length) * 100}%`;
        gameQ.point += 10;
        point.textContent = `Your point: ${gameQ.point}`;
        falseImage.style.display = "none";
        okayİmg.style.display = "block";
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
            falseİmg.style.display = "none";
        }, 1500);
    }
}
































 
