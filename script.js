/*  
darkMode.addEventListener("oninput", function () {
  let darkMode = document.getElementById("darkMode");
  let lSide = document.getElementById("lSide");
  let dSide = document.getElementById("dSide");

  if (darkMode.checked) {
    body.style.backgroundColor = "black";
    console.log(true);
  } else {
    body.style.backgroundColor = "white";
  }
});

console.log(darkMode.checked);
*/

function myFunction() {
  let darkMode = document.getElementById("darkMode");
  let lSide = document.getElementById("lSide");
  let dSide = document.getElementById("dSide");
  let colorWhite = document.getElementById("colorWhite");
  let colorBlack = document.getElementById("colorBlack");
  let arrow = document.getElementById("arrow");

  if (darkMode.checked) {
    lSide.style.opacity = "0";
    dSide.style.opacity = "1";
    dSide.style.color = "white";
    colorBlack.style.opacity = "1";
    colorWhite.style.opacity = "0";
    arrow.style.opacity = "0";
  } else {
    lSide.style.opacity = "1";
    dSide.style.opacity = "0";
    colorWhite.style.opacity = "1";
    colorBlack.style.opacity = "0";
  }
}
