console.log("Hello, world xd");

var quotes = [
  'The first step is always the hardest',
	"You only fail when you stop trying.",
	"Do something today that your future self will thank you for.",
	"Stay positive, work hard, make it happen.",
	"Don't quit.",
	"When shit happens turn it into fertilizer.",
	"Make it fuck!ng happen!",
	"Work hard in silence. Let success make the noise.",
	"Never allow waiting to become a habit. Live your dreams and take risks. Life is happening now.",
	"It always seems impossible until it's done.",
	"If people are trying to bring you down, it only means you're above them.",
	"It's going to be hard but hard is not impossible.",
	"Work hard, dream big.",
	"Be somebody who makes everybody feel like a somebody."
];

document.getElementsByClassName("quote")[0].innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

