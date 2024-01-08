const target1 = document.querySelectorAll("#target1");
const target2 = document.querySelectorAll("#target2");
const target3 = document.querySelectorAll("#target3");
const target4 = document.querySelectorAll("#target4");
const target5 = document.querySelectorAll("#target5");
const target6 = document.querySelectorAll("#target6");
const target7 = document.querySelectorAll("#target7");
const target8 = document.querySelectorAll("#target8");
const target9 = document.querySelectorAll("#target9");

gsap.registerPlugin(ScrollTrigger);

const targetsArr = [
	target1,
	target2,
	target3,
	target4,
	target5,
	target6,
	target7,
	target8,
	target9,
];

targetsArr.map((e) => {
	gsap.from(e, {
		scrollTrigger: {
			trigger: e,
			start: "top 80%",
			end: "top 300px",
			scrub: 1,
		},
		x: "200px",
		opacity: 0,
	});
});

const dolar = document.querySelector(".krok-img");

gsap.from(dolar, {
	scrollTrigger: {
		trigger: dolar,
		start: "top bottom",
		end: "top 300px",
		scrub: 1,
	},
	rotation: "120",
});

const fourthSection = document.querySelector(".fourth-text-container");
const personsImg = document.querySelector("#persons-img");

gsap.from(fourthSection, {
	scrollTrigger: {
		trigger: fourthSection,
		start: "top bottom",
		end: "top 300px",
		scrub: 1,
	},
	x: "-200px",
	opacity: 0,
});
gsap.from(personsImg, {
	scrollTrigger: {
		trigger: personsImg,
		start: "top bottom",
		end: "top 300px",
		scrub: 1,
	},
	x: "200px",
	opacity: 0,
});
