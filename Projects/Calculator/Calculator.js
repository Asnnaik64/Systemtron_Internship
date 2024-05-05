(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    try {
      if (screen.value === "") {
        screen.value = "0";
      } else {
        let answer = eval(screen.value);
        if (isNaN(answer) || !isFinite(answer)) {
          throw new Error("Invalid input");
        }
        screen.value = answer;
      }
    } catch (error) {
      screen.value = "Error";
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });

  document.addEventListener("keydown", function (e) {
    const key = e.key;
    const keyCode = e.keyCode;

    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105)) {
      //number keys
      screen.value += key;
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      //operator keys
      screen.value += key;
    } else if (keyCode === 13) {
      //Enter key
      equal.click();
    } else if (keyCode === 27) {
      //Escape key
      clear.click();
    }
  });
})();
