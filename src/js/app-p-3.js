const target = document.querySelector("#target");
gsap.registerPlugin(ScrollTrigger);

// const handleIntersection = (entries, observer) => {
// 	entries.forEach((entry) => {
// 		console.log(entry.isIntersecting);
// 	});
// };

// const observer = new IntersectionObserver(handleIntersection);

// observer.observe(target);

gsap.from(target, {
	scrollTrigger: {
		trigger: target,
		start: "top bottom",
		end: "top 300px",
		scrub: 1,
		markers: true,
	},
	x: "200px",
	opacity: 0,
});
