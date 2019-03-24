const projects = [
	{
		name: "Remotivate",
		link: "http://remotivate.herokuapp.com/",
		ref: "images/Remotivate.jpg",
		description: "I have come across some very inspirational people that have affected the way I approach every day. Some days are harder than others, but Remotivate is intended to motivate you even when you encounter these difficult days. The goal of the application is to quickly remind yourself of the things that drive you every day.",
		githubLink: "https://github.com/kennyjohn/Remotivate"
	},
	{	
		name: "Parks and 'Marks",
		link: "https://shrouded-cove-68295.herokuapp.com/",
		ref: "images/Parks-And-Marks.png",
		description: "The idea behind this project is to generate community awareness and appreciation for the parks and landmarks in my city. My hopes are to benefit the communities of other cities as well. Through this web application, I primarily experimented with basic Node.js, Express.js, MongoDB, and NoSQL. Users can create an account to leave comments, make suggestions, and share experiences for other visitors.",
		githubLink: "https://github.com/kennyjohn/ParksAndMarks"
	},
	{
		name: "RGB Game",
		link: "MyColorGame/landingColor.html",
		ref: "images/RGB_Game.png", 
		description: "Inspired by Colt Steele’s <a href='https://www.udemy.com/the-web-developer-bootcamp/learn/v4/content'>Color Game</a>, this project aims to teach the RGB color model. Depending on the RGB color value given at the top, the player should select the square color that corresponds with the given RGB color value. I implemented a score system and turned the previous project into a two-player game. If the current player presses “New Colors” before the game is over, the opposite player is automatically given a point. Otherwise, the winner of each round is determined by the number of tries it takes for the player to choose the corresponding color.",
		githubLink: "https://github.com/kennyjohn/kennyjohn.github.io/tree/master/MyColorGame"
	},
	{
		name: "Stat Tracker",
		link: "http://www.flagfootballstattracker.com/#/create-league",
		ref: "images/Stat-Tracker.png",
		description: "Stat Tracker is an application that I built with my Senior Design group at the University of California, Irvine. Working closely with the designer and the back-end team, I contributed by implementing the home page, login page, registration page, and a page that will allow recreational flag league owners to add a league to their account. Through this process, I learned about the MEAN stack, and gained more experience with HTML, CSS, and JavaScript. The pages that I implemented are essential components to the objective of the application because it will allow league owners to register leagues and ultimately generate revenue for the company.",
		githubLink: undefined
	}
];

const fillContainer = () => {
	let container = document.querySelector('.Projects-Container');
	projects.map( (project, index) => {
		let wrapper = document.createElement('div');
		wrapper.className = 'Projects-Container__Card';
		if(index % 2 == 0) {
			wrapper.innerHTML = `
			<img class="Projects-Container__Card--column" src=${project.ref} alt=${project.name}>
			<div class="Projects-Container__Card--column">
				<h3>${project.name} </h3>
				<a href=${project.link}><p>Check out the website here</p></a>
				<p>
					${project.description}	
				</p>
				<a href=${project.githubLink}><button class="Buttons Buttons__Projects--CTA">Github Code</button></a>
			</div>
			`;
		} else if(index === 3) {
			wrapper.innerHTML = `
			<div class="Projects-Container__Card--column">
				<h3>${project.name} </h3>
				<a href=${project.link}><p>Check out the website here</p></a>
				<p>
					${project.description}	
				</p>
			</div>
			<img class="Projects-Container__Card--column" src=${project.ref} alt=${project.name}>
			`;
		} else {
			wrapper.innerHTML = `
			<div class="Projects-Container__Card--column">
				<h3>${project.name} </h3>
				<a href=${project.link}><p>Check out the website here</p></a>
				<p>
					${project.description}	
				</p>
				<a href=${project.githubLink}><button class="Buttons Buttons__Projects--CTA">Github Code</button></a>
			</div>
			<img class="Projects-Container__Card--column" src=${project.ref} alt=${project.name}>
			`;
		}
		container.appendChild(wrapper);
	});
};

$(document).ready(function() { // once the whole page is ready
	var scrollButton = $('.Buttons__Bio--CTA');
	scrollButton.click(function(e) {
		e.preventDefault(); // prevents default action of jumping down to section
		$('body, html').animate({
			scrollTop: $('.Projects-Container').offset().top // how far away from the top we are
		}, 900);
	});
});
