function hideScores() {
  const boxes = document.querySelectorAll("div");

  for (const box of boxes) {
    if (box.textContent === "Average Score" || box.textContent === "Mean Score") {
      const value = box.nextElementSibling;

      if (!value.classList.contains("score-spoiler")) {
        value.classList.add("score-spoiler");

        value.addEventListener("click", function () {
            value.classList.toggle("score-spoiler-revealed");
        });
      }
    }
  }
}
setInterval(hideScores, 500);

function hideCardScores() {
  const scores = document.querySelectorAll(".percentage");
  
  for (const score of scores) {
    if (!score.classList.contains("percentage-spoiler")) {
        score.classList.add("percentage-spoiler");
      }
    }
}
setInterval(hideCardScores, 500);

function hideSmiles() {
  const smiles = document.querySelectorAll(".icon.svg-inline--fa.fa-smile");

    for (const smile of smiles) {
        if (!smile.classList.contains("smile-spoiler")) {
            smile.classList.add("smile-spoiler");
        }
    }
}
setInterval(hideSmiles, 500);

function hideMehs() {
  const mehs = document.querySelectorAll(".icon.svg-inline--fa.fa-meh");

    for (const meh of mehs) {
        if (!meh.classList.contains("meh-spoiler")) {
            meh.classList.add("meh-spoiler");
        }
    }
}
setInterval(hideMehs, 500);

function hideFrowns() {
  const frowns = document.querySelectorAll(".icon.svg-inline--fa.fa-frown");

    for (const frown of frowns) {
        if (!frown.classList.contains("frown-spoiler")) {
            frown.classList.add("frown-spoiler");
        }
    }
}
setInterval(hideFrowns, 500);




