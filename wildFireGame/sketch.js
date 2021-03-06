let playerMoney = [];
let smallForest = [];
let bigForest = [];
let bushGrass = [];
let fireForest = [];
let wX;
let wH;
let choiceER;//extinguix right away
let choicePR;//plant fire resistant trees
let choiceCB;//controle burning
//buttons
let startButton;
let continueButton;
let playAgainButton;

let gColor;
let grColor;

let screen = 1;
let fireYear;

function setup() {
	createCanvas(windowWidth, windowHeight);
	wX = windowWidth;
	wH = windowHeight;
	gColor = color(140, 193, 82);
	grColor = color(160, 212, 104);
	fireYear = 4;
	let moneyX;
	moneyX = wX - 50;
	for (let i = 0; i < 6; i++) {
		playerMoney.push(new Money(moneyX, 40, color(140, 193, 82)));
		moneyX -= 50;
	}
	for (let i = 0; i < 3; i++) {
		smallForest.push(new SmallTree(random(0, wX), wH * 39 / 50,'no'));
		bigForest.push(new BigTree(random(0, wX), wH * 39 / 50, 'no'));
		bushGrass.push(new Bush(random(0, wX), wH - 40));
	}
	choiceER = new Choice(wX * 5 / 100, 70, fireex, "Extinguish fire right away", 1, color(255, 255, 255));
	choicePR = new Choice(wX * 5 / 100, 130, plant, "Plant fire resistant trees", 2, color(255, 255, 255));
	choiceCB = new Choice(wX * 5 / 100, 190, fireIcon, "Conduct control burings", 2, color(255, 255, 255));

	startButton = new RedButton(wX * 5 / 100, wH * 15 / 100 + 160, "Start", color(255, 162, 95), 0);
	continueButton = new RedButton(wX * 5 / 100, wH * 15 / 100 + 160, "Continue", color(104, 199, 240), 0);
	playAgainButton = new RedButton(wX * 5 / 100, wH * 15 / 100 + 160, "Play Again", color(255, 162, 95), 0);

	//sound
	buttonSound.volume(0.1);
}


function draw() {
	sky();
	budgetBar();
	forest();
	switch (screen) {
		case 1:
			startScreen();
			break;
		case 2:
			playScreen();
			break;
		case 3:
			verdictScreen();
			break;
		case 4:
			endScreen();
			break;
		default:
			startScreen();
			break;
	}
}

function budgetBar() {
	for (let i = 0; i < playerMoney.length; i++) {
		playerMoney[i].drawMoney();
	}
}
function forest() {
	for (let c = 0; c < bushGrass.length; c++) {
		bushGrass[c].drawBush();
	}
	grass();
	for (let a = 0; a < smallForest.length; a++) {
		smallForest[a].drawSmallTree();
	}
	for (let b = 0; b < bigForest.length; b++) {
		bigForest[b].drawBigTree();
	}
	if (fireForest.length > 0) {
		for (let d = 0; d < fireForest.length; d++) {
			fireForest[d].drawFireTree();
		}
	}
}
