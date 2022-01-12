const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-button");
const cashGivenDiv = document.querySelector(".cash-given-div");
const changeReturnDiv = document.querySelector(".change-return-div");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", () => {
  hideErrorMessage();
  if (Number(billAmount.value > 0)) {
    nextButton.style.display = "none";
    cashGivenDiv.style.display = "block";
  } else {
    showErrorMessage("Invalid Bill Amount");
  }
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideErrorMessage();
  if (Number(cashGiven.value) >= Number(billAmount.value)) {
    const amountToBeReturned =
      Number(cashGiven.value) - Number(billAmount.value);
    calculateChange(amountToBeReturned);
  } else {
    showErrorMessage(
      "The cash provided should be atleast equal to Bill Amount"
    );
  }
});

const calculateChange = (amountToBeReturned) => {
  changeReturnDiv.style.display = "block";
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned %= availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
};

const hideErrorMessage = () => {
  errorMessage.style.display = "none";
};
const showErrorMessage = (msg) => {
  errorMessage.style.display = "block";
  errorMessage.innerText = msg;
};
