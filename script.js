const enterButton = document.querySelector("#enter-button");
const agreementCheckbox = document.querySelector("#agreement");
const submitButton = document.querySelector("#submit-btn");
const counterElement = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

const validyLogin = () => {
  const email = document.querySelector("#enter-email").value;
  const password = document.querySelector("#enter-password").value;
  if (email === "tryber@teste.com" && password === "123456") {
    return window.alert("Olá, Tryber!");
  }
  window.alert("Email ou senha inválidos.");
};



function verifyAgreement() {
  if (agreementCheckbox.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

textarea.addEventListener('input', () => {
  const counter = 500 - textarea.value.length;
  counterElement.innerText = `${counter} / 500`;
});

agreementCheckbox.addEventListener("click", verifyAgreement);
enterButton.addEventListener("click", validyLogin);