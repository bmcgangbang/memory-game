const cards = document.querySelectorAll(".card");



let matched = 0;
let maxTime = 20;
let cardOne, cardTwo;
let disableDeck = false;
let isPlaying = false;

function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matched++;
        if(matched == 8) {
            document.getElementById("Message-Container").style.visibility = "visible";
            var audio = new Audio('images/yamate-kudesai.mp3')
            audio.play();

         var x=document.getElementsById("Timer");
         x.remove();

        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});


  //win
  function toggleVisablity(){
    document.getElementById("Message-Container").style.visibility = "hidden";
    shuffleCard()
    location.reload();
  }

// Using JavaScript to open the page in fullscreen mode
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

//audio
function playSound() {
    var audio = new Audio('images/card.mp3')
    audio.play();
  }


//timer
function timestart(){var timeLeft = 60;
var elem = document.getElementById('Timer');
var timerId = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft == 0) {
    location.reload();
  
  } else {
    elem.innerHTML = 'Time:' + timeLeft ;
    timeLeft--;
  }
}
}