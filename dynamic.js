// Future feature resources:
// 	- https://michalsnik.github.io/aos/
// 	- https://css-tricks.com/aos-css-driven-scroll-animation-library/
// 	- https://github.com/michalsnik/aos
// 	- https://www.superhi.com/blog/how-to-add-web-design-elements-that-fade-in-and-out-on-scroll 

const projects = [
	{
		name: "Remotivate",
		link: "http://remotivate.herokuapp.com/",
		ref: "images/Remotivate.png",
		description: "I have discovered some very inspirational people that have affected the way I approach every day. With all that I have learned from them, I realized that losing motivation is inevitable. Remotivate is intended to let you reflect on the things that mean the most to you — in the form of a quote, video, or image — and quickly remind yourself of the reasons to <em>keep going</em>.",
		githubLink: "https://github.com/kennyjohn/Remotivate",
		tools: "React, Redux, Sass, Firebase, Webpack"
	},
	{	
		name: "Parks and 'Marks",
		link: "https://shrouded-cove-68295.herokuapp.com/",
		ref: "images/Parks-And-Marks.png",
		description: "The idea behind this project is to generate community awareness and appreciation for the parks and landmarks in my city. Users can create an account to leave comments, make suggestions, and share experiences with other visitors.",
		githubLink: "https://github.com/kennyjohn/ParksAndMarks",
		tools: "Node, JavaScript, MongoDB, Express"
	},
	{
		name: "RGB Game",
		link: "MyColorGame/landingColor.html",
		ref: "images/RGB-Game.png", 
		description: "Depending on the RGB color value given at the top, the player selects the square that corresponds with the given RGB color value. If the current player presses “New Colors” before the game is over, they forfeit the round and give their opponent a point. The winner of each round is determined by the number of tries it takes to select the correct color.",
		githubLink: "https://github.com/kennyjohn/kennyjohn.github.io/tree/master/MyColorGame",
		tools: "JavaScript, HTML, CSS"
	},
	{
		name: "Stat Tracker",
		link: "http://www.flagfootballstattracker.com/#/create-league",
		ref: "images/Stat-Tracker.png",
		description: "Stat Tracker is an application that I built with my Senior Design group at the University of California, Irvine. Working closely with the designer and the back-end team, I contributed by implementing the home page, login page, registration page, and a page that will allow recreational flag league owners to add a league to their account. The pages that I implemented will allow league owners to register leagues and ultimately generate revenue for the company.",
		githubLink: undefined,
		tools: "Express, JavaScript, MongoDB, Node"
	}
], projectHexCodes = ['#DE4848', '#6598DE', '#3ACAC9', '#72C2A7']; // Remotivate, Parks & Marks, RGB Game, Stat Tracker

const fillContainer = () => {
	let container = document.querySelector('.Projects-Container');
	projects.map((project, index) => {
		let wrapper = document.createElement('div');
		wrapper.className = 'Projects-Container__Card';
		wrapper.innerHTML = `
		<div class="Projects-Container__Card--column">
			<div class="Projects-Container__Card--overview">
				<h3 class="h3--Responsive">${project.name}</h3>
				<p><em>${project.tools}</em></p>
				<a href=${project.link} class="Projects-Container__Card--link">Check out the website here</a>
				<p class="Projects-Container__Card--description">
					${project.description}	
				</p>
				${index === 3 ? 
					`<button class="Buttons Buttons__Projects--CTA-Disabled">Private Repo</button>
				</div>` :
				`<a href=${project.githubLink}><button class="Buttons Buttons__Projects--CTA">Github Code</button></a>`}
			</div>
		</div>
		<img class="Projects-Container__Card--column" src=${project.ref} alt=${project.name}>
		`;
		container.appendChild(wrapper);
	});
};

const addContainerBorders = () => {
	projectHexCodes.map((code, index) => {
		const borderedContainer = document.querySelectorAll('.Projects-Container__Card--overview');
		Array.from(borderedContainer)[index].style.borderLeft = `1rem solid ${code}`;

		const h3Headers = document.querySelectorAll('.h3--Responsive');
		Array.from(h3Headers)[index].style.borderTop = `1rem solid ${code}`;
	});
}

$(document).ready(function() { // once the whole page is ready
	var scrollButton = $('.Buttons__Bio--CTA');
	scrollButton.click(function(e) {
		e.preventDefault(); // prevents default action of jumping down to section
		$('body, html').animate({
			scrollTop: $('.Projects-Container').offset().top // how far away from the top we are
		}, 900);
	});
});
