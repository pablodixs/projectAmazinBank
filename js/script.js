function mascara(i) {
  const v = i.value;

  if (isNaN(v[v.length - 1])) {
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";
}

function checkInputs(inputs) {
  var filled = true;

  inputs.forEach(function (input) {
    if (input.value === "") {
      filled = false;
    }
  });

  return filled;
}
var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
inputs.forEach(function (input) {
  input.addEventListener("keyup", function () {
    if (checkInputs(inputs)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});