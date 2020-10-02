const inputRef = document.querySelector("#validation-input");

const validInput = function (event) {
  if (event.target.value.length === Number(event.target.dataset.length)) {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  } else {
    event.target.classList.remove("valid");
    event.target.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", validInput);
