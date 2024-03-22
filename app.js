const billInp = document.querySelector(".bill-inp");
const percents = document.querySelectorAll("#percents");
const percentInp = document.getElementById("percent-inp");
const numberOfPeopleInput = document.querySelector(".number-of-people-input");
const errorMessage = document.querySelector(".error-text");
const resetBtn = document.getElementById("reset");
const tipAmount = document.getElementById("tip-amount");
const total = document.getElementById("total");

// calculate functions

// Use forEach to take the entire value and store it in a variable for use in another scope
let selectedPercent;

percents.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    selectedPercent = buttons.value;
  });
});

numberOfPeopleInput.addEventListener("input", (e) => {
  const billInpValue = billInp.value;
  const percentInpValue = parseFloat(percentInp.value);
  const numberOfPeopleInputValue = parseFloat(e.target.value);

  // calculate percents and save it in variables
  if (selectedPercent) {
    tipAmountProcessing = (selectedPercent / 100) * billInpValue;
  } else if (percentInpValue) {
    tipAmountProcessing = (percentInpValue / 100) * billInpValue;
  } else {
    return;
  }
  const totalProcessing = tipAmountProcessing * numberOfPeopleInputValue;

  // lets show percents in dom
  tipAmount.innerHTML = `$${tipAmountProcessing}`;
  total.innerHTML = `$${totalProcessing}`;
});

// empty the values and this function use onClick in html on reset btn
const resetValues = () => {
  billInp.value = "";
  percentInp.value = "";
  numberOfPeopleInput.value = "";
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";

  // working the buttons for give them all default styles
  percents.forEach((btn) => {
    if (
      !btn.style.color.includes("rgb(255, 255, 255)") ||
      !btn.style.backgroundColor.includes("rgba(0, 71, 75, 1)")
    ) {
      btn.style.color = "rgb(255, 255, 255)";
      btn.style.backgroundColor = "rgba(0, 71, 75, 1)";
    }
  });

  // if logic for input borders
  if (
    billInp.classList.contains("greenLine") ||
    billInp.classList.contains("redLine") ||
    percentInp.classList.contains("greenLine") ||
    percentInp.classList.contains("redLine") ||
    numberOfPeopleInput.classList.contains("greenLine") ||
    numberOfPeopleInput.classList.contains("redLine") ||
    errorMessage.style.display === "block"
  ) {
    billInp.classList.remove("greenLine");
    billInp.classList.remove("redLine");
    percentInp.classList.remove("greenLine");
    percentInp.classList.remove("redLine");
    numberOfPeopleInput.classList.remove("greenLine");
    numberOfPeopleInput.classList.remove("redLine");
    errorMessage.style.display = "none";
  }
};

// change input border lines with redLine and greeLine
const changeInpBorderColors = () => {
  // bill inp border styles
  billInp.addEventListener("input", (e) => {
    const BillInpValue = e.target.value;
    if (BillInpValue === "" || BillInpValue <= 0) {
      e.target.classList.add("redLine");
    } else {
      e.target.classList.remove("redLine");
      e.target.classList.add("greenLine");
    }
  });

  // percents btn styles
  percents.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !i.style.color.includes("rgb(0, 71, 75)") &&
        !i.style.backgroundColor.includes("rgb(159, 232, 223)")
      ) {
        i.style.color = "rgba(0, 71, 75, 1)";
        i.style.backgroundColor = "rgba(159, 232, 223, 1)";
      } else {
        i.style.color = "rgba(255, 255, 255, 1)";
        i.style.backgroundColor = "rgba(0, 71, 75, 1)";
      }
    });
  });

  // percent inp border styles
  percentInp.addEventListener("input", (e) => {
    const percentInpValue = e.target.value;
    if (percentInpValue === "" || percentInpValue <= 0) {
      e.target.classList.add("redLine");
    } else {
      e.target.classList.remove("redLine");
      e.target.classList.add("greenLine");
    }
  });

  // numberOfPeopleInput inp border styles and error message styles
  numberOfPeopleInput.addEventListener("input", (e) => {
    const peopleInpValue = e.target.value;
    if (peopleInpValue === "" || peopleInpValue <= 0) {
      e.target.classList.add("redLine");
      errorMessage.style.display = "block";
    } else if (peopleInpValue !== "") {
      e.target.classList.remove("redLine");
      e.target.classList.add("greenLine");
      errorMessage.style.display = "none";
    } else {
      e.target.classList.remove("redLine");
    }
  });
};

changeInpBorderColors();
