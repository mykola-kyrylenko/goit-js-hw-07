const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");
const showCounterValue = () => {
  valueRef.textContent = counterValue;
};
let counterValue = 0;

const decrement = function () {
  counterValue -= 1;
  showCounterValue();
};
const increment = function () {
  counterValue += 1;
  showCounterValue();
};

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);
