const difficulties = ["Super Easy","Easy", "Medium", "Hard", "Super Hard", "Extreme"];
const goalString = ["asdf;lkj", "lad fad sad dad",
  "This is not a test.", "Thing's are getting a bit harder now, aren't they?",
  "True! --nervous --very, very dreadfully nervous I had been and am; but why will you say that I am mad?", "Eat your pizzas with pizazz in a suburban restaurant without obstinance."];

var i = 0;

window.addEventListener("keypress", function (event) {
  const textbox = document.getElementById("userinput");
  textbox.textContent = textbox.textContent + event.key;
  if (textbox.textContent == goalString[i]) {
    const result = document.getElementById("result");
    result.textContent = "You Win!";
    textbox.textContent = "";
    i = i+1;
    lvl = document.getElementById("level")
    lvl.textContent = difficulties[i]
    goal = document.getElementById("goal")
    goal.textContent = goalString[i]
  }
})

function restart() {
  // In here set i=0
  // find the level, result, and goal elements and reset their textContent
}