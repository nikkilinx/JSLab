const difficulties = ["Super Easy","Easy", "Medium", "Hard", "Super Hard", "Extreme"];
const goalString = ["asdf;lkj", "lad fad sad dad",
  "This is not a test.", "Thing's are getting a bit harder now, aren't they?",
  "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?", "Eat your pizzas with pizazz in a suburban restaurant without obstinance."];

//adding color changer to change goal font with each string
const userinputColor = ["#337202", "#ABE602", "#E68800", "#62078A", "#AB007A", "#AB0000"]

stringCount = goalString.length
var i = 0;

start = Date.now()

window.addEventListener("keypress", function (event) {
  const textbox = document.getElementById("userinput");
  textbox.textContent = textbox.textContent + event.key;
  if (textbox.textContent == goalString[i]) {
    end = Date.now()
    const result = document.getElementById("result");
    result.textContent = "You Win!";
    diff = (end - start)/1000
    next = document.createElement('button')
    next.innerHTML = "NEXT"
     //only append next button if there is another string.
    if (i < (stringCount - 1)) {
        document.body.appendChild(next)
    }

    timing = document.createElement('p')
    timing.textContent = diff
    document.body.appendChild(timing)
    next.addEventListener('click', function nextChallenge () {
        start = Date.now()
        document.body.removeChild(next);
        document.body.removeChild(timing)
        result.textContent = "Type the Following text:"
        textbox.textContent = "";
        i = i+1;
        lvl = document.getElementById("level")
        lvl.textContent = difficulties[i]
        goal = document.getElementById("goal")
        goal.textContent = goalString[i]
        //changes color with every challenge
        goal.style.color = userinputColor[i]

    })
  }

  restartButton = document.querySelector("#restartButton")
  restartButton.addEventListener('click', function restart() {
      start = Date.now()
      i = 0;
      // find the level, result, and goal elements and reset their textContent
      goal = document.getElementById("goal");
      goal.textContent = goalString[0];
      lvl = document.getElementById("level");
      lvl.textContent = difficulties[0];
      const textbox = document.getElementById("userinput");
      textbox.textContent = "";

      //reset the heading/buttons/timing/colors when restart is clicked 
      result.style.color = "black"
      result.textContent = "Type the Following text:"
      if (document.body.contains(next)){
          document.body.removeChild(next)
      }
      if (document.body.contains(timing)){
          document.body.removeChild(timing)
      }
      goal.style.color = userinputColor[i]
  })
});
