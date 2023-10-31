const passwordForm = document.getElementsByClassName(
	"password-section-container"
);
const passwordInput = document.querySelector(".input-password");
const wrongPasswordSpan = document.querySelector(".wrong-password-span");
const okButton = document.querySelector(".check-password-button");
const mainSection = document.querySelector(".main-section-container");

let nextPage = false;
let passInput = "";

const inputChange = (e) => {
	passInput = e.value;
};
console.log(okButton);
const checkPassword = () => {
	if (passInput === "PRODUKTY") {
		nextPage = true;
		passwordForm[0].classList.add("page-off");
		mainSection.classList.remove("page-off");
	} else {
		nextPage = false;
		wrongPasswordSpan.innerHTML = "Wprowadź poprawne hasło";
	}
};

passwordInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		checkPassword();
	}
});
