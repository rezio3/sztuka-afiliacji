const passwordForm = document.getElementsByClassName(
	"password-section-container"
);
const passwordInput = document.querySelector("#password");
const wrongPasswordSpan = document.querySelector(".wrong-password-span");
const mainSection = document.querySelector(".main-section-container");

let nextPage = false;

const checkPassword = (event) => {
	event.preventDefault();
	if (passwordInput.value === "PRODUKTY") {
		nextPage = true;
		passwordForm[0].classList.add("page-off");
		mainSection.classList.remove("page-off");
	} else {
		nextPage = false;
		wrongPasswordSpan.innerHTML = "Wprowadź poprawne hasło";
		wrongPasswordSpan.classList.add("wrong-password-anim");
		setTimeout(() => {
			wrongPasswordSpan.classList.remove("wrong-password-anim");
		}, 400);
	}
};

passwordInput.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		checkPassword(event);
	}
});
